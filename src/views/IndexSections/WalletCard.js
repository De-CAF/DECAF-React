import React, { useState, useEffect } from "react";

import { Button, Text } from 'reactstrap';

import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectProfilePicLink, setMetaAddress, selectMetaAddress, selectAccountBalance, setAccountBalance } from "../../features/userSlice";
import { injected } from "views/daap/metamaskConnector";
import { useWeb3React } from '@web3-react/core'
import { firestore, auth } from '../../firebase'


export default function WalletCard() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const profilePicLink = useSelector(selectProfilePicLink)
    const metaAddress = useSelector(selectMetaAddress)
    const accountbalance = useSelector(selectAccountBalance)
    const [currentNet, setCurrentNet] = useState('')

    const { active, account, activate, library, deactivate, connector, network } = useWeb3React()
    async function connect() {
        activate(injected)
            .catch(err => console.log(err))

    }

    useEffect(() => {
        if (active) {
            firestore.collection('users').doc(auth.currentUser.uid).update({
                accountAddress: account
            }).then(() => {
                dispatch(setMetaAddress({
                    metaAddress: account
                }))
                library.eth.getBalance(account).then((balance) => {
                    //console.log(balance)
                    dispatch(setAccountBalance({
                        accountBalance: balance
                    }))
                })
                library.eth.net.getNetworkType()
                    .then((network) => {
                        //console.log(network)
                        setCurrentNet(network)
                    });
            })
        }
    }, [active])

    function disconnect() {

        try {
            deactivate()
            firestore.collection('users').doc(auth.currentUser.uid).update({
                accountAddress: null
            }).then(() => {
                dispatch(setMetaAddress({
                    metaAddress: null
                }))
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
                    <h4 className="title">{userName}'s Wallet</h4>
                    
                    
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
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#linkc">
                                            News
                                        </a>
                                    </li>
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

                                        <tr style={{textAlign: 'center'}}>
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
                                            <td style={{textAlign: 'center'}}>
                                                ETH
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                {accountbalance}
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                64,53.30 USD
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
                                                PR: BitCanna – Dutch Blockchain...
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