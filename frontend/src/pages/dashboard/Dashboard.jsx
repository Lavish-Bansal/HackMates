import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/h1-removebg-preview.png";
import { MdAccountCircle } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/useProfile/RegistrationForm";
import Hackathon from "../../components/hackathon/Hackathon";
import { AiFillProject } from "react-icons/ai";
import LogoutBtn from "../../components/LogoutBtn";
import { getUserToken } from "../../utils/getUserToken";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleProfileClick = (event) => {
    event.preventDefault();
    // Toggle the showRegistrationForm state when the "Profile" link is clicked
    setShowUserProfile(!showUserProfile);
  };

  useEffect(() => {
    const token = getUserToken();
    if (!token) {
      navigate("/login", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-10/12 bg-white border rounded-lg shadow-sm flex flex-row h-[700px] ">
        {/* left side */}
        <div className="w-1/5 bg-blue-700 text-white rounded-lg ml-3 m-4 flex flex-col items-center justify-between">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[90px] border rounded-full mt-6 bg-white">
              <img className="w-24" src={Logo} alt="" />
            </div>
            <p className="text-center pt-5 font-semi-bold">Shubham Kumar</p>
          </div>

          <ul>
            <li className="hover:shadow-md hover:bg-blue-500 rounded-md transition-all 200ms ease">
              <NavLink
                to="/dashboard"
                className="flex items-center mb-5 pl-4 py-2"
                activeClassName="active"
              >
                <span className=" text-[25px] mr-5">
                  <AiFillProject />
                </span>
                Hackathon
              </NavLink>
            </li>

            <li className="hover:shadow-md hover:bg-blue-500 rounded-md transition-all 200ms ease">
              <NavLink
                to="/userprofile"
                onClick={handleProfileClick}
                className="flex items-center mb-5 pl-4 py-2"
                activeClassName="active"
              >
                <span className=" text-[25px] mr-5">
                  <MdAccountCircle />{" "}
                </span>
                Profile
              </NavLink>
            </li>

            <li className="hover:shadow-md hover:bg-blue-500 rounded-md transition-all 200ms ease">
              <NavLink
                className="flex items-center mb-5 pl-4 py-2 pr-2"
                to="/updatePage"
                activeClassName="active"
              >
                <span className=" text-[25px] mr-5">
                  <MdAddToPhotos />{" "}
                </span>
                Create team
              </NavLink>
            </li>

            <li className="hover:shadow-md hover:bg-blue-500 rounded-md transition-all 200ms ease">
              <NavLink
                className="flex items-center mb-5 pl-4 py-2"
                to="/chat"
                activeClassName="active"
              >
                <span className=" text-[25px] mr-5">
                  <IoChatbubbleEllipses />
                </span>
                Chat
              </NavLink>
            </li>
          </ul>

          <div>
            <LogoutBtn />
          </div>
        </div>

        {/* right side */}
        <div className="w-full bg-blue-100 m-4 rounded-lg p-5">
          {showUserProfile ? <RegistrationForm /> : <Hackathon />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//     </div>
//   )
// }

// export default Dashboard
