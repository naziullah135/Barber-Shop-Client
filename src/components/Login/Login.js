import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import GoogleIcon from "../../images/GoogleIcon.png";
import LoginBg from "../../images/LoginBg.jpg";
import firebaseConfig from "./firebase.config";

const Login = () => {
  const [setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">
              Forgot your password?
            </label>
          </div>
          <div className="from-group mt-5">
            <button
              className="btn text-white"
              style={{width: "93%", marginLeft: "3.5%"}}
              onClick={handleGoogleSignIn}
            >
              {" "}
              <img src={GoogleIcon} style={{ width: "5%" }} alt="" /> &nbsp;
              Google Sign in
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img
            style={{width: "70%", borderRadius: "15px", margin: "76px" }}
            className="img-fluid"
            src={LoginBg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
