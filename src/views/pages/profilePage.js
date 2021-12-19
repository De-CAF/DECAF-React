/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import TransactionTable from "views/IndexSections/TransactionTable";
import WalletCard from "views/IndexSections/WalletCard";
import SendDocForm from "views/IndexSections/SendDocForm";

import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail, selectUserName } from "../../features/userSlice";
//import { selectdefaultUserName, selectdefaultUserEmail } from "../../features/defaultAuthSlice";

export default function ProfilePage() {

    const userEmail = useSelector(selectUserEmail)
    const userName = useSelector(selectUserName)

    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="profile-page">
                    <div className="page-header">
                        <img src="/static/img/dots.png" className="dots" />
                        <img src="/static/img/path4.png" className="path" />
                        <div className="container align-items-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">

                                    {<h1 className="profile-title text-left">{userName}</h1>}

                                    <h5 className="text-on-back">01</h5>
                                    <p className="profile-description">Final year computer engineering undergrad.</p>
                                    <div className="btn-wrapper profile pt-3">
                                        <a target="_blank" href="https://twitter.com/creativetim" className="btn btn-icon btn-twitter btn-round" data-toggle="tooltip" data-original-title="Follow us">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a target="_blank" href="https://www.facebook.com/creativetim" className="btn btn-icon btn-facebook btn-round" data-toggle="tooltip" data-original-title="Like us">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                        <a target="_blank" href="/account-settings" className="btn btn-icon btn-dribbble  btn-round" data-toggle="tooltip" data-original-title="Account Settings">
                                            <i className="fa fa-cog" />
                                        </a>
                                    </div>
                                </div>
                                <WalletCard />
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-6">
                                    <div className="row justify-content-between align-items-center">
                                        <TransactionTable />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <h1 className="profile-title text-left">Transactions</h1>
                                    <h5 className="text-on-back">02</h5>
                                    <p className="profile-description text-left">View all your transaction history.</p>
                                    <div className="btn-wrapper pt-3">
                                        <button href="javascript:void(0)" className="btn btn-simple btn-info">
                                            <i className="tim-icons icon-bulb-63" /> Check it!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card card-plain">
                                        <div className="card-header">
                                            <h1 className="profile-title text-left">Send File</h1>
                                            <h5 className="text-on-back">03</h5>
                                        </div>
                                    </div>
                                    <SendDocForm />
                                </div>


                                <div className="col-md-4 ml-auto">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-square-pin" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Find us at the office (For Institutes)</h4>
                                            <p> Bld Mihail Kogalniceanu, nr. 8,
                                                <br /> 7652 Bucharest,
                                                <br /> Romania
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-mobile" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Give us a ring</h4>
                                            <p> Michael Jordan
                                                <br /> +40 762 321 762
                                                <br /> Mon - Fri, 8:00-22:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </>
    );
}
