"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user } = useUser();

  return (
    <div>
      <header className="bg-white border-b-2 border-slate-200 sticky top-0   ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className=" flex items-center md:gap-2 font-bold text-primary text-3xl ">
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
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li className="  hover:font-extrabold">
                    <Link className=" transition " href="/upload">
                      Upload
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  {user ? (
                    <UserButton />
                  ) : (
                    <Link
                      className="rounded-md bg-primary  text-white px-5 py-2.5 text-sm font-medium   "
                      href="/sign-in"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
