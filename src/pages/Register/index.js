import React from "react";
import { RegisterBg } from "../../assets";
import { Input } from "../../components";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="right">
        <img src={RegisterBg} className="bg-image" alt="image" />
      </div>
      <div className="left">
        <p>Register</p>
        <Input />
      </div>
    </div>
  );
};

export default Register;
