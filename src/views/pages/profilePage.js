import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function ProfilePage() {
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
                                    <h1 className="profile-title text-left">Mike Scheinder</h1>
                                    <h5 className="text-on-back">01</h5>
                                    <p className="profile-description">Offices parties lasting outward nothing age few resolve. Impression
                                        to discretion understood to we interested he excellence. Him remarkably use projection
                                        collecting. Going about eat forty world has round miles.</p>
                                    <div className="btn-wrapper profile pt-3">
                                        <a target="_blank" href="https://twitter.com/creativetim" className="btn btn-icon btn-twitter btn-round" data-toggle="tooltip" data-original-title="Follow us">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a target="_blank" href="https://www.facebook.com/creativetim" className="btn btn-icon btn-facebook btn-round" data-toggle="tooltip" data-original-title="Like us">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                        <a target="_blank" href="https://dribbble.com/creativetim" className="btn btn-icon btn-dribbble  btn-round" data-toggle="tooltip" data-original-title="Follow us">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                                    <div className="card card-coin card-plain">
                                        <div className="card-header">
                                            <img src="/static/img/mike.jpg" className="img-center img-fluid rounded-circle" />
                                            <h4 className="title">Transactions</h4>
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
                                                        Send
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
                                                    <div className="row">
                                                        <label className="col-sm-3 col-form-label">Pay to</label>
                                                        <div className="col-sm-9">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" />
                                                                <span className="form-text">Please enter a valid address.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <label className="col-sm-3 col-form-label">Amount</label>
                                                        <div className="col-sm-9">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="1.587" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>
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
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-6">
                                    <div className="row justify-content-between align-items-center">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                            </ol>
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img className="d-block" src="/static/img/denys.jpg" alt="First slide" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>Big City Life, United States</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block" src="/static/img/fabien-bazanegue.jpg" alt="Second slide" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>Somewhere Beyond, United States</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block" src="/static/img/mark-finn.jpg" alt="Third slide" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>Stocks, United States</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <i className="tim-icons icon-minimal-left" />
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <i className="tim-icons icon-minimal-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <h1 className="profile-title text-left">Projects</h1>
                                    <h5 className="text-on-back">02</h5>
                                    <p className="profile-description text-left">An artist of considerable range, Ryan — the name taken by
                                        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own
                                        music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable
                                        range.</p>
                                    <div className="btn-wrapper pt-3">
                                        <button href="javascript:void(0)" className="btn btn-simple btn-primary">
                                            <i className="tim-icons icon-book-bookmark" /> Bookmark
                                        </button>
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
                                            <h1 className="profile-title text-left">Contact</h1>
                                            <h5 className="text-on-back">03</h5>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Your Name</label>
                                                            <input type="text" className="form-control" defaultValue="Mike" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" className="form-control" placeholder="mike@email.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            <input type="text" className="form-control" defaultValue="001-12321345" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Company</label>
                                                            <input type="text" className="form-control" defaultValue="CreativeTim" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Message</label>
                                                            <input type="text" className="form-control" placeholder="Hello there!" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-round float-right" rel="tooltip" data-original-title="Can't wait for your message" data-placement="right">Send
                                                    text</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ml-auto">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-square-pin" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Find us at the office</h4>
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
