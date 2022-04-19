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

        if( library==null && (issuedDocs==null || receivedDocs==null)){
            connectOnLoad()
        }

    }, [active, metaAddress])

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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        receivedDocs ? (
                                            receivedDocs.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">{i + 1}</td>
                                                    <td>{item.fileName}</td>
                                                    <td><a href={"https://ipfs.io/ipfs/" + item.ipfsHash}>Ipfs Link</a></td>
                                                    <td className="text-center">{item.from}</td>
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