"use client";
import {
  FileNameLogic,
  FileSizeLogic,
  FileTypeLogic,
} from "@/utils/CommonLogic";
import { Download } from "lucide-react";
import React, { useState } from "react";

const DownloadFile = ({ Data }) => {
  const [password, setpassword] = useState("");
  console.log(Data);

  let fileName = Data && FileNameLogic(Data?.fileName);
  let fileType = Data && FileTypeLogic(Data?.fileType);
  let fileSize = Data && FileSizeLogic(Data?.fileSize);
  console.log(fileSize);

  return (
    <div className=" flex justify-center items-center h-screen bg-slate-200">
      <div className=" h-[30rem] sm:w-[25rem] w-[90%] bg-white p-4">
        <h1 className=" text-2xl  text-center mt-3">
          <span className=" font-bold capitalize">{Data.userName}</span> shared
          this file
        </h1>
        <div className=" h-40 bg-red-400 mt-10"></div>
        <h1>{Data && fileName}</h1>
        <h1 className=" flex justify-between">
          <span className=" capitalize">{Data && fileType}</span>
          <span>{Data && fileSize}</span>
        </h1>

        <form
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
        </form>
        <div className=" flex gap-3 mt-5  h-14 text-white items-center justify-center  ">
          <button
            onClick={() => window.open(Data.fileUrl, "_blank")}
            disabled={Data?.password !== password}
            className=" disabled:bg-gray-500 flex gap-3 w-3/4 bg-primary justify-center items-center h-full rounded-md"
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
