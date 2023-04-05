import React, { useState } from "react";
import "./css/style.css";
import {useNavigate} from "react-router-dom";
function LoginSignup() {
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

  const handleSubmit1 = (event) => {
    event.preventDefault();
    console.log(`Name:${name},Email: ${email}, Password: ${password}`);
    setEmail("");
    setPassword("");
    setName("");
    history("/about-us");
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    setEmail("");
    setPassword("");
    history("/about-us");
  };

  return (
    <div className="container">
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
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <button type="button" onClick={handleFormSwitch}>
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
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={handleFormSwitch}>
              Sign Up
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginSignup;
