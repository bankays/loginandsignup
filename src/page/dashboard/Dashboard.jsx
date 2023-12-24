import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/signup");
  }, []);
  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="auth-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "auth__link auth__link--active" : "auth__link"
            }
            to="/dashboard/signup"
          >
            signup
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "auth__link auth__link--active" : "auth__link"
            }
            to="/dashboard/login"
          >
            login
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
