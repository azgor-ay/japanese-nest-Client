import React from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="card-title mx-auto">
              <h1 className="text-white py-3">Register Yourself</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
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
                type="email"
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
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <div className="show-hide-pass-btn">
                <FaEye className="inline " /> <FaEyeSlash className="inline" />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="input input-bordered"
              />
              <div className="show-hide-pass-btn">
                <FaEye className="inline " /> <FaEyeSlash className="inline" />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="py-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="link">
                  Login
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col text-black font-semibold">
              <button className="bg-green-500 m-2 py-2">
                <FaGoogle className="inline me-2" />{" "}
                <span>Sign up with Google</span>
              </button>
              <button className="bg-green-500 m-2 py-2">
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
