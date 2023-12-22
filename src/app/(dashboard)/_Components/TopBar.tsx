import React from "react";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopBar = ({ sideBar, setsideBar }: any) => {
  return (
    <div className="flex  sm:justify-end justify-between px-5 border-b-2 items-center h-16 w-full  ">
      <AlignJustify
        className=" sm:hidden"
        onClick={() => setsideBar(!sideBar)}
      />
      <h1 className=" sm:hidden flex items-center gap-2 ">
        <Image
          src={"/Logo.gif"}
          height={100}
          width={100}
          alt=""
          className=" h-10 w-10"
        />
        <Link href="/">
          <span className=" text-xl sm:text-3xl">QuickSend</span>
        </Link>
      </h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default TopBar;
