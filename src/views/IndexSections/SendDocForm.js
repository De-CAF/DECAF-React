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
export default function SendDocForm() {
    const dispatch = useDispatch()
    const { active, account, activate, library, deactivate } = useWeb3React()


    const metaAddress = useSelector(selectMetaAddress)
    const role = useSelector(selectRole)

    const [receiver, setReceiver] = useState('')
    const [buffer, setBuffer] = useState(null)

    const [ipfs, setIpfs] = useState(null)
    const [mimeType, setMimeType] = useState('')
    const [b64, setB64] = useState(null)
    const [ipfsHash, setipfsHash] = useState(null)

    const [contractToken1, setContractToken1] = useState(null)
    const [contractToken2, setContractToken2] = useState(null)
    const contractDocToken = useSelector(selectContractDoc)
    const contractVerificationToken = useSelector(selectContractVerification)

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
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = async () => {
            setBuffer(Buffer(reader.result))
            console.log('buffer', reader.result)
            const results = (await ipfs.add(reader.result))
            console.log(results.path)
            setipfsHash(results.path)
            const bufferedContents = await toBuffer(ipfs.cat(results.path)) // returns a Buffer
            //console.log(bufferedContents)
            setB64(Buffer(bufferedContents).toString('base64'))
            setMimeType('image/jpg');
        }

    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const payTo = event.target[3].value
        const fileName = event.target[4].value.slice(12)
        try {
            const netId = await library.eth.net.getId()
            const networkData1 = Decaf.networks[netId]
            const networkData2 = Verification.networks[netId]
            if (networkData1 && networkData2) {
                console.log("Contract Address 1: ", networkData1.address)
                console.log("Contract Address 2: ", networkData2.address)
                const contractToken1 = new library.eth.Contract(Decaf.abi, networkData1.address);
                setContractToken1(contractToken1)
                const contractToken2 = new library.eth.Contract(Verification.abi, networkData2.address);
                setContractToken2(contractToken2)
                //dispatch(setContracts({ contractDoc: contractToken1, contractVerification: contractToken2 }))

                contractToken1.methods.issueDocument(payTo, fileName, ipfsHash).send({ from: metaAddress }).then(async (r) => {
                    const documentsIssued = await contractToken1.methods.getDocumentsIssued().call({ from: metaAddress })
                    const documentsRecieved = await contractToken1.methods.getDocumentsReceived().call({ from: metaAddress })
                    console.log(documentsIssued)
                    console.log(documentsRecieved)
                })
            }

        } catch (err) {
            console.log('Error', err);
            window.alert('ERROR', err.message);
        }
    }

    const sign = async (event) => {

    }

    return (
        <div className="card-body">
            {
                metaAddress ? (
                    <>
                        {
                            role ? (
                                <>
                                    {
                                        b64 ? (
                                            <>

                                                <img src={`data:${mimeType};base64,${b64}`} />
                                            </>
                                        ) : (
                                            <p align="center">Preview Document</p>
                                        )


                                        /*<object>
                                            <embed id="pdfID" type="text/html" width="1200" height="600" src={`data:application/pdf;base64,${b64}`} />
                                        </object>*/


                                    }
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
                                        {
                                            ipfsHash ? (
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Sign the document on blockchain</label>
                                                            <button onClick={sign} className="btn btn-simple btn-primary btn-icon btn-round float-right">Sign <i className="tim-icons icon-key-25" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <></>
                                            )
                                        }
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

                                        <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>

                                    </form>

                                </>
                            ) : (
                                <>
                                    Only organisations can issue documents! To share requested documents, visit the chat section.
                                </>
                            )
                        }

                    </>
                ) : (
                    <>
                        <p className="profile-description">Connect to Metamask for sharing files.</p>
                    </>
                )
            }

        </div>
    );
}
