// import React from "react";

// import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { googleLogin, login } from "../../../services/users";

// import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

// // Styles
// import "./modal.css";

// const LoginModal = ({ onHide }) => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   // Handlers
//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
//   const saveHandler = async () => {
//     try {
//       // setloading(true);

//       let resp = await login(user);
//       if (resp.data.status) {
//         localStorage.setItem("accessToken", resp.data.access_token);
//         localStorage.setItem("Id", resp.data.user._id);
//         // localStorage.setItem("refreshToken", resp.data.refresh_token);

//         // getUserData()

//         // setloading(false);

//         // history.replace("/home");
//         onHide();
//         window.location.reload();
//       } else {
//       }
//     } catch (error) {
//       console.log(error);
//       // toastContext.showMessage(
//       //   "Error",
//       //   "Email or Password you entered doesn't match your account.",
//       //   "error"
//       // );
//     }
//   };
//   const googleHandler = useGoogleLogin({
//     onSuccess: (tokenResponse) => responseGoogle(tokenResponse),
//   });

//   const responseGoogle = async (response) => {
//     if (response && response.credential) {
//       try {
//         const resp = await googleLogin({ token: response.credential });
//         console.log({ resp });
//         if (resp.data.status) {
//           localStorage.setItem("accessToken", resp.data.access_token);
//           localStorage.setItem("Id", resp.data.user._id);
//         }
//         // history.replace("/home");
//         onHide();
//         window.location.reload();
//       } catch (error) {
//         console.error("Error signing in:", error);
//       }
//     }
//   };
//   return (
//     <>
//       <div>
//         <Modal.Body>
//           <div className="text-center">
//             <h3>
//               <b>Sign Into Your Account</b>
//             </h3>
//             <p>
//               Or,
//               <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
//                 Create An Account
//               </span>
//             </p>
//           </div>

//           <div className="pt-3">
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="input_text_login"
//                 onChange={inputHandler}
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="input_text_login"
//                 onChange={inputHandler}
//               />

//               <div className="pt-2 forgot_text">
//                 <Link to="" className="forgot_text">
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>
//             <div className="pt-3">
//               <button className="sign_button" type="button" onClick={() => saveHandler()}>
//                 Sign In
//               </button>
//             </div>
//             <div className="pt-2 pb-2">
//               <hr className="hr_clas"></hr>
//               <span className="or_clas">Or</span>
//               <hr className="hr_clas"></hr>
//             </div>
//             <div className="pt-3">
//               <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
//                 <button className="google_social_button" type="button" onClick={googleHandler}>
//                   Continue With Google
//                 </button>
//               </GoogleOAuthProvider>
//               {/* <GoogleLogin
//                   buttonText="Sign Up with Google"
//                   onSuccess={responseGoogle}
//                   onFailure={responseGoogle}
//                   cookiePolicy={"single_host_origin"}
//                 /> */}
//             </div>
//             <div className="pt-3">
//               <button className="fb_social_button" type="button">
//                 Continue With Facebook
//               </button>
//             </div>
//             <div className="pt-3">
//               <button className="apple_social_button" type="button">
//                 Continue With Apple
//               </button>
//             </div>
//             <div className="text-center pt-3">
//               <p style={{ color: "#757575" }}>
//                 By signing in, I accept the
//                 <span style={{ textDecoration: "underline", margin: "0" }}>Terms of Use.</span>
//               </p>
//             </div>
//           </div>
//         </Modal.Body>
//       </div>
//     </>
//   );
// };

// export default LoginModal;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { googleLogin, login } from "../../../services/users";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

import "./modal.css";

const LoginModal = ({ onHide }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const saveHandler = async () => {
    try {
      let resp = await login(user);
      if (resp.data.status) {
        localStorage.setItem("accessToken", resp.data.access_token);
        localStorage.setItem("Id", resp.data.user._id);
        onHide();
        window.location.reload();
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleHandler = useGoogleLogin({
    onSuccess: (CodeResponse) => responseGoogle(CodeResponse),
  });

  const responseGoogle = async (response) => {
    console.log({ response });
    if (response && response.access_token) {
      try {
        const resp = await googleLogin({ token: response.access_token });
        if (resp.data.status) {
          localStorage.setItem("accessToken", resp.data.access_token);
          localStorage.setItem("Id", resp.data.user._id);
          onHide();
          window.location.reload();
        } else {
          // Handle Google login failure
        }
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  };

  return (
    <div>
      <Modal.Body>
        <div className="text-center">
          <h3>
            <b>Sign Into Your Account</b>
          </h3>
          <p>
            Or,
            <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
              Create An Account
            </span>
          </p>
        </div>

        <div className="pt-3">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input_text_login"
              onChange={inputHandler}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input_text_login"
              onChange={inputHandler}
            />

            <div className="pt-2 forgot_text">
              <Link to="" className="forgot_text">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="pt-3">
            <button className="sign_button" type="button" onClick={() => saveHandler()}>
              Sign In
            </button>
          </div>
          <div className="pt-2 pb-2">
            <hr className="hr_clas"></hr>
            <span className="or_clas">Or</span>
            <hr className="hr_clas"></hr>
          </div>
          <div className="pt-3">
            {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}> */}
            <button className="google_social_button" type="button" onClick={googleHandler}>
              Continue With Google
            </button>
            {/* </GoogleOAuthProvider> */}
          </div>
          <div className="pt-3">
            <button className="fb_social_button" type="button">
              Continue With Facebook
            </button>
          </div>
          <div className="pt-3">
            <button className="apple_social_button" type="button">
              Continue With Apple
            </button>
          </div>
          <div className="text-center pt-3">
            <p style={{ color: "#757575" }}>
              By signing in, I accept the
              <span style={{ textDecoration: "underline", margin: "0" }}>Terms of Use.</span>
            </p>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
};

export default LoginModal;
