import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const { signInWithGoogle, signInWithGithub, createUserWithEmail } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleCreateNewUserWithEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPassword.value;
    console.log(email, password, confirmPass);

    createUserWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
              <h1 className="text-white py-3">Register Yourself</h1>
            </div>
            <form onSubmit={handleCreateNewUserWithEmail} action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type={showPass ? "text" : "password"}
                  name="password"
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  required
                  type={showConfPass ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className="input input-bordered"
                />
                <div
                  onClick={() => {
                    setShowConfPass(!showConfPass);
                  }}
                  className="show-hide-pass-btn"
                >
                  {showConfPass ? (
                    <FaEye className="inline " />
                  ) : (
                    <FaEyeSlash className="inline" />
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <div className="py-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="link">
                  Login
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col text-black font-semibold">
              <button
                onClick={handleGoogleLogin}
                className="bg-green-500 m-2 py-2"
              >
                <FaGoogle className="inline me-2" />{" "}
                <span>Sign up with Google</span>
              </button>
              <button
                onClick={handleGithubLogin}
                className="bg-green-500 m-2 py-2"
              >
                <FaGithub className="inline me-2" />{" "}
                <span>Sign up with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;