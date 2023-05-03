import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center w-2/4 mx-auto">
      {user ? (
        <div className="pb-24">
          <h1 className="text-5xl uppercase text-white font-bold py-12">
            Profile
          </h1>
          <img
            className="rounded-full mx-auto my-3 w-24"
            src={
              user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/fdwyBxN/User.png"
            }
            alt=""
          />
          <p>{user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>
            User From:{" "}
            {user.providerData[0].providerId === "password"
              ? " Email/Pass Authentication"
              : user.providerData[0].providerId}
          </p>
        </div>
      ) : (
        <div className="py-12">
          <h2 className="text-7xl py-10 leading-normal text-white font-extralight">
            Login to View{" "}
            <span className="uppercase font-extrabold">
              your <span className="text-green-500">profile</span>
            </span>
          </h2>

          <Link to="/login">
            <button className="btn btn-outline w-full text-white">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
