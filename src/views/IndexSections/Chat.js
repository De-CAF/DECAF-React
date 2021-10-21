import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Chat() {
    return (

        <div className="chat-page">
            <div className="section mt-5">
                <div className="container">
                    {/* <img src="/img/shape-s.png" class="path path3"> */}
                    <h2 className="title">Chat</h2>
                    <div className="row flex-row">
                        <div className="col-lg-4">
                            <div className="card card-plain">
                                <form className="card-header mb-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search contact" />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="tim-icons icon-zoom-split" /></span>
                                        </div>
                                    </div>
                                </form>
                                <div className="list-group list-group-chat list-group-flush">
                                    <a href="javascript:;" className="list-group-item active">
                                        <div className="media">
                                            <img alt="Image" src="/img/nk.jpeg" className="avatar" />
                                            <div className="media-body ml-2">
                                                <div className="justify-content-between align-items-center">
                                                    <h6 className="mb-0">Charlie Watson
                                                        <span className="badge badge-success" />
                                                    </h6>
                                                    <div>
                                                        <small>Typing...</small>
                                                    </div>
                                                </div>
                                                {/* <span class="text-small p-0">Let's keep those protoypes 100</span> */}
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="list-group-item">
                                        <div className="media">
                                            <img alt="Image" src="/img/johana.jpg" className="avatar" />
                                            <div className="media-body ml-2">
                                                <div className="justify-content-between align-items-center">
                                                    <h6 className="mb-0">Jane Doe</h6>
                                                    <div>
                                                        <small className="text-muted">1 hour ago</small>
                                                    </div>
                                                </div>
                                                <span className="text-muted text-small col-11 p-0 text-truncate d-block">Computer
                                                    users and programmers</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="list-group-item">
                                        <div className="media">
                                            <img alt="Image" src="/img/ryan.png" className="avatar" />
                                            <div className="media-body ml-2">
                                                <div className="justify-content-between align-items-center">
                                                    <h6 className="mb-0">Mila Skylar</h6>
                                                    <div>
                                                        <small className="text-muted">24 min ago</small>
                                                    </div>
                                                </div>
                                                <span className="text-muted text-small col-11 p-0 text-truncate d-block">You can
                                                    subscribe to receive weekly...</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="list-group-item">
                                        <div className="media">
                                            <img alt="Image" src="/img/kareya-saleh.jpg" className="avatar" />
                                            <div className="media-body ml-2">
                                                <div className="justify-content-between align-items-center">
                                                    <h6 className="mb-0">Sofia Scarlett</h6>
                                                    <div>
                                                        <small className="text-muted">7 hours ago</small>
                                                    </div>
                                                </div>
                                                <span className="text-muted text-small col-11 p-0 text-truncate d-block">It’s an
                                                    effective resource regardless..</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:;" className="list-group-item">
                                        <div className="media">
                                            <img alt="Image" src="/img/christian.jpg" className="avatar" />
                                            <div className="media-body ml-2">
                                                <div className="justify-content-between align-items-center">
                                                    <h6 className="mb-0">Tom Klein</h6>
                                                    <div>
                                                        <small className="text-muted">1 day ago</small>
                                                    </div>
                                                </div>
                                                <span className="text-muted text-small col-11 p-0 text-truncate d-block">Be sure to
                                                    check it out if your dev pro...</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card card-plain">
                                <div className="card-header d-inline-block">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="media align-items-center">
                                                <img alt="Image" src="/img/p10.jpg" className="avatar" />
                                                <div className="media-body">
                                                    <h6 className="mb-0 d-block">Charlie Watson</h6>
                                                    <span className="text-muted text-small">last seen today at 1:53am</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-link btn-info" type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Video call">
                                                <i className="tim-icons icon-video-66" />
                                            </button>
                                        </div>
                                        <div className="col-md-1">
                                            <div className="dropdown">
                                                <button className="btn btn-link btn-primary" type="button" data-toggle="dropdown">
                                                    <i className="tim-icons icon-settings" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="tim-icons icon-single-02" /> Profile
                                                    </a>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="tim-icons icon-volume-98" /> Mute conversation
                                                    </a>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="tim-icons icon-lock-circle" /> Block
                                                    </a>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="tim-icons icon-chat-33" /> Clear chat
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="tim-icons icon-simple-remove" /> Delete chat
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-start">
                                        <div className="col-auto">
                                            <div className="card ">
                                                <div className="card-body p-2">
                                                    <p className="mb-1">
                                                        It contains a lot of good lessons about effective practices
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60"><i className="far fa-clock" /> 3:14am</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end text-right">
                                        <div className="col-auto">
                                            <div className="card bg-primary text-white">
                                                <div className="card-body p-2">
                                                    <p className="mb-1">
                                                        Can it generate daily design links that include essays and data
                                                        visualizations ?
                                                        <br />
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60">3:30am</small>
                                                        <i className="tim-icons icon-check-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12 text-center">
                                            <span className="badge text-white">Wed, 3:27pm</span>
                                        </div>
                                    </div>
                                    <div className="row justify-content-start">
                                        <div className="col-auto">
                                            <div className="card ">
                                                <div className="card-body p-2">
                                                    <p className="mb-1">
                                                        Yeah! Responsive Design is geared towards those trying to build web apps
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60"><i className="far fa-clock" /> 4:31pm</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end text-right">
                                        <div className="col-auto">
                                            <div className="card bg-primary text-white">
                                                <div className="card-body p-2">
                                                    <p className="mb-1">
                                                        Excellent, I want it now !
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60">4:40pm</small>
                                                        <i className="tim-icons icon-check-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-start">
                                        <div className="col-auto">
                                            <div className="card ">
                                                <div className="card-body p-2">
                                                    <p className="mb-1">
                                                        You can easily get it; The content here is all free
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60"><i className="far fa-clock" /> 4:42pm</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end text-right">
                                        <div className="col-auto">
                                            <div className="card bg-primary text-white">
                                                <div className="card-body p-2">
                                                    <p className="mb-1">
                                                        Awesome, blog is important source material for anyone who creates apps?
                                                        <br />
                                                        beacuse these blogs offer a lot of information about website
                                                        development.
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60">4:46pm</small>
                                                        <i className="tim-icons icon-check-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-start">
                                        <div className="col-5">
                                            <div className="card ">
                                                <div className="card-body p-2">
                                                    <div className="col-12 p-0">
                                                        <a href="/files/ta.pdf">
                                                            <img className="img-responsive" data-pdf-thumbnail-file="/files/ta.pdf" src="/img/pdf.png" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <small className="opacity-60"><i className="far fa-clock" /> 4:47pm</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end text-right">
                                        <div className="col-auto">
                                            <div className="card bg-primary text-white">
                                                <div className="card-body p-2">
                                                    <p className="mb-0">
                                                        At the end of the day … the native dev apps is where users are
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60">4:47pm</small>
                                                        <i className="tim-icons icon-check-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-start">
                                        <div className="col-auto">
                                            <div className="card ">
                                                <div className="card-body p-2">
                                                    <div className="spinner">
                                                        <div className="bounce1" />
                                                        <div className="bounce2" />
                                                        <div className="bounce3" />
                                                    </div>
                                                    <p className="d-inline-block mr-2">
                                                        Typing...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-block">
                                    <form className="align-items-center">
                                        <div className="input-group d-flex">
                                            <div className="input-group-prepend d-flex">
                                                <span className="input-group-text"><i className="tim-icons icon-pencil" /></span>
                                            </div>
                                            <input type="text" className="form-control form-control-lg" placeholder="Your message" />
                                            <button className="btn btn-simple btn-primary ml-2">
                                                <i className="tim-icons icon-send" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
