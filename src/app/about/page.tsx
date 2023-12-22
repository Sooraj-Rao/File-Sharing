import React from "react";
import Constant from "@/utils/Constants";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className=" text-center py-5  text-2xl">
        About <span className=" font-bold"> QuickSend</span>
      </h1>
      <div className="  sm:px-20 px-4 text-sm my-4 ">
        <p className=" mt-6">{Constant.about.split("_")[0]}</p>
        <p className=" mt-6">{Constant.about.split("_")[1]}</p>
        <p className=" mt-6">{Constant.about.split("_")[2]}</p>
        <div className=" mt-6">
          <Link
            href={"/"}
            className=" bg-primary py-3 px-5 rounded-md  text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
