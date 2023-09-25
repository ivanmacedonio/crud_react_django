import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./login.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { isError, setIsError } = useState(false);

  const navigate = useNavigate();

  async function onSubmit(data) {
    const { username, password } = data;
    const response = await axios.post(
      "http://localhost:8000/tasks/api/token/",
      {
        username: username,
        password: password,
      }
    );
    const { access } = response.data;
    console.log(access);
    localStorage.setItem("token", access);

    if (response.status === 200) {
      navigate("/tasks");
    } else {
      console.log(response.status);
    }
  }

  return (
    <>
      <div className="title">
        <h1>Welcome to @tasks-ivandev</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="logincontainer">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            {...register("username")}
          />
        </div>
        <div className="logincontainer2">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            {...register("password")}
          />
        </div>
        <div className="submitbutton">
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </div>
      </form>
      {isError ? <h1>Something get wrong!</h1> : ""}
      <div className="end">
        <h2>Dont have account? <a href="/register">Register</a> now for free!</h2>
      </div>
    </>
  );
};
