/*
import React, { useState } from "react";
import "../Styles/login.css";

// function LoginForm ({handleLogin}){
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleLogin();

// };

// return (
//   <div className="login-container">
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <p1>STAY HEALTHY</p1>
//       <div className="input-container">
//         <input type="text" placeholder="Enter id" name="username" />
//       </div>
//       <div className="input-container">
//         <input type="password" placeholder="Enter password" name="password" />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   </div>
// );

// }
// export default LoginForm;
// // import React from "react";
// // import "../Styles/login.css"; // Import CSS file

// // function LoginForm({ handleLogin }) {
// //   return (
// //     <div className="login-container">
// //       <form className="login-form" onSubmit={handleLogin}>
// //         <input type="text" placeholder="Username" name="username" />
// //         <input type="password" placeholder="Password" name="password" />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default LoginForm;

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here, for example:
    if (username === "ID" && password === "Password") {
      handleLogin(); // Invoke the handleLogin function passed from App component
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="logo">
        {}
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
*/

import React, { useState } from "react";
import "./login.css";
import { FaUserNurse, FaEye, FaEyeSlash } from "react-icons/fa";
import Thank_you from "../Thank_you/Thank_you.js";

function LoginPage({ handleLogin, handleArrowButtonClick }) {
  const [Medical_ID, setMedical_ID] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [exitApp, setExitApp] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const handleUsernameChange = (e) => {
    setMedical_ID(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  const handleExit = (e) => {
    e.preventDefault();
    //window.location.href = "https://www.google.com";
    setExitApp(true);
  };

  const togglePasswordVisibility = () => {
    setShowPasswords((prevState) => !prevState); // Toggle the showPassword state
  };

  const getPasswordIcon = () => {
    return showPasswords ? (
      <FaEyeSlash className="icon" onClick={togglePasswordVisibility} />
    ) : (
      <FaEye className="icon" onClick={togglePasswordVisibility} />
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Perform login logic using the provided details
    // handleLogin, handleArrowButtonClick, and other functionality
  }

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <div>
        {/* User Type Dropdown */}
        <select
          value={userType}
          onChange={handleUserTypeChange}
          required
          className="user-type"
        >
          <option value="" disabled>
            User Type
          </option>
          <option className="option-type" value="Endocrinologist">
            Endocrinologist
          </option>
          <option className="option-type" value="General Practitioner">
            General Practitioner
          </option>
          <option className="option-type" value="Admin">
            Admin
          </option>
        </select>
      </div>

      {/* Medical ID Input */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Medical ID"
          value={Medical_ID}
          onChange={handleUsernameChange}
          required
        />
        <FaUserNurse className="icon" />
      </div>

      {/* Password Input */}
      <div className="input-box">
        <input
          type={showPasswords ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        {/* Toggle password visibility */}
        {getPasswordIcon()}
      </div>
      <div className="change_password">
        <a href="#">Change Password</a>
      </div>

      <div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
      {exitApp ? (
        <Thank_you />
      ) : (
        <div className="exit_link">
          <p>
            Do not have an Account?
            <a href="#" onClick={handleExit}>
              Click here
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
