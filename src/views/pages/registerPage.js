/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from "react";
import { Alert } from 'reactstrap'
import { auth, firestore } from '../../firebase'

import { useDispatch } from "react-redux";
import { setActiveUser } from "../../features/userSlice";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [role, setRole] = useState(false)
    const onRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('User signed up', user);
                auth.currentUser.updateProfile({
                    displayName: name
                }).then(() => {

                    firestore.collection('users').doc(auth.currentUser.uid).set({
                        userName: name,role
                    }).then(() => {
                        dispatch(setActiveUser({
                            userName: name,
                            userEmail: email,
                            isLoggedIn: true,
                            role: role
                        }))
                        setShowAlert(true)
                        setShowErr(false)
                    })
                })
            })
            .catch(err => {
                console.log(err)
                setShowErr(true)
            })
    }



    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="register-page">
                    <div className="wrapper">
                        <div className="page-header">
                            <div className="page-header-image" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12 mx-auto">
                                        <div id="square7" className="square square-7" style={{ transform: 'perspective(500px) rotateY(-13.96deg) rotateX(4.38deg)' }} />
                                        <div id="square8" className="square square-8" style={{ transform: 'perspective(500px) rotateY(-13.96deg) rotateX(4.38deg)' }} />
                                        <div className="card card-register">
                                            <div className="card-header">
                                                <img className="card-img" src="/static/img/square1.png" />
                                                <h4 className="card-title">Register</h4>
                                            </div>
                                            {
                                                showAlert ?
                                                    (<Alert color="success">User signed up</Alert>) :
                                                    (
                                                        <><div className="card-body">
                                                            <form className="form">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="tim-icons icon-single-02" />
                                                                        </div>
                                                                    </div>
                                                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Full Name" />
                                                                </div>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="tim-icons icon-email-85" />
                                                                        </div>
                                                                    </div>
                                                                    <input type="text" value={email} placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                                                </div>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="tim-icons icon-lock-circle" />
                                                                        </div>
                                                                    </div>
                                                                    <input type="text" value={password} onChange={e => setPasword(e.target.value)} className="form-control" placeholder="Password" />
                                                                </div>
                                                                <div className="form-check text-left">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="checkbox" onChange={e => setRole(e.target.value)} />
                                                                        <span className="form-check-sign" />
                                                                        Registering as an organisation Admin?
                                                                    </label>
                                                                </div>
                                                            </form>
                                                        </div><div className="card-footer">
                                                                <button onClick={onRegister} className="btn btn-info btn-round btn-lg">Register</button>
                                                            </div></>
                                                    )
                                            }

                                            {
                                                showErr ?
                                                    (<Alert color="danger">Failed to create account</Alert>) : (<div></div>)
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="register-bg" />
                            <div id="square1" className="square square-1" style={{ transform: 'perspective(500px) rotateY(-34.9deg) rotateX(10.95deg)' }} />
                            <div id="square2" className="square square-2" style={{ transform: 'perspective(500px) rotateY(-34.9deg) rotateX(10.95deg)' }} />
                            <div id="square3" className="square square-3" style={{ transform: 'perspective(500px) rotateY(-34.9deg) rotateX(10.95deg)' }} />
                            <div id="square4" className="square square-4" style={{ transform: 'perspective(500px) rotateY(-34.9deg) rotateX(10.95deg)' }} />
                            <div id="square5" className="square square-5" style={{ transform: 'perspective(500px) rotateY(-34.9deg) rotateX(10.95deg)' }} />
                            <div id="square6" className="square square-6" style={{ transform: 'perspective(500px) rotateY(-34.9deg) rotateX(10.95deg)' }} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
