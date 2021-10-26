import React from "react";

export default function WalletCard() {
    return (
        <div className="col-lg-4 col-md-6 ml-auto mr-auto">
            <div className="card card-coin card-plain">
                <div className="card-header">
                    <img src="/static/img/nk-prof.jpeg" className="img-center img-fluid rounded-circle" />
                    <h4 className="title">My Wallet</h4>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#linka">
                                Wallet
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#linkb">
                                Meta
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#linkc">
                                News
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content tab-subcategories">

                        <div className="tab-pane active" id="linka">
                            <div className="table-responsive">
                                <table className="table tablesorter " id="plain-table">
                                    <thead className=" text-primary">
                                        <tr>
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
                                            <td>
                                                BTC
                                            </td>
                                            <td>
                                                7.342
                                            </td>
                                            <td>
                                                48,870.75 USD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ETH
                                            </td>
                                            <td>
                                                30.737
                                            </td>
                                            <td>
                                                64,53.30 USD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                XRP
                                            </td>
                                            <td>
                                                19.242
                                            </td>
                                            <td>
                                                18,354.96 USD
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="tab-pane" id="linkb">
                            <div className="row justify-content-between align-items-center">
                                <button type="submit" className="btn-lg btn-simple btn-primary btn-icon btn-round">
                                    Connect to metamask</button>
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
            </div>
        </div>
    );

}