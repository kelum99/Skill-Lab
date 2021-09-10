import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarItemsStudent = [
    {
        title: "My Courses",
        path: "/mycourses",
        icon: <FaIcons.FaBook />,
        className: "nav-text"
    },
    {
        title: "Q & A",
        path: "/qanda",
        icon: <FaIcons.FaEdit />,
        className: "nav-text"
    },
    {
        title: "Notices",
        path: "/mynotices",
        icon: <IoIcons.IoMdNotifications />,
        className: "nav-text"
    },
    {
        title: "Performance",
        path: "/performance",
        icon: <FaIcons.FaArrowCircleUp />,
        className: "nav-text"
    },
    {
        title: "Analysis",
        path: "/analysis",
        icon: <FaIcons.FaChartLine />,
        className: "nav-text"
    },
    {
        title: "Reviews",
        path: "/myreviews",
        icon: <FaIcons.FaStarHalfAlt />,
        className: "nav-text"
    },
    {
        title: "My Products",
        path: "/myproducts",
        icon: <FaIcons.FaListAlt />,
        className: "nav-text"
    },
    {
        title: "Withdraw History",
        path: "/withdrawHistory",
        icon: <FaIcons.FaMoneyCheckAlt />,
        className: "nav-text"
    }
    
];


