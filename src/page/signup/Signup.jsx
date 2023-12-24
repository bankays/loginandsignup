import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [isvisiblePasword, setIsVisiblePasword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateuser = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://api.escuelajs.co/api/v1/users", {
        name,
        email,
        password,
        avatar,
      })
      .then((response) => {
        setLoading(false);
        if (response.status === 201) {
          toast.success("User created successfully");

          navigate("/dashboard/login");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message[0]);
      });
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleCreateuser}>
        <h2>create acount</h2>
        <input
          type="text"
          placeholder="your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-wrapper">
          <input
            type={isvisiblePasword ? "text" : "password"}
            placeholder="your password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {isvisiblePasword ? (
            <FiEyeOff onClick={() => setIsVisiblePasword(false)} />
          ) : (
            <FiEye onClick={() => setIsVisiblePasword(true)} />
          )}
        </div>
        <input
          type="url"
          placeholder="your url"
          required
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
