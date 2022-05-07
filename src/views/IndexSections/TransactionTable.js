/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Table } from 'reactstrap';
import { useWeb3React } from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { selectRole } from "../../features/userSlice";
import Decaf from '../../abis/Decaf.json'
import Verification from '../../abis/Verification.json'
import { injected } from "views/daap/metamaskConnector";
import { firestore } from "../../firebase"
import { create } from 'ipfs-core'
import toBuffer from 'it-to-buffer'

import { selectMetaAddress } from "../../features/userSlice";

export default function TransactionTable() {
    const role = useSelector(selectRole)
    const dispatch = useDispatch()
    const { active, account, activate, library, deactivate } = useWeb3React()
    const [contractToken1, setContractToken1] = useState(null)
    const [contractToken2, setContractToken2] = useState(null)

    async function connectOnLoad() {
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }

    const metaAddress = useSelector(selectMetaAddress)

    const [issuedDocs, setissuedDocs] = useState(null)
    const [receivedDocs, setReceivedDocs] = useState(null)
    const [docVersions, setDocVersions] = useState(null)

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
    const [cantIssue, setCantIssue] = useState(null)
    const [ipfsIsActive, setIpfsIsActive] = useState(false)
    const [modalData, setModalaData] = useState(null)

    useEffect(() => {
        if (library && active) {

            library.eth.net.getId().then((netId) => {
                const networkData1 = Decaf.networks[netId]
                const networkData2 = Verification.networks[netId]
                if (networkData1 && networkData2) {
                    console.log("Contract Address 1 for transaction table: ", networkData1.address)
                    console.log("Contract Address 2: ", networkData2.address)
                    const contractToken1 = new library.eth.Contract(Decaf.abi, networkData1.address);
                    setContractToken1(contractToken1)
                    const contractToken2 = new library.eth.Contract(Verification.abi, networkData2.address);
                    setContractToken2(contractToken2)

                    const documentsIssued = contractToken1.methods.getDocumentsIssued().call({ from: metaAddress })
                    documentsIssued.then((docIssued => {
                        setissuedDocs(docIssued)
                        console.log(docIssued)
                        //if (docIssued.length.length > 0) {
                        /*var map = {};
                        docIssued.forEach(async doc => {
                            const docVersionss = await contractToken1.methods.getDocumentVersionsIssued(doc.ipfsHash).call({ from: metaAddress })
                            map[doc.ipfsHash] = docVersionss
                        })
                        console.log("map", map)
                        setDocVersions(map);

                        console.log("versions", docVersions["QmRigw2QHJFLFz8SrqLTUea8tAu5hotAe15bzvvSjEgSAp"])*/

                        //}
                    }))
                    const receivedDocs = contractToken1.methods.getDocumentsReceived().call({ from: metaAddress })
                    receivedDocs.then(rec => {
                        setReceivedDocs(rec)
                    })

                }

            })
        }

        if (active && library == null) {
            connectOnLoad()
        }

        if (library == null && (issuedDocs == null || receivedDocs == null)) {
            connectOnLoad()
        }

    }, [active, metaAddress])

    const revoke = async (event, userTo, doc) => {
        event.preventDefault()
        await contractToken1.methods.revokeDocument(userTo, doc).send({ from: metaAddress })
        window.location.reload()
    }

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
        //console.log(e.target)
    }

    const captureFile = async (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        console.log(event.target)
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

            if (!ipfsIsActive) {
                create().then(async ipfss => {
                    setIpfs(ipfss)
                    setIpfsIsActive(true)
                    var results = (await ipfss.add(reader.result))
                    console.log("ipfs hash: ", results.path)
                    setipfsHash(results.path)
                    const bufferedContents = await toBuffer(ipfss.cat(results.path)) // returns a Buffer
                    console.log(bufferedContents)
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

    const onSubmit = async (event) => {
        event.preventDefault()
        const fileName = event.target[3].value.slice(12)
        const ipfshashMaster = event.target[4].value
        const payTo = event.target[2].value
        console.log("v",ipfsHash)
        console.log("master", ipfshashMaster)
        try {
            //dispatch(setContracts({ contractDoc: contractToken1, contractVerification: contractToken2 }))
            contractToken1.methods.issueDocumentVersion(fileName, ipfshashMaster,ipfsHash, payTo).send({ from: metaAddress }).then(async (r) => {
                window.location.reload()
            })
        } catch (err) {
            console.log(err);
            window.alert('ERROR', err.message);
        }
    }

    const sign = async (event, payto) => {
        event.preventDefault()

        const payTo = payto
        const mssgHash = await contractToken2.methods.getMessageHash(ipfsHash).call({ from: metaAddress })
        console.log(payTo)
        library.eth.personal.sign(mssgHash, metaAddress).then(async (signature) => {
            setdocSig(true)
            await contractToken1.methods.signDocument(signature, mssgHash, payTo).send({ from: metaAddress })
            const documentsSigned = await contractToken1.methods.getDocumentsSigned().call({ from: metaAddress })
            console.log(documentsSigned)
        })
    }

    const setData = (e, item) => {
        setModalaData(item)
        console.log(item)
    }

    const getVersion = async (e, item) => {
        // var map = {};
        const docVersionss = await contractToken1.methods.getDocumentVersionsIssued(item.ipfsHash).call({ from: metaAddress })
        //map[item.ipfsHash] = docVersionss
        //console.log("map", map)
        setDocVersions(docVersionss);
        setData(e, item);
    }


    return (
        <>
            {
                metaAddress ? (

                    <>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Document Name</th>
                                    <th>View Document</th>
                                    <th className="text-center">Issued To</th>
                                    <th className="text-center">Access Control</th>
                                    <th className="text-center">Version Control</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    issuedDocs ? (
                                        issuedDocs.map((item, i) => (
                                            item.fileName ? (
                                                <>
                                                    < tr key={i} >
                                                        <td className="text-center">{i + 1}</td>
                                                        <td>{item.fileName}</td>
                                                        <td><a href={"https://ipfs.io/ipfs/" + item.ipfsHash}>View File</a></td>
                                                        <td className="text-center">{item.to}</td>

                                                        {
                                                            item.access ? (
                                                                <>
                                                                    <td> <button onClick={(e) => revoke(e, item.to, item)} className="btn btn-default btn-round btn-block">Revoke</button></td>
                                                                    {
                                                                        role ? (
                                                                            <>
                                                                                < td > <button onClick={e => setData(e, item)} type="button" class="btn btn-primary btn-round" data-toggle="modal" data-target="#exampleModal">Add</button></td>
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }


                                                                    <div class="modal fade primary" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog" role="document">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header">
                                                                                    <h3 class="modal-title" id="exampleModalLabel">Add a version for master doc: {modalData ? (modalData.fileName) : (<></>)}</h3>
                                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                        <span aria-hidden="true">&times;</span>
                                                                                    </button>
                                                                                </div>

                                                                                <div class="modal-body bg-dark">
                                                                                    <div className="card-body bg-dark">
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
                                                                                                                        <p align="center" style={{ "color": "white" }}>Preview Document</p>
                                                                                                                        <br></br>

                                                                                                                    </>

                                                                                                                )

                                                                                                            }
                                                                                                            <p align="center" style={{ "color": "white" }}>File Status: {
                                                                                                                ipfsHash ? (
                                                                                                                    cantIssue ? (
                                                                                                                        <>
                                                                                                                            <b style={{ "color": "white" }}>This file is issued by some other organisation, you cannot issue it to anyone.</b>
                                                                                                                        </>
                                                                                                                    ) : (
                                                                                                                        docSig ? (
                                                                                                                            <>
                                                                                                                                <b style={{ "color": "white" }}>File is signed on the blockchain.</b>
                                                                                                                            </>
                                                                                                                        ) : (
                                                                                                                            <>
                                                                                                                                <b style={{ "color": "white" }}>IPFS hash generated.</b>
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
                                                                                                            <form onSubmit={onSubmit}>
                                                                                                                <div className="row">
                                                                                                                    <div className="col-md-6">
                                                                                                                        <div className="form-group">
                                                                                                                            <label>Receiver's Name </label>
                                                                                                                            <input disabled style={{ "color": "white" }} type="text" className="form-control" value={receiver ? (receiver.userName) : ("Name")} />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="col-md-6">
                                                                                                                        <div className="form-group">
                                                                                                                            <label>Receiver's Email address</label>
                                                                                                                            <input type="email" style={{ "color": "white" }} onChange={findUserInfo} className="form-control" placeholder="shreyas@email.com" />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className="row">
                                                                                                                    <label className="col-sm-3 col-form-label">Pay to</label>
                                                                                                                    <div className="col-sm-9">
                                                                                                                        <div className="form-group">
                                                                                                                            <input disabled type="text" style={{ "color": "white" }} className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" value={receiver ? (receiver.accountAddress ? (receiver.accountAddress) : ("The user is not connected to metamask")) : ("e.g. 1Nasd92348hU984353hfid")} />
                                                                                                                            <span className="form-text" style={{ "color": "white" }}> {receiver ? ("Metamask account address of " + receiver.email) : ("")}</span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className="row">
                                                                                                                    <label className="col-sm-3 col-form-label">File</label>
                                                                                                                    <div className="col-sm-9">
                                                                                                                        <input type="file" onChange={captureFile} />
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <input type="hidden" id="doc" value={modalData ? (modalData.ipfsHash) : (<></>)}></input>

                                                                                                                {
                                                                                                                    cantIssue ? (
                                                                                                                        <>
                                                                                                                            <button disabled className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>
                                                                                                                        </>
                                                                                                                    ) : (
                                                                                                                        docSig ? (
                                                                                                                            <>
                                                                                                                                <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>
                                                                                                                            </>
                                                                                                                        ) : (
                                                                                                                            <>
                                                                                                                                <button disabled className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>
                                                                                                                            </>
                                                                                                                        )
                                                                                                                    )
                                                                                                                }


                                                                                                            </form>
                                                                                                            {
                                                                                                                ipfsHash ? (
                                                                                                                    <div className="row">
                                                                                                                        <label>Sign the document on blockchain</label>

                                                                                                                        <div className="col-md-6">
                                                                                                                            <div className="justify-content-center">
                                                                                                                                {
                                                                                                                                    cantIssue ? (
                                                                                                                                        <>
                                                                                                                                            <button disabled className="btn-lg btn-simple btn-danger btn-icon btn-round ">Cannot sign</button>
                                                                                                                                        </>
                                                                                                                                    ) : (
                                                                                                                                        docSig ? (
                                                                                                                                            <>
                                                                                                                                                <button disabled className="btn-lg btn-simple btn-success btn-icon btn-round ">Signed <i className="tim-icons icon-check-2" /></button>
                                                                                                                                            </>
                                                                                                                                        ) : (
                                                                                                                                            <>
                                                                                                                                                <button onClick={(e) => sign(e, receiver.accountAddress)} value={receiver.accountAddress} className="btn-lg btn-simple btn-primary btn-icon btn-round ">Sign <i className="tim-icons icon-key-25" /></button>
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
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <td> <button disabled className="btn btn-default btn-round btn-block">Revoked</button></td>
                                                                    {
                                                                        role ? (
                                                                            <><td> <button disabled className="btn btn-default btn-round btn-block">Cannot add</button></td></>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }

                                                                </>
                                                            )
                                                        }
                                                        < td > <button onClick={e => getVersion(e, item)} type="button" class="btn btn-primary btn-round" data-toggle="modal" data-target="#exampleModal2">View</button></td>

                                                        <div class="modal fade primary" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h3 class="modal-title" id="exampleModalLabel">Versions of: {modalData ? (modalData.fileName) : (<></>)}</h3>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>

                                                                    <div class="modal-body bg-dark">
                                                                        <div className="card-body bg-dark">
                                                                            <Table responsive>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className="text-center">#</th>
                                                                                        <th>Document Name</th>
                                                                                        <th>View Document</th>
                                                                                        <th className="text-center">Issued To</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {
                                                                                        docVersions ? (
                                                                                            docVersions.map((subItem, j) => (
                                                                                                subItem.fileName ? (
                                                                                                    <>
                                                                                                        <tr key={j}>
                                                                                                            <td className="text-center">{i + 1}.{j + 1}</td>
                                                                                                            <td>{subItem.fileName}</td>
                                                                                                            <td><a href={"https://ipfs.io/ipfs/" + subItem.ipfsHash}>View File</a></td>
                                                                                                            <td className="text-center">{subItem.to}</td>
                                                                                                        </tr>
                                                                                                    </>
                                                                                                ) : (
                                                                                                    <></>
                                                                                                )
                                                                                            )
                                                                                            )
                                                                                        ) : (
                                                                                            <></>
                                                                                        )
                                                                                    }
                                                                                </tbody>
                                                                            </Table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </tr>
                                                </>
                                                //)
                                            ) : (
                                                <></>
                                            )
                                        )
                                        )


                                    ) : (
                                        <>
                                        </>
                                    )
                                }

                            </tbody>
                        </Table>
                    </>

                ) : (
                    <p className="profile-description">Connect to Metamask to view transactions.</p>
                )

            }

        </>
    );
}
