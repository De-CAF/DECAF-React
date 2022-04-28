/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMetaAddress, selectRole, setContracts, selectContractDoc, selectContractVerification } from "../../features/userSlice";
import { firestore } from "../../firebase"
import { create } from 'ipfs-core'
import toBuffer from 'it-to-buffer'
import { useWeb3React } from '@web3-react/core'
import Decaf from '../../abis/Decaf.json'
import Verification from '../../abis/Verification.json'

import { injected } from "views/daap/metamaskConnector";

export default function SendFormUser() {
    const dispatch = useDispatch()
    const { active, account, activate, library, deactivate } = useWeb3React()


    const metaAddress = useSelector(selectMetaAddress)

    const [receiver, setReceiver] = useState('')
    const [issuer, setIssuer] = useState('')
    const [issuerAddress, setIssuerAddress] = useState('')
    const [buffer, setBuffer] = useState(null)

    const [ipfs, setIpfs] = useState(null)
    const [mimeType, setMimeType] = useState('')
    const [b64, setB64] = useState(null)
    const [ipfsHash, setipfsHash] = useState(null)
    const [docSig, setdocSig] = useState(null)
    const [signedDoc, setSignedDoc] = useState(null)
    const [noIssuer, setnoIssuer] = useState(null)


    const [contractToken1, setContractToken1] = useState(null)
    const [contractToken2, setContractToken2] = useState(null)


    useEffect(() => {
        create().then(ipfs => {
            setIpfs(ipfs)
        })
    }, [ipfs])

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const findUserInfo = (e) => {
        e.preventDefault();
        if (ValidateEmail(e.target.value)) {
            firestore.collection('users').where('email', '==', e.target.value).get().then((res) => {
                res.forEach(doc => {
                    //console.log(doc.id, '=>', doc.data());
                    setReceiver(doc.data())
                });
                console.log(receiver)
            })
        }
        setReceiver('')
    }

    const captureFile = async (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        //console.log(file.name.split('.').pop())
        if (file.name.split('.').pop() === "pdf") {
            setMimeType('application/pdf');
        } else {
            setMimeType('image/png')
        }
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = async () => {
            setBuffer(Buffer(reader.result))
            console.log('buffer', reader.result)
            var results;
            if (ipfs) {
                results = (await ipfs.add(reader.result))
                console.log("ipfs hash: ", results.path)
                setipfsHash(results.path)
                const bufferedContents = await toBuffer(ipfs.cat(results.path)) // returns a Buffer
                //console.log(bufferedContents)
                setB64(Buffer(bufferedContents).toString('base64'))
            } else {
                create().then(async (ipfs) => {
                    setIpfs(ipfs)
                    results = (await ipfs.add(reader.result))
                    console.log("ipfs hash: ", results.path)
                    setipfsHash(results.path)
                    const bufferedContents = await toBuffer(ipfs.cat(results.path)) // returns a Buffer
                    //console.log(bufferedContents)
                    setB64(Buffer(bufferedContents).toString('base64'))
                })

            }

            const netId = await library.eth.net.getId()
            const networkData1 = Decaf.networks[netId]
            const networkData2 = Verification.networks[netId]
            if (networkData1 && networkData2) {
                console.log("Contract Address 1: ", networkData1.address) //0x543328Cd57B74110c87c2676c1b9046Ccad256b3 infura
                console.log("Contract Address 2: ", networkData2.address) // 0x16Fc2Fb481DA460C3d37BdD9A311447e122a18cC
                const contractToken1 = new library.eth.Contract(Decaf.abi, networkData1.address);
                setContractToken1(contractToken1)
                const contractToken2 = new library.eth.Contract(Verification.abi, networkData2.address);
                setContractToken2(contractToken2)
            }
        }

    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const payTo = event.target[2].value
        const fileName = event.target[3].value.slice(12)
        console.log(payTo, fileName)
        try {
            //dispatch(setContracts({ contractDoc: contractToken1, contractVerification: contractToken2 }))
            contractToken1.methods.issueDocument(payTo, fileName, ipfsHash).send({ from: metaAddress }).then(async (r) => {
                const documentsIssued = await contractToken1.methods.getDocumentsIssued().call({ from: metaAddress })
                const documentsRecieved = await contractToken1.methods.getDocumentsReceived().call({ from: metaAddress })
                console.log(documentsIssued)
                console.log(documentsRecieved)
            })

            contractToken1.methods.signDocument(signedDoc.signature, signedDoc.mssgHash, payTo).send({ from: metaAddress }).then(async (r) => {
                const documentsSigned = await contractToken1.methods.getDocumentsSigned().call({ from: metaAddress })
            })


        } catch (err) {
            console.log('Error', err);
            window.alert('ERROR', err.message);
        }
    }

    function findSignerInfo(address) {
        firestore.collection('users').where('accountAddress', '==', address).get().then((res) => {
            res.forEach(doc => {
                //console.log(doc.id, '=>', doc.data());
                setIssuer(doc.data())
            });
            console.log(issuer)
        })
        setIssuer('')
    }


    const sign = async (event) => {
        event.preventDefault()
        const documentsRecieved = await contractToken1.methods.getDocumentsSignedReceived().call({ from: metaAddress })
        const mssgHash = await contractToken2.methods.getMessageHash(ipfsHash).call({ from: metaAddress })
        var document = documentsRecieved.filter(function (item) { return item.mssgHash === mssgHash })
        document = document[0]
        const ethSignedMssgHash = await contractToken2.methods.getEthSignedMessageHash(mssgHash).call({ from: metaAddress })

        const docRecieved = await contractToken1.methods.getDocumentsReceived().call({ from: metaAddress })
        var doc = docRecieved.filter(function (item) { return item.ipfsHash === ipfsHash })
        doc = doc[0]
        console.log(doc)
        if (document && doc) {
            if (doc.access) {
                const signer = await contractToken2.methods.recoverSigner(ethSignedMssgHash, document.signature).call({ from: metaAddress })
                setIssuerAddress(signer)
                findSignerInfo(signer)
                setdocSig(true)
                setSignedDoc(document)
                setnoIssuer(false)
            } else {
                setIssuer('')
                setIssuerAddress('')
                setdocSig(false)
                setnoIssuer(true)
            }
        } else {
            setIssuer('')
            setIssuerAddress('')
            setdocSig(false)
            setnoIssuer(true)
        }

    }

    return (
        <div className="card-body">
            {
                metaAddress ? (
                    <>
                        {
                            <>
                                {
                                    b64 ? (
                                        <>
                                            {
                                                mimeType === 'application/pdf' ? (
                                                    <>
                                                        <object>
                                                            <embed id="pdfID" type="text/html" width="600" height="600" src={`data:${mimeType};base64,${b64}`} />
                                                        </object>
                                                    </>
                                                ) : (
                                                    <>
                                                        <img src={`data:${mimeType};base64,${b64}`} />
                                                    </>
                                                )
                                            }

                                        </>
                                    ) : (
                                        <>
                                            <p align="center">Preview Document</p>
                                            <br></br>

                                        </>

                                    )
                                }
                                <p align="center">File Status: {
                                    ipfsHash ? (
                                        docSig ? (
                                            <>
                                                <b>File is signed on the blockchain.</b>
                                            </>
                                        ) : (
                                            <>
                                                <b>IPFS hash generated.</b>
                                            </>
                                        )
                                    ) : (
                                        <>
                                            <b>File not uploaded.</b>
                                        </>
                                    )
                                }
                                </p>
                                <br></br>
                                <form onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Receiver's Name </label>
                                                <input disabled type="text" className="form-control" value={receiver ? (receiver.userName) : ("Name")} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Receiver's Email address</label>
                                                <input type="email" onChange={findUserInfo} className="form-control" placeholder="shreyas@email.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-3 col-form-label">Pay to</label>
                                        <div className="col-sm-9">
                                            <div className="form-group">
                                                <input disabled type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" value={receiver ? (receiver.accountAddress ? (receiver.accountAddress) : ("The user is not connected to metamask")) : ("e.g. 1Nasd92348hU984353hfid")} />
                                                <span className="form-text"> {receiver ? ("Metamask account address of " + receiver.email) : ("")}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label className="col-sm-3 col-form-label">File</label>
                                        <div className="col-sm-9">
                                            <input type="file" onChange={captureFile} />
                                        </div>
                                    </div>

                                    {
                                        docSig ? (
                                            <>
                                                <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>
                                            </>
                                        ) : (
                                            <>
                                                <button disabled className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>
                                            </>
                                        )
                                    }


                                </form>
                                {
                                    ipfsHash ? (
                                        <div className="row">
                                            <label>Check signature of the document on blockchain</label>

                                            <div className="col-md-6">
                                                <div className="justify-content-center">
                                                    {
                                                        docSig ? (


                                                            <>
                                                                <button disabled className="btn-lg btn-simple btn-success btn-icon btn-round ">Signed by {issuer.userName} <i className="tim-icons icon-check-2" /></button>
                                                            </>



                                                        ) : (
                                                            noIssuer ? (
                                                                <>
                                                                    <button disabled className="btn-lg btn-simple btn-danger btn-icon btn-round ">Not authorised</button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <button onClick={(e) => sign(e)} className="btn-lg btn-simple btn-primary btn-icon btn-round "> Check Signature <i className="tim-icons icon-key-25" /></button>
                                                                </>
                                                            )
                                                        )
                                                    }
                                                </div>

                                            </div>


                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }

                            </>
                        }

                    </>
                ) : (
                    <>
                        <p className="profile-description">Connect to Metamask for sharing files.</p>
                    </>
                )
            }

        </div >
    );
}
