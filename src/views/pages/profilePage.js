/* eslint-disable */
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import TransactionTable from "views/IndexSections/TransactionTable";
import WalletCard from "views/IndexSections/WalletCard";
import SendDocForm from "views/IndexSections/SendDocForm";

import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserBio, selectRole, selectPhone, selectUserEmail, selectLocation } from "../../features/userSlice";


export default function ProfilePage() {

    const userName = useSelector(selectUserName)
    const userBio = useSelector(selectUserBio)
    const role = useSelector(selectRole)
    const phone = useSelector(selectPhone)
    const email = useSelector(selectUserEmail)
    const location = useSelector(selectLocation)
    return (
        <>
            <IndexNavbar />

            {
                role ? (
                    <>
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
                                                <p className="profile-description">{userBio}</p>
                                                <div className="btn-wrapper profile pt-3">
                                                    <a target="_blank" href={"mailto:" + email} className="btn btn-icon btn-round" data-toggle="tooltip" data-original-title="Mail us">
                                                        <i className="tim-icons icon-email-85" />
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
                                                        <h4 className="info-title">Find us at the office</h4>
                                                        <p> 
                                                            {location ? (location): ("Address not added")}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="info info-horizontal">
                                                    <div className="icon icon-primary">
                                                        <i className="tim-icons icon-mobile" />
                                                    </div>
                                                    <div className="description">
                                                        <h4 className="info-title">Give us a ring</h4>
                                                        <p> {userName}
                                                            <br /> {phone ? (phone): ("Telephone not added")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>


                        </div>
                    </>
                ) : (
                    <>
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
                                                <p className="profile-description">{userBio}</p>
                                                <div className="btn-wrapper profile pt-3">
                                                    <a target="_blank" href={"mailto:" + email} className="btn btn-icon btn-round" data-toggle="tooltip" data-original-title="Mail us">
                                                        <i className="tim-icons icon-email-85" />
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
                                                        <i className="tim-icons icon-mobile" />
                                                    </div>
                                                    <div className="description">
                                                        <h4 className="info-title">Give me a ring</h4>
                                                        <p> {userName}
                                                            <br /> {phone}
                                                            <br /> {location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </>
                )
            }

            <Footer />
        </>
    );
}
