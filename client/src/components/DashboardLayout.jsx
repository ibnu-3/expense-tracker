import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children,activeMenu }) => {
  return (
    <div className="">
      <Navbar />
      <div className="flex-1 flex  pt-20 ">
        <div className="hidden sm:flex sm:w-48 ">
            <Sidebar activeMenu={activeMenu}/>
        </div  >
        <div className="bg-white rounded-md p-3  flex-grow h-screen ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
