import Constants from "@/utils/Constants";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-64px)] lg:items-center">
        <div className="mx-auto   text-center">
          <h1 className=" text-primary  text-3xl font-[800]  sm:text-5xl w-full ">
            <span className=" text-[6.3rem]">Rapid file uploads </span>

            <span className="sm:flex  text-[6rem] py-3"> Instant, seamless sharing </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {Constants.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white">
            <Link
              className="block w-full rounded-md border  bg-primary px-8 py-3 text-sm font-medium  sm:w-auto"
              href="/upload"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded-md border  px-8 py-3 text-sm font-medium bg-primary  sm:w-auto"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
