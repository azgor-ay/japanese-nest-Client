import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="card-title mx-auto">
              <h1 className="text-white">Login Yourself</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                type="password"
                required
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <div className="show-hide-pass-btn">
                <FaEye className="inline " /> <FaEyeSlash className="inline" />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="py-4">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="link">
                  Register
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col text-black font-semibold">
              <button className="bg-green-500 m-2 py-2">
                <FaGoogle className="inline me-2" />{" "}
                <span>Login with Google</span>
              </button>
              <button className="bg-green-500 m-2 py-2">
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
