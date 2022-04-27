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
                        //console.log(docIssued)
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

    const onSubmit = async (event) => {
        event.preventDefault()
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    issuedDocs ? (


                                        issuedDocs.map((item, i) => (
                                            <tr key={i}>
                                                <td className="text-center">{i + 1}</td>
                                                <td>{item.fileName}</td>
                                                <td><a href={"https://ipfs.io/ipfs/" + item.ipfsHash}>View File</a></td>
                                                <td className="text-center">{item.to}</td>
                                                <td> <button onSubmit={onSubmit} className="btn btn-default btn-round btn-block">Revoke Access</button></td>
                                            </tr>
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