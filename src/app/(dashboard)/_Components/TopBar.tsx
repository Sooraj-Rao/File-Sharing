import React from "react";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";

const TopBar = ({ sideBar, setsideBar }) => {
  return (
    <div className="flex  sm:justify-end justify-between px-5 border-b-2 items-center h-16 w-full  ">
      <AlignJustify
        className=" sm:hidden"
        onClick={() => setsideBar(!sideBar)}
      />
      <h1 className=" sm:hidden ">LOGO</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default TopBar;
