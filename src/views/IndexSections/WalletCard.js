/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectProfilePicLink, setMetaAddress, selectMetaAddress, selectAccountBalance, setAccountBalance, selectCurrentNet, setCurrentNet, } from "../../features/userSlice";
import { injected } from "views/daap/metamaskConnector";
import { useWeb3React } from '@web3-react/core'
import { firestore, auth } from '../../firebase'


export default function WalletCard() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const profilePicLink = useSelector(selectProfilePicLink)
    const metaAddress = useSelector(selectMetaAddress)
    const accountbalance = useSelector(selectAccountBalance)
    const currentNet = useSelector(selectCurrentNet)

    const { active, account, activate, library, deactivate } = useWeb3React()

    async function connect() {
        await activate(injected)
            .catch(err => console.log(err))

    }

    function setMetaData(accounts1) {

        firestore.collection('users').doc(auth.currentUser.uid).update({
            accountAddress: accounts1
        }).then(() => {
            dispatch(setMetaAddress({
                metaAddress: accounts1
            }))
            library.eth.getBalance(accounts1).then((balance) => {
                //console.log(balance)
                dispatch(setAccountBalance({
                    accountBalance: library.utils.fromWei(balance, "ETHER")
                }))
            })
            library.eth.net.getNetworkType()
                .then((network) => {
                    //console.log(network)
                    //setCurrentNet(network)
                    dispatch(setCurrentNet({ currentNet: network }))
                });
        })

    }

    async function connectOnLoad() {
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }

    useEffect(() => {



        if (metaAddress != null && active === false) {
            console.log("Reconnecting..")
            connectOnLoad()
        }

        if (active && metaAddress == null) {

            setMetaData(account)

            /*window.ethereum.on('networkChanged', function (networkId) {
                //console.log(networkId)
                library.eth.net.getNetworkType()
                    .then((network) => {
                        //console.log(network)
                        //setCurrentNet(network)
                        dispatch(setCurrentNet({ currentNet: network }))
                    });
                library.eth.getBalance(account).then((balance) => {
                    //console.log(balance)
                    dispatch(setAccountBalance({
                        accountBalance: library.utils.fromWei(balance, "ETHER")
                    }))
                })
            })*/

        }

        //})
    }, [active])

    function disconnect() {

        try {
            deactivate()
            dispatch(setMetaAddress({ metaAddress: null }), setCurrentNet({ currentNet: null }), setAccountBalance({ accountBalance: null }))
            firestore.collection('users').doc(auth.currentUser.uid).update({
                accountAddress: null
            })
        } catch (err) {
            console.log(err)
        }

    }
    // console.log(account)
    return (
        <div className="col-lg-4 col-md-6 ml-auto mr-auto">
            <div className="card card-coin card-plain">
                <div className="card-header">
                    <img src={profilePicLink} className="img-center img-fluid rounded-circle" />
                    <h4 className="title">{userName}'s Wallet </h4>
                    {
                        metaAddress ? (
                            <>
                                <h6>Connected to : {currentNet} Net</h6>
                            </>
                        ) : (
                            <>
                            </>
                        )
                    }



                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                        {
                            metaAddress ? (
                                <>
                                    <li className="nav-item ">
                                        <a className="nav-link active" data-toggle="tab" href="#linka">
                                            Meta
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#linkb">
                                            Wallet
                                        </a>
                                    </li>
                                    {/*
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#linkc">
                                                News
                                            </a>
                                        </li>
                                    */}
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#linka">
                                            Meta
                                        </a>
                                    </li>
                                </>
                            )
                        }

                    </ul>
                    <div className="tab-content tab-subcategories">

                        <div className="tab-pane active" id="linka">
                            <div className="row justify-content-center align-items-center">
                                {
                                    metaAddress ? (
                                        <>

                                            Connected with <b style={{ fontSize: '10px' }}>{metaAddress}</b> <br></br>

                                            <button onClick={disconnect} type="submit" className="btn-lg btn-simple btn-primary btn-icon btn-round">
                                                Disconnect
                                            </button>
                                            <br>
                                            </br>

                                        </>

                                    ) : (
                                        <>
                                            <button onClick={connect} type="submit" className="btn-lg btn-simple btn-primary btn-icon btn-round">
                                                Connect to metamask
                                            </button>
                                        </>

                                    )
                                }

                            </div>
                        </div>

                        <div className="tab-pane" id="linkb">
                            <div className="table-responsive">
                                <table className="table tablesorter " id="plain-table">

                                    <thead className=" text-primary">

                                        <tr style={{ textAlign: 'center' }}>
                                            <th className="header">
                                                COIN
                                            </th>
                                            <th className="header">
                                                AMOUNT
                                            </th>
                                            <th className="header">
                                                VALUE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ textAlign: 'center' }}>
                                                ETH
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                {accountbalance}
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                {accountbalance * 4000} USD
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="tab-pane" id="linkc">
                            <div className="table-responsive">
                                <table className="table tablesorter " id="plain-table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th className="header">
                                                Latest Crypto News
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                The Daily: Nexo to Pay on Stable...
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Venezuela Begins Public of Nation...
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PR: BitCanna - Dutch Blockchain...
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

}