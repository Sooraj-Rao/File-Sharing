import Constants from "@/utils/Constants";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-200 text-black">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-64px)] lg:items-center">
      <div className="mx-auto  max-w-5xl text-center">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          <span className=" text-[5rem]">
          Understand User Flow.
          </span>
  
          <span className="sm:block text-[5rem]"> Increase Conversion. </span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          {Constants.desc}
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/upload"
          >
            Get Started
          </Link>
  
          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
