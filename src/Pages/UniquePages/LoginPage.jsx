import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useRef } from "react";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [noAccountMsg, setNoAccountMsg] = useState("");
  const [wrongPassMsg, setWrongPassMsg] = useState("");
  const emailRef = useRef();
  const passRef = useRef(); 

  const { signInWithGoogle, signInWithGithub, signInWithEmail, resetPassword } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUserLoginWithEmail = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setNoAccountMsg("");
    setWrongPassMsg("");
    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          setNoAccountMsg("Looks like you don't have an account");
        }
        if (error.message == "Firebase: Error (auth/wrong-password).") {
          setWrongPassMsg("wrong password");
        }
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value; 
    const password = passRef.current.value;

    console.log(email, password);
    resetPassword(email)
      .then((result) => {
        Swal.fire("Password reset email has been send to your inbox")
        setWrongPassMsg("")
        emailRef.current.value = "";
        passRef.current.value = "";
        // if(result.user){return}; 
      })
      .catch((error) => {
        if(error.message = "Firebase: Error (auth/missing-email)."){
          setWrongPassMsg("Empty email field")
        }
        console.log(error.message)});
  };
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="card-title mx-auto">
              <h1 className="text-white">Login Yourself</h1>
            </div>
            <form onSubmit={handleUserLoginWithEmail} action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input ref={(emailRef)}
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {wrongPassMsg.length > 0 && (
                  <p className="text-center -mt-5 text-xs p-1 text-red-500 font-semibold">
                    {wrongPassMsg}
                  </p>
                )}
                <input ref={passRef}
                  id="password"
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <div
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="show-hide-pass-btn"
                >
                  {showPass ? (
                    <div className="eye-slashEye-hover">
                      <FaEyeSlash className="inline" />
                    </div>
                  ) : (
                    <div className="eye-slashEye-hover">
                      <FaEye className="inline " />
                    </div>
                  )}
                </div>
                <label className="label">
                  <a
                    onClick={handleResetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="py-4 text-center">
              {noAccountMsg.length > 0 && (
                <p className="badge badge-warning text-xs">{noAccountMsg}</p>
              )}
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="link">
                  Register
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col text-black font-semibold">
              <button
                onClick={handleGoogleLogin}
                className="bg-green-500 m-2 py-2"
              >
                <FaGoogle className="inline me-2" />{" "}
                <span>Login with Google</span>
              </button>
              <button
                onClick={handleGithubLogin}
                className="bg-green-500 m-2 py-2"
              >
                <FaGithub className="inline me-2" />{" "}
                <span>Login with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
