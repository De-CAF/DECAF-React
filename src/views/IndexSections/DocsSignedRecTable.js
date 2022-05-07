/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Table } from 'reactstrap';
import { useWeb3React } from '@web3-react/core'
import { useDispatch, useSelector } from "react-redux";
import { selectRole } from "../../features/userSlice";
import Decaf from '../../abis/Decaf.json'
import Verification from '../../abis/Verification.json'
import { injected } from "views/daap/metamaskConnector";

import { selectMetaAddress } from "../../features/userSlice";

export default function DocsSignedRecTable() {
    const { active, account, activate, library, deactivate } = useWeb3React()

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
    const [modalData, setModalaData] = useState(null)

    const [contractToken1, setContractToken1] = useState(null)
    const [contractToken2, setContractToken2] = useState(null)


    useEffect(() => {

        if (library && active) {

            library.eth.net.getId().then((netId) => {
                const networkData1 = Decaf.networks[netId]
                const networkData2 = Verification.networks[netId]
                if (networkData1 && networkData2) {
                    console.log("Contract Address 1 for transaction table: ", networkData1.address)
                    console.log("Contract Address 2: ", networkData2.address)
                    const contractToken1 = new library.eth.Contract(Decaf.abi, networkData1.address);
                    const contractToken2 = new library.eth.Contract(Verification.abi, networkData2.address);
                    setContractToken1(contractToken1)

                    const receivedDocs = contractToken1.methods.getDocumentsReceived().call({ from: metaAddress })
                    receivedDocs.then(rec => {
                        setReceivedDocs(rec)
                        console.log(rec)
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
                                    <th> Document Name</th>
                                    <th>View Document</th>
                                    <th className="text-center">Issuer</th>
                                    <th className="text-center">Versions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    receivedDocs ? (
                                        receivedDocs.map((item, i) => (
                                            item.fileName ? (

                                                <>
                                                    < tr key={i} >
                                                        <td className="text-center">{i + 1}</td>
                                                        <td>{item.fileName}</td>
                                                        <td><a href={"https://ipfs.io/ipfs/" + item.ipfsHash}>View File</a></td>
                                                        <td className="text-center">{item.from}</td>
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
                                                                                        <th className="text-center">Issuer</th>
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
                                                                                                            <td className="text-center">{subItem.from}</td>
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


                                            ) : (
                                                <></>
                                            )
                                        ))
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