import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInWithGoogle, signInWithGithub, signInWithEmail } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/"
  console.log(location);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
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
        console.log(user);
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
    console.log(email, password);

    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
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
                <input
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
                <input
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
                    <FaEye className="inline " />
                  ) : (
                    <FaEyeSlash className="inline" />
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
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
            <div className="py-4">
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
