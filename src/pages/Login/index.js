import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="gambar" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={60} />
        <Link title="Register now" onClick={() => history.push("/register")} />
      </div>
    </div>
  );
};

export default Login;
