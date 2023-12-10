import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white border-b-2 border-slate-200 sticky top-0   ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block  " href="/">
                LOGO
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className=" transition " href="/">
                      Upload
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-primary  text-white px-5 py-2.5 text-sm font-medium   "
                    href="/sign-in"
                  >
                    Login
                  </Link>
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
