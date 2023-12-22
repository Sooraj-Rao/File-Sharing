import Constants from "@/utils/Constants";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-black h-[calc(100vh-64px)]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-64px)] lg:items-center">
        <div className="mx-auto   text-center">
          <h1 className=" text-primary  text-3xl font-extrabold  sm:text-5xl w-full ">
            <span className="text-[8vw] lg:text-8xl">Rapid file uploads </span>

            <span className="md:flex text-[8vw]  lg:text-8xl py-3">
              Instant, seamless sharing
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl text-sm">
            {Constants.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white">
            <Link
              className="block w-full rounded-md border  bg-primary px-8 py-3 text-sm font-medium  sm:w-fit"
              href="/upload"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded-md border  px-8 py-3 text-sm font-medium bg-primary  sm:w-fit"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <h1 className=" absolute bottom-3">
          Developed By
          <Link
            href={"https://sooraj-rao.vercel.app"}
            target="_blank"
            className=" font-bold pl-2 cursor-pointer hover:italic"
          >
            Sooraj
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
