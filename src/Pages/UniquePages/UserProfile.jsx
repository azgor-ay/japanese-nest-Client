import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center w-2/4 mx-auto">
      {user && (
        <div>
          <h1 className="text-5xl uppercase text-white font-bold py-12">
            Profile
          </h1>
          <img
            className="rounded-full mx-auto my-3"
            src={user.photoURL? user.photoURL : "https://i.ibb.co/fdwyBxN/User.png"}
            alt=""
          />
          <p>{user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>User From: 
            {user.providerData[0].providerId === "password"? 
            " Email/Pass Authertication" : user.providerData[0].providerId}
            </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
