import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    axios(
      "  https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
      [navigate]
    )
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  });

  const handlLogout = () => {
    const isUseragreed = confirm("are you realy going to log out");
    if (isUseragreed) {
      localStorage.removeItem("token");
      toast.success("logout successfully ");
      navigate("/");
    }
  };
  return (
    <div>
      {profile ? (
        <>
          <img className="img" src={profile.avatar} alt="" />
          <h2 className="name">{profile.name}</h2>
          <p className="email">{profile.email}</p>
        </>
      ) : (
        <p className="loading">loading...</p>
      )}
      <button className="button-logout" onClick={handlLogout}>
        Log out
      </button>
    </div>
  );
};

export default Profile;
