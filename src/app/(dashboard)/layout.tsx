"use client";
import React, { useState } from "react";
import Sidenav from "./_Components/Sidenav";
import TopBar from "./_Components/TopBar";

const layout = ({ children }) => {
  const [sideBar, setsideBar] = useState(false);
  return (
    <div className={`flex `}>
      <div
        className={`  fixed  border-r-2 h-screen sm:block duration-300 overflow-hidden bg-white
      ${sideBar ? "w-64 bg-slate-100" : "sm:w-64 w-0"}
      `}
      >
        <Sidenav setsideBar={setsideBar} />
      </div>
      <div className={` sm:w-[calc(100vw-16rem)] w-full sm:ml-64  `}>
        <TopBar sideBar={sideBar} setsideBar={setsideBar} />
        {children}
      </div>
    </div>
  );
};

export default layout;
