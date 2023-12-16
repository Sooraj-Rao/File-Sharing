"use client";
import {
  FileNameLogic,
  FileSizeLogic,
  FileTypeLogic,
} from "@/utils/CommonLogic";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const DownloadFile = ({ Data }: any) => {
  const [password, setpassword] = useState("");

  let fileName = Data && FileNameLogic(Data?.fileName);
  let fileType = Data && FileTypeLogic(Data?.fileType);
  let fileSize = Data && FileSizeLogic(Data?.fileSize);
  let userEmail =
    Data?.userEmail &&
    FileNameLogic(Data?.userEmail?.split("@")[0].replace(/[0-9_]/g, ""));
  let userName =
    Data?.userName && FileNameLogic(Data?.userName && Data?.userName);

  return (
    <div className=" flex justify-center items-center h-screen bg-slate-200">
      <div className=" h-[32rem] sm:w-[25rem] w-[90%] bg-white py-4 px-6">
        <h1 className=" text-2xl  text-center mt-3">
          <span
            className=" font-bold capitalize text-gray-600 hover:text-black underline cursor-pointer"
            onClick={() => window.open("mailto:" + Data?.userEmail, "_blank")}
          >
            {Data?.userName ? userName : userEmail}
          </span>{" "}
          shared this file
        </h1>
        <div className=" h-40  my-7 flex  justify-center items-center ">
          <Image
            src={"/download.gif"}
            height={100}
            width={100}
            alt="download"
            className=" h-full w-1/2   "
          />
        </div>
        <h1 className=" text-lg font-semibold text-gray-600">
          {Data && fileName}
        </h1>
        <h1 className=" flex justify-between">
          <span className=" capitalize">Type: {Data && fileType}</span>
          <span>Size: {Data && fileSize}</span>
        </h1>
        <div
          className={`  h-10 mt-5  flex justify-center ${
            Data?.password ? " visible" : "invisible"
          }`}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter password to download "
            className=" w-3/4 border-2 border-gray-300 focus:border-blue-500 rounded-md outline-none pl-2"
          />
        </div>
        <p className=" text-center">
          {Data?.password
            ? password.length == 0 && "Password required!"
            : "Click below to download file!"}
        </p>
        <div className=" flex gap-3 mt-5  h-12 text-white items-center justify-center  ">
          <button
            onClick={() => window.open(Data.fileUrl, "_blank")}
            disabled={Data?.password !== password}
            className=" disabled:bg-gray-500 disabled:cursor-not-allowed flex gap-3 w-3/4 bg-primary justify-center items-center h-full rounded-md"
          >
            <Download />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadFile;
