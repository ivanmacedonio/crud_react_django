import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app">
      <div className="logout" onClick={handleLogout}>
        <LogoutIcon fontSize="large" />
      </div>

      <div className="title">
        <h1>Tasks app</h1>
      </div>

      <div className="tasks">
        <span id="span1">
          <a href="/tasks">
            <Button variant="outlined">Tasks</Button>
          </a>
        </span>
        <span>
          <a href="/tasks-create">
            <Button variant="outlined">Create</Button>
          </a>
        </span>
      </div>
    </div>
  );
};
