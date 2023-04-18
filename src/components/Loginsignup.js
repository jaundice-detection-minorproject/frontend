import React, { useState } from "react";
import "./css/style.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginSignup(props) {
  const [email, setEmail] = useState("");
  const history=useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSwitch = () => {
    setIsSignup((prevState) => !prevState);
    setEmail("");

    setPassword("");
    
  };

  const notify = (msg) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }); 

  const handleSubmit1 = async(event) => {
    event.preventDefault();
    console.log(`Name:${name},Email: ${email}, Password: ${password}`);

    if(name == "" || email == "" || password == "") {
      notify("Please enter all fields");
      return;
    }

    setEmail("");
    setPassword("");
    setName("");

    const body = {
      user_name: name,
      user_emailid: email,
      user_password: password
    }

    const config = {
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
    };
    
    try{
      props.setLoader(true)
      const res = await axios.post('https://reportsminorproject.glitch.me/user', body, config);
      console.log(JSON.stringify(res));
      props.setLoader(false)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logged In Successfully...",
        showConfirmButton: false,
        timer: 2000,
      });
      localStorage.setItem('userInfo', JSON.stringify(res.data.token));
      history("/");
    }catch (err) {
      console.log(err);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: err.response.data.err,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    
    
  };
  const handleSubmit2 = async(event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    if(email == "" || password == "") {
      notify("Please enter all fields");
      return;
    }

    setEmail("");
    setPassword("");

    const body = {
      user_name: name,
      user_emailid: email,
      user_password: password
    }

    const config = {
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
    };
    
    try{
      props.setLoader(true)
      const res = await axios.post('https://reportsminorproject.glitch.me/user/login', body, config);
      console.log(JSON.stringify(res));
      props.setLoader(false)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logged In Successfully...",
        showConfirmButton: false,
        timer: 2000,
      });
      localStorage.setItem('userInfo', JSON.stringify(res.data.token));
      history("/");
    }catch (err) {
      console.log(err);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: err.response.data.err,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    

    
  };

  return (
    <div className="container">
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isSignup ? (
        <form className="form" onSubmit={handleSubmit1}>
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="btn-submit" type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <button className="btn" type="button" onClick={handleFormSwitch}>
              Login
            </button>
          </p>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmit2}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="btn-submit" type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <button className="btn" type="button" onClick={handleFormSwitch}>
              Sign Up
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginSignup;
