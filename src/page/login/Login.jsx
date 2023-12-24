import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [isvisiblePasword, setIsVisiblePasword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleLoginUser = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        setloading(false);
        console.log(response);
        if (response.status === 201) {
          toast.success("succes");
          localStorage.setItem("token", response.data.access_token);
          navigate("/");
        }
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      <form className="auth-form" onSubmit={handleLoginUser}>
        <h2>create acount</h2>

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
            onChange={(e) => setPassword(e.target.value)}
          />
          {isvisiblePasword ? (
            <FiEyeOff onClick={() => setIsVisiblePasword(false)} />
          ) : (
            <FiEye onClick={() => setIsVisiblePasword(true)} />
          )}
        </div>

        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
