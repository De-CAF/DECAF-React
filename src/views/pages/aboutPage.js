import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function AboutPage() {
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="landing-page">
                    <div className="page-header">
                        <img src="/static/img/blob.png" className="path" />
                        <img src="/static/img/path2.png" className="path2" />
                        <img src="/static/img/triunghiuri.png" className="shapes triangle" />
                        <img src="/static/img/waves.png" className="shapes wave" />
                        <img src="/static/img/patrat.png" className="shapes squares" />
                        <img src="/static/img/cercuri.png" className="shapes circle" />
        
                        <div className="container">
                            <div className="row row-grid justify-content-between align-items-center text-left">
                                <div className="col-lg-6 col-md-6">
                                
                                    <h1 className="text-white">We keep your files
                                        <br />
                                        <span className="text-white">secured</span>
                                    </h1>
                                    <p className="text-white mb-3">A seamless service enabling you to share every file with the highest security and integrity. One stop platform for all documents, using our state of the art request-response mechanism, powered by blockchain technology.</p>
                                    <div className="btn-wrapper">
                                        <div className="button-container">
                                            <button href="javascript:void(0)" className="btn btn-icon btn-simple btn-round btn-neutral">
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button href="javascript:void(0)" className="btn btn-icon btn-simple btn-round btn-neutral">
                                                <i className="fab fa-dribbble" />
                                            </button>
                                            <button href="javascript:void(0)" className="btn btn-icon btn-simple btn-round btn-neutral">
                                                <i className="fab fa-facebook" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <img src="/static/img/etherum.png" alt="Circle image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section section-lg">
                        <section className="section">
                            <img src="/static/img/path4.png" className="path" style={{ left: '-110px', maxWidth: '60%', top: '-50px' }} />
                            <div className="container">
                                <div className="row row-grid justify-content-between">
                                    <div className="col-md-5 mt-lg-5">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12 px-2 py-2">
                                                <div className="card card-stats ">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-5 col-md-4">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-trophy text-warning" />
                                                                </div>
                                                            </div>
                                                            <div className="col-7 col-md-8">
                                                                <div className="numbers">
                                                                    <p className="card-title">3,237
                                                                    </p><p>
                                                                    </p><p className="card-category">Awards</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 px-2 py-2">
                                                <div className="card card-stats upper bg-default">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-5 col-md-4">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-coins text-white" />
                                                                </div>
                                                            </div>
                                                            <div className="col-7 col-md-8">
                                                                <div className="numbers">
                                                                    <p className="card-title">3,653
                                                                    </p><p>
                                                                    </p><p className="card-category">Commits</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12 px-2 py-2">
                                                <div className="card card-stats ">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-5 col-md-4">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-gift-2 text-info" />
                                                                </div>
                                                            </div>
                                                            <div className="col-7 col-md-8">
                                                                <div className="numbers">
                                                                    <p className="card-title">593
                                                                    </p><p>
                                                                    </p><p className="card-category">Presents</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 px-2 py-2">
                                                <div className="card card-stats ">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-5 col-md-4">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-credit-card text-success" />
                                                                </div>
                                                            </div>
                                                            <div className="col-7 col-md-8">
                                                                <div className="numbers">
                                                                    <p className="card-title">10,783
                                                                    </p><p>
                                                                    </p><p className="card-category">Forks</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pl-md-5">
                                            <h1>Large
                                                <br />Achivements
                                            </h1>
                                            <p>I should be capable of drawing a single stroke at the present moment; and yet I feel that
                                                I
                                                never was a greater artist than now. </p>
                                            <br />
                                            <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes
                                                the
                                                upper surface of the impenetrable foliage of my trees, and but a few stray.</p>
                                            <br />
                                            <a href="#" className="font-weight-bold text-info mt-5">Show all <i className="tim-icons icon-minimal-right text-info" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section>
                        <div className="cd-section" id="teams">
                            {/*     *********    TEAM 2     *********      */}
                            <div className="team-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 ml-auto mr-auto text-center">
                                            <h2 className="title">The Development Team</h2>
                                            <h4 className="description">This is the paragraph where you can write more details about your
                                                team.
                                                Keep you user engaged by providing meaningful information.</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card card-profile">
                                                <div className="card-image">
                                                    <h4 className="title">Nandita Kadam</h4>
                                                    <img className="img img-raised rounded" src="/static/img/nk.jpeg" />
                                                </div>
                                                <div className="card-body">
                                                    <hr className="line-primary" />
                                                    <h3 className="job-title">UX Designer</h3>
                                                    <div className="table-responsive">
                                                        <table className="table tablesorter " id="plain-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-atom" /> Skills
                                                                    </td>
                                                                    <td className="text-right">
                                                                        UI, UX
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-user-run" /> Hobbies
                                                                    </td>
                                                                    <td className="text-right">
                                                                        Cookery
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card card-profile">
                                                <div className="card-image">
                                                    <h4 className="title">Shreyas More</h4>
                                                    <img className="img img-raised rounded" src="/static/img/sm.jpeg" />
                                                </div>
                                                <div className="card-body">
                                                    <hr className="line-primary" />
                                                    <h3 className="job-title">Backend Architect</h3>
                                                    <div className="table-responsive">
                                                        <table className="table tablesorter " id="plain-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-atom" /> Skills
                                                                    </td>
                                                                    <td className="text-right">
                                                                        React.js, Node.js, AWS
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-user-run" /> Hobbies
                                                                    </td>
                                                                    <td className="text-right">
                                                                        Skiing
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card card-profile">
                                                <div className="card-image">
                                                    <h4 className="title">Pranav Ahuja</h4>
                                                    <img className="img img-raised rounded" src="/static/img/pa.jpeg" />
                                                </div>
                                                <div className="card-body">
                                                    <hr className="line-primary" />
                                                    <h3 className="job-title">Backend Architect</h3>
                                                    <div className="table-responsive">
                                                        <table className="table tablesorter " id="plain-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-atom" /> Skills
                                                                    </td>
                                                                    <td className="text-right">
                                                                        React.js, Blockchain Technology
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-user-run" /> Hobbies
                                                                    </td>
                                                                    <td className="text-right">
                                                                        Reading
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 ml-auto mr-auto">
                                            <div className="card card-profile">
                                                <div className="card-image">
                                                    <h4 className="title">Ramesh Krishnan</h4>
                                                    <img className="img img-raised rounded" src="static/img/rk.jpeg" />
                                                </div>
                                                <div className="card-body">
                                                    <hr className="line-primary" />
                                                    <h3 className="job-title">UX Designer</h3>
                                                    <div className="table-responsive">
                                                        <table className="table tablesorter " id="plain-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-atom" /> Skills
                                                                    </td>
                                                                    <td className="text-right">
                                                                        UI, UX
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-left">
                                                                        <i className="tim-icons icon-user-run" /> Hobbies
                                                                    </td>
                                                                    <td className="text-right">
                                                                        Cookery
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
                            {/*     *********    END TEAM 2      *********      */}
                        </div>
                    </section>
                    <section className="section section-lg">
                        <img src="/static/img/path4.png" className="path" style={{ left: 'auto', right: '-250px', maxWidth: '70%', top: 0 }} />
                        <img src="/static/img/path5.png" className="path2" style={{ position: 'absolute', opacity: '.02', right: 'auto', left: '420px', maxWidth: '10%', top: '420px' }} />
                        <img src="/static/img/path2.png" className="path3" style={{ position: 'absolute', opacity: '.02', left: 'auto', right: '500px', maxWidth: '10%', top: '-90px' }} />
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <h1 className="text-center">Your best benefit</h1>
                                    <div className="row row-grid justify-content-center">
                                        <div className="col-lg-3">
                                            <div className="info">
                                                <div className="icon icon-primary">
                                                    <i className="tim-icons icon-money-coins" />
                                                </div>
                                                <h4 className="info-title">Low Commission</h4>
                                                <hr className="line-primary" />
                                                <p>Divide details about your work into parts. Write a few lines about each one. A
                                                    paragraph
                                                    describing a feature will.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="info">
                                                <div className="icon icon-warning">
                                                    <i className="tim-icons icon-chart-pie-36" />
                                                </div>
                                                <h4 className="info-title">High Incomes</h4>
                                                <hr className="line-warning" />
                                                <p>Divide details about your product or agency work into parts. Write a few lines about
                                                    each
                                                    one. A paragraph describing feature will be a feature. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="info">
                                                <div className="icon icon-success">
                                                    <i className="tim-icons icon-single-02" />
                                                </div>
                                                <h4 className="info-title">Verified People</h4>
                                                <hr className="line-success" />
                                                <p>Divide details about your product or agency work into parts. Write a few lines about
                                                    each
                                                    one. A paragraph describing be enough.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-lg section-safe">
                        <img src="/static/img/path5.png" className="path" style={{ right: 'auto', left: '50px', maxWidth: '45%', top: '60px' }} />
                        <div className="container">
                            <div className="row row-grid justify-content-between">
                                <div className="col-md-5">
                                    <img src="/static/img/chester-wade.jpg" className="img-fluid floating" />
                                    <div className="card card-stats bg-danger">
                                        <div className="card-body">
                                            <div className="justify-content-center">
                                                <div className="numbers">
                                                    <p className="card-title">100%</p>
                                                    <p className="card-category text-white">Safe</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-stats bg-info">
                                        <div className="card-body">
                                            <div className="justify-content-center">
                                                <div className="numbers">
                                                    <p className="card-title">573 K</p>
                                                    <p className="card-category text-white">Satisfied customers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-stats bg-default">
                                        <div className="card-body">
                                            <div className="justify-content-center">
                                                <div className="numbers">
                                                    <p className="card-title">10 425</p>
                                                    <p className="card-category text-white">Business</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="px-md-5">
                                        <hr className="line-success" />
                                        <h3>Awesome features</h3>
                                        <p>The design system comes with three pre-built pages to help you get started faster. You can
                                            change
                                            the text and images and you're good to go.</p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon icon-success mb-2">
                                                        <i className="tim-icons icon-vector" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h6>Carefully crafted components</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon icon-success mb-2">
                                                        <i className="tim-icons icon-tap-02" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h6>Amazing page examples</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon icon-success mb-2">
                                                        <i className="tim-icons icon-single-02" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h6>Super friendly support team</h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-lg">
                        <img src="/static/img/path4.png" className="path" style={{ maxWidth: '60%', right: '3%', top: '15%' }} />
                        <img src="/static/img/path2.png" className="path2" style={{ position: 'absolute', opacity: '.02', left: '25%', right: 'auto', maxWidth: '10%', top: '200px' }} />
                        <div className="col-md-12">
                            <div className="card card-chart card-plain">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-sm-6 text-left">
                                            <hr className="line-primary" />
                                            <h5 className="card-category">Real Time Chart</h5>
                                            <h2 className="card-title">Ethereum</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="ethereumChart" height={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-lg section-coins">
                        <img src="/static/img/path3.png" className="path" style={{ maxWidth: '50%', left: '5%', top: '3%' }} />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <hr className="line-info" />
                                    <h1>Choose the coin
                                        <span className="text-info">that fits your needs</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-coin card-plain">
                                        <div className="card-header">
                                            <img src="/static/img/bitcoin.png" className="img-center img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <h4 className="text-uppercase">Light Coin</h4>
                                                    <span>Plan</span>
                                                    <hr className="line-primary" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <ul className="list-group">
                                                    <li className="list-group-item">50 messages</li>
                                                    <li className="list-group-item">100 emails</li>
                                                    <li className="list-group-item">24/7 Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn btn-primary btn-simple">Get plan</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-coin card-plain">
                                        <div className="card-header">
                                            <img src="/static/img/etherum.png" className="img-center img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <h4 className="text-uppercase">Dark Coin</h4>
                                                    <span>Plan</span>
                                                    <hr className="line-success" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <ul className="list-group">
                                                    <li className="list-group-item">150 messages</li>
                                                    <li className="list-group-item">1000 emails</li>
                                                    <li className="list-group-item">24/7 Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn btn-success btn-simple">Get plan</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-coin card-plain">
                                        <div className="card-header">
                                            <img src="/static/img/ripp.png" className="img-center img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <h4 className="text-uppercase">Bright Coin</h4>
                                                    <span>Plan</span>
                                                    <hr className="line-info" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <ul className="list-group">
                                                    <li className="list-group-item">350 messages</li>
                                                    <li className="list-group-item">10K emails</li>
                                                    <li className="list-group-item">24/7 Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn btn-info btn-simple">Get plan</button>
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
