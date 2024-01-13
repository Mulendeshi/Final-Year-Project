import React, { useState } from "react";
import "./Patient_Add.css";
//import SideBar from "../../SideBar/SideBar";





function Add_PatientPage({ handleLogin, handleArrowButtonClick }) {
  const [PID, setPID] = useState("");
  const [name, setname] = useState("");
  const [Omang, setOmang] = useState("");
  const [contacts, setcontact] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handlePIDChange = (e) => {
    setPID(e.target.value);
  };

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleOmangChange = (e) => {
    setOmang(e.target.value);
  };
  const handleExit = (e) => {};

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  
  function handleSubmit(e) {
    e.preventDefault();
    
  }

  // let sidebar = document.querySelector(".sidebar");
  // let closeBtn = document.querySelector("#btn");
  // let searchBtn = document.querySelector(".bx-search");

  // closeBtn.addEventListener("click", () => {
  //   sidebar.classList.toggle("open");
  //   menuBtnChange();
  // });

  // searchBtn.addEventListener("click", () => {
  //   sidebar.classList.toggle("open");
  //   menuBtnChange();
  // });

  // function menuBtnChange() {
  //   if (sidebar.classList.contains("open")) {
  //     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  //   } else {
  //     closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  //   }
  // }

  return (
    <div className={`outer-Wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      
      <section className="Home-section">
        {/*The middle section begins here */}
        <div className="wrapper">
          <h1>Add Patient</h1>
          <div className="row">
            <div className="input-box">
              <input
                type="text"
                placeholder="Patient ID"
                value={PID}
                onChange={handlePIDChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Names"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Omang/Passport"
                value={Omang}
                onChange={handleOmangChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>
          </div>

          {/* second row*/}
          <div className="row">
            <div className="input-box">
              <input
                type="text"
                placeholder="Medical ID"
                value={PID}
                onChange={handlePIDChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>
          </div>

          {/* third row*/}
          <div className="row">
            <div className="input-box">
              <input
                type="text"
                placeholder="Medical ID"
                value={PID}
                onChange={handlePIDChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>
          </div>

          {/*Fourth Row*/}

          <div className="row">
            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="input-box">
              <input
                type="text"
                placeholder="Medical ID"
                value={PID}
                onChange={handlePIDChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Add Patient
            </button>

            <button type="submit" onClick={handleSubmit}>
              Cancel
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Add_PatientPage;