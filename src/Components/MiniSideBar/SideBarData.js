import React from "react";
import { FaBandAid, FaBiohazard, FaCalendarPlus, FaHandsHelping, FaHome, FaSpaceShuttle, FaUserInjured, FaUserNurse, FaUserPlus, FaWhatsapp } from "react-icons/fa";

export const SideBarData=[
    {
        title: "Home",
        icon: <FaHome/>,
        link:"/Home"

    },
    {
        title: "Patient",
        icon: <FaUserInjured/>,
        link:"/Patient"

    },
    {
        title: "Risk Assesments",
        icon: <FaBiohazard/>,
        link:"/Risk_Assesments"

    },
    {
        title: "Schedule",
        icon: <FaCalendarPlus/>,
        link:"/Schedule"

    },
    {
        title: "Chat",
        icon: <FaWhatsapp/>,
        link:"/Chat"

    },

    {
        title: "Settings",
        icon: <FaSpaceShuttle/>,
        link:"/Setting"

    },
    {
        title: "Help",
        icon: <FaHandsHelping/>,
        link:"/Help"

    },
    {
        title: "Health care Practitioner",
        icon: <FaUserNurse/>,
        link:"/Users"

    },
    {
        title: "Add",
        icon: <FaUserPlus/>,
        link:"/AddUsers"

    }
];