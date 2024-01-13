import React, { useState } from "react";
import "./change_password.css";
import { FaUserNurse, FaEye, FaEyeSlash } from "react-icons/fa";

function Change_password({ handleLogin, handleArrowButtonClick }) {
  const [Medical_ID, setMedical_ID] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [exitApp, setExitApp] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [showUserType, setShowUserType] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Perform login logic using the provided details
    // handleLogin, handleArrowButtonClick, and other functionality
  }

  return (
    <div className="wrapper">
      <h1>Change Password</h1>
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
          placeholder="Old Password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          required
        />

        {/* Toggle password visibility */}
        {getPasswordIcon()}
      </div>

      {/* Password Input */}
      <div className="input-box">
        <input
          type={showPasswords ? "text" : "password"}
          placeholder="New Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />

        {/* Toggle password visibility */}
        {getPasswordIcon()}
      </div>

      {/* Password Input */}
      <div className="input-box">
        <input
          type={showPasswords ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        {/* Toggle password visibility */}
        {getPasswordIcon()}
      </div>
      <div className="back-to-login">
        <a href="#">Login instead</a>
      </div>

      <div>
        <button type="submit" onClick={handleSubmit}>
          Set Password
        </button>
      </div>

      <div className="exit_link">
        <p>
          Do not have an Account?
          <a href="#" onClick={handleExit}>
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Change_password;
