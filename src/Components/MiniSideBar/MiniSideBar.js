import React from "react";
import { TbTrashXFilled } from "react-icons/tb";
import { BxAddPeople } from "@bx-design/react-icons";
import { IoMdAnalytics } from "react-icons/io";
import { FaFirstAid, FaSearch, FaUserInjured } from "react-icons/fa";
import "./MiniSideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="Mini-sidebar">
      <ul className="nav-list">
       
        <li>
          <a href="#">
            <BxAddPeople className="icons" />
            <span className="links_name">Add Patient</span>
          </a>
          <span className="tooltip">Add Patient</span>
        </li>
       
        <li>
          <a href="#">
            <FaUserInjured className="icons" />
            <span className="links_name">Update Patients</span>
          </a>
          <span className="tooltip">Update Patients</span>
        </li>

        <li>
          <a href="#">
            <TbTrashXFilled className="icons" />
            <span className="links_name">Delete</span>
          </a>
          <span className="tooltip">Delete</span>
        </li>

        <li>
          <a href="#">
            <IoMdAnalytics className="icons" />
            <span className="links_name">Make Predictions</span>
          </a>
          <span className="tooltip">Make Predictions</span>
        </li>
      
      </ul>
    </div>
  );
}

export default SideBar;
