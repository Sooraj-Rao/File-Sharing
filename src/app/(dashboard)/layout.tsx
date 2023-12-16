"use client";
import React, { useState } from "react";
import Sidenav from "./_Components/Sidenav";
import TopBar from "./_Components/TopBar";
import { ToastBar, Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
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
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default Layout;
