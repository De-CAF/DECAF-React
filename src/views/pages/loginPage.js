
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";


import { auth, provider } from '../../firebase'

import { useDispatch, useSelector } from "react-redux";

import { setActiveUser, setLogOutState, selectUserEmail, selectUserName, setUserLogOutState } from "../../features/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then((result) => {
      dispatch(setActiveUser({
        userName: result.user.displayName,
        userEmail: result.user.email
      }))
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState())
    }).catch((err) => alert(err.message))
  }

  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="login-page">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <div className="page-header">
            <div className="page-header-image" />
            <div className="container">
              <div className="col-lg-5 col-md-8 mx-auto">
                <div className="card card-login">
                  <form className="form" method action>
                    <div className="card-header">
                      <img className="card-img" src="/static/img/square-purple-1.png" />
                      <h4 className="card-title">Login</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group input-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="tim-icons icon-single-02" /></span>
                        </div>
                        <input type="text" className="form-control" placeholder="First Name..." />
                      </div>
                      <div className="input-group input-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="tim-icons icon-caps-small" /></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Last Name..." />
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block">Get Started</a>
                    </div>
                    {
                      userName ? (
                        <div className="card-footer text-center">
                          <button onClick={handleSignOut} className="btn btn-primary btn-round btn-lg btn-block">Sign Out</button>
                        </div>
                      ) : (
                        <div className="card-footer text-center">
                          <button onClick={handleSignIn}className="btn btn-primary btn-round btn-lg btn-block">Google Auth</button>
                        </div>
                      )
                    }
                    <div className="pull-left ml-3 mb-3">
                      <h6>
                        <a href="#pablo" className="link footer-link">Create Account</a>
                      </h6>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
