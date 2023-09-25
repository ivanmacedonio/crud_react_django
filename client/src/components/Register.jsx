import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { username, password, password2 } = data;
      if (password === password2) {
        const res = await axios.post(
          "http://localhost:8000/tasks/api/register/",
          {
            username: username,
            password: password,
          }
        );
        console.log(res.data);
        navigate("/login");
      } else {
        alert('passwords cant be equal')
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="title">
        <h1>Welcome to @tasks-ivandev</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="registercontainer">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            {...register("username")}
          />
        </div>
        <div className="registercontainer2">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            {...register("password")}
          />
        </div>

        <div className="registercontainer3">
          <TextField
            id="outlined-basic"
            label="Repeat your password"
            variant="outlined"
            {...register("password2")}
          />
        </div>
        <div className="registerbutton">
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </div>

        <div className="end">
          <h2>
            Have an account? <a href="/login">Login</a> now
          </h2>
        </div>
      </form>
    </>
  );
};
