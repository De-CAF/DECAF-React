
import React, { useState, useEffect } from "react";
import { Alert } from 'reactstrap'
import { auth } from '../../firebase'


import { useDispatch, useSelector } from "react-redux";
import { setdefaultActiveUser, setdefaultUserLogOutState } from "../../features/defaultAuthSlice";

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

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(user);
        })

        return unsubscribe;
    }, [])

    const onRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('User signed up', user);
                dispatch(setdefaultActiveUser({
                    userName: name,
                    userEmail: email,
                }))
                setShowAlert(true)
                setShowErr(false)
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
                                                <img className="card-img" src="/static/img/square1.png" alt="Card image" />
                                                <h4 className="card-title">Register</h4>
                                            </div>
                                            <div className="card-body">
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
                                                            <input className="form-check-input" type="checkbox" />
                                                            <span className="form-check-sign" />
                                                            I agree to the
                                                            <a href="#">terms and conditions</a>.
                                                        </label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer">
                                                <button onClick={onRegister} className="btn btn-info btn-round btn-lg">Register</button>
                                            </div>

                                            {
                                                showAlert ?
                                                    (<Alert color="success">User signed up</Alert>) : (<div></div>)
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
