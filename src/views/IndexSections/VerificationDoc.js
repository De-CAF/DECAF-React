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
import { createNull } from "typescript";


export default function VerificationDoc() {
    const { active, account, activate, library, deactivate } = useWeb3React()


    const metaAddress = useSelector(selectMetaAddress)
    const role = useSelector(selectRole)

    const [issuer, setIssuer] = useState('')
    const [issuerAddress, setIssuerAddress] = useState('')
    const [buffer, setBuffer] = useState(null)
    const [noIssuer, setnoIssuer] = useState(null)

    const [ipfs, setIpfs] = useState(null)
    const [mimeType, setMimeType] = useState('')
    const [b64, setB64] = useState(null)
    const [ipfsHash, setipfsHash] = useState(null)
    const [docSig, setdocSig] = useState(null)

    const [contractToken1, setContractToken1] = useState(null)
    const [contractToken2, setContractToken2] = useState(null)

    useEffect(() => {
        create().then(ipfs => {
            setIpfs(ipfs)
        })
    }, [ipfs])

    function findUserInfo(address) {
        firestore.collection('users').where('accountAddress', '==', address).get().then((res) => {
            res.forEach(doc => {
                //console.log(doc.id, '=>', doc.data());
                setIssuer(doc.data())
            });
            console.log(issuer)
        })
        setIssuer('')
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
            } else {
                create().then(async (ipfs) => {
                    setIpfs(ipfs)
                    results = (await ipfs.add(reader.result))
                    console.log("ipfs hash: ", results.path)
                    setipfsHash(results.path)
                    const bufferedContents = await toBuffer(ipfs.cat(results.path)) // returns a Buffer
                    //console.log(bufferedContents)
                    setB64(Buffer(bufferedContents).toString('base64'))

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
                })
            }
        }

    }


    const sign = async (event) => {
        event.preventDefault()
        const documentsRecieved = await contractToken1.methods.getDocumentsSignedReceived().call({ from: metaAddress })
        const mssgHash = await contractToken2.methods.getMessageHash(ipfsHash).call({ from: metaAddress })
        var document = documentsRecieved.filter(function (item) { return item.mssgHash === mssgHash })
        document = document[0]
        const ethSignedMssgHash = await contractToken2.methods.getEthSignedMessageHash(mssgHash).call({ from: metaAddress })
        console.log(documentsRecieved)
        console.log(document)

        /*library.eth.personal.sign(mssgHash, metaAddress).then(async (signature) => {
            setdocSig(true)
            const signer = await contractToken2.methods.recoverSigner(ethSignedMssgHash, signature).call({ from: metaAddress })
            setIssuerAddress(signer)
            findUserInfo(signer)
        })*/
        if (document) {
            const signer = await contractToken2.methods.recoverSigner(ethSignedMssgHash, document.signature).call({ from: metaAddress })
            setIssuerAddress(signer)
            findUserInfo(signer)
            setnoIssuer(false)
        } else {
            setIssuer('')
            setIssuerAddress('')
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
                                            noIssuer ? (
                                                <>
                                                    <b>Document is not issued by anyone.</b>
                                                </>
                                            ) : (
                                                <>
                                                    <b>IPFS hash generated.</b>
                                                </>
                                            )

                                        )
                                    ) : (
                                        <>
                                            <b>File not uploaded.</b>
                                        </>
                                    )
                                }
                                </p>
                                <br></br>
                                <form >
                                    <div className="row">
                                        <label className="col-sm-3 col-form-label">File</label>
                                        <div className="col-sm-9">
                                            <input type="file" onChange={captureFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Signer's Name </label>
                                                <input disabled type="text" className="form-control" value={issuer ? (issuer.userName) : ("Name")} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Signer's Email address</label>
                                                <input disabled type="email" className="form-control" value={issuer ? (issuer.email) : ("Email")} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label className="col-sm-3 col-form-label">Signer's account address</label>
                                        <div className="col-sm-9">
                                            <div className="form-group">
                                                <input disabled type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" value={issuerAddress ? (issuerAddress) : ("e.g. 1Nasd92348hU984353hfid")} />
                                            </div>
                                        </div>
                                    </div>


                                </form>
                                {
                                    ipfsHash ? (
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="justify-content-center">
                                                    {
                                                        docSig ? (
                                                            <>
                                                                <button disabled className="btn-lg btn-simple btn-success btn-icon btn-round ">Signed <i className="tim-icons icon-check-2" /></button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button onClick={(e) => sign(e)} className="btn-lg btn-simple btn-primary btn-icon btn-round ">Who Signed? <i className="tim-icons icon-key-25" /></button>
                                                            </>
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
                        <p className="profile-description">Connect to Metamask for verification of files.</p>
                    </>
                )
            }

        </div >
    );
}
