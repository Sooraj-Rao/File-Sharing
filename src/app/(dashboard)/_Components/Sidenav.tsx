"use client";
import { File, Shield, Upload, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'

const Sidenav = ({ setsideBar }:any) => {
  const [active, setactive] = useState(0);
  const pathname = usePathname()


  const list = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  return (
    <div className=" z-50">
      <div className=" flex justify-center items-center h-16 border-b-2 relative bg-white text-black">
        <Link href={"/"} className=" sm:block hidden">
          LOGO
        </Link>
        <X
          className=" sm:hidden absolute right-4"
          onClick={() => setsideBar(false)}
        />
      </div>
      <div>
        {list.map((item, i) => {
          return (
            <Link
              href={item.path}
              key={i}
              className={`
              flex gap-2 py-4 px-6  cursor-pointer font-semibold 
              ${pathname == item.path ? "text-blue-600 bg-gray-200 " : 'text-gray-800'}
              `}
              onClick={() => setactive(i)}
            >
              <item.icon />
              <h1>{item.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav;
