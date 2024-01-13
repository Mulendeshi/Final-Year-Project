import { TbAnalyzeFilled, TbTrashXFilled } from "react-icons/tb";
import {
  BxMenu,
  BxPersonCircle,
  BxHome,
  BxPackageSchedule,
  BxSettings,
  BxQuestion,
  BxChat,
  BxAddPeople,
  BxLogOut,
  BxCancel,
} from "@bx-design/react-icons";
import { IoMdAnalytics } from "react-icons/io";
import { FaFirstAid, FaSearch, FaUserInjured } from "react-icons/fa";
import { click } from "@testing-library/user-event/dist/click";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <BxPersonCircle className="icon" />
        <div className="logo_name">DM Detection System</div>
        <BxMenu id="btn" />
      </div>

      <ul className="nav-list">
        <li>
          <FaSearch className="bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        
        <li>
          <a href="#">
            <BxHome className="icon" />
            <span className="links_name">Home</span>
          </a>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <a href="#">
            <FaUserInjured className="icon" />
            <span className="links_name">Patients</span>
          </a>
          <span className="tooltip">Patients</span>
        </li>

        <li>
          <a href="#">
            <BxPackageSchedule className="icon" />
            <span className="links_name">Scheduled</span>
          </a>
          <span className="tooltip">Scheduled</span>
        </li>

        <li>
          <a href="#">
            <FaFirstAid className="icon" />
            <span className="links_name">Risk Assesment</span>
          </a>
          <span className="tooltip">Risk Assesment</span>
        </li>
        
        <li>
          <a href="#">
            <BxSettings className="icon" />
            <span className="links_name">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>

        <li>
          <a href="#">
            <BxQuestion className="icon" />
            <span className="links_name">Help</span>
          </a>
          <span className="tooltip">Help</span>
        </li>

        <li>
          <a href="#">
            <BxChat className="icon" />
            <span className="links_name">Chat</span>
          </a>
          <span className="tooltip">Chat</span>
        </li>

        <li className="profile">
          <div className="profile-details">
            <img src="/Components/Images/it.png" alt="profileImg" />
            <div className="name_job">
              <div className="name">Test Jackson</div>
              <div className="Job">Software Endocrinologist</div>
            </div>
          </div>
          <BxLogOut id="log_out" />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
