"use client";
import { Copy } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Alert from "../../upload/_components/Alert";
import { SendEmail } from "@/utils/GlobalApi";
import { useUser } from "@clerk/nextjs";

const ViewFile = ({ Data, SavePassword }) => {
  const [Checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const {user} = useUser();

  const CopyUrl = async () => {
    window.navigator.clipboard.writeText(Data?.shortUrl);
    console.log("Copied");
    return <Alert msg={"URL Copied!"} color={"green"} />;
  };

  const SendUserEmail = () => {
    let data = {
      emailToSend: Email,
      userName: user?.fullName,
      fileName: Data?.fileName,
      fileSize: Data?.fileSize,
      fileType: Data?.fileType,
      shortUrl: Data?.shortUrl,
      download:Data?.fileUrl
    };
    SendEmail(data).then((res) => console.log(res));
  };

  return (
    <div className=" flex justify-center lg:flex-row flex-col p-10  gap-4 items-center h-[calc(100vh-64px)]">
      <div className=" xl:w-1/3 w-2/3 h-80 sm:w-3/4 shadow-[0px_0px_10px_-2px]  rounded-md shadow-slate-400 flex flex-col items-center justify-evenly">
        <div className=" h-32 w-1/2  rounded-lg ">
          <Image
            quality={75}
            src={Data?.fileUrl}
            width={100}
            height={100}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" ml-4">
          <h1 className="  font-semibold">{Data?.fileName}</h1>
          <div className=" text-gray-600 flex gap-4">
            <h1>{Data?.filetype}</h1>
            <h1>{(Data?.fileSize / 1024 / 1024).toFixed(0)} MB</h1>
          </div>
        </div>
      </div>
      <div className=" xl:w-1/3 w-2/3 sm:w-3/4 h-80 shadow-[0px_0px_10px_-2px]  rounded-md shadow-slate-400  p-5">
        <h1 className="text-slate-900">Short Url</h1>
        <div className="flex justify-between text-gray-700 p-2 border rounded border-gray-400">
          <h1 className=" ">{Data?.shortUrl}</h1>
          <Copy className=" cursor-pointer" onClick={CopyUrl} />
        </div>
        <div className=" my-2">
          <div className=" flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              className=" h-4 w-4  "
              onChange={() => setChecked(!Checked)}
            />
            <h2 className=" text-slate-800">Enable Password?</h2>
          </div>
          <div className={` flex gap-2 ${Checked ? "block" : "hidden"}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" h-10 w-5/6 border-gray-400 border rounded outline-none pl-2"
            />
            <button
              className=" bg-primary text-white px-3 rounded-md"
              onClick={() => SavePassword(password)}
            >
              Save
            </button>
          </div>
          <div className=" h-32 bg-gray-100 mt-5 p-1">
            <h2>Send File to Email</h2>
            <input
              type="text"
              className="w-full h-10 border-gray-400 border outline-none pl-2 "
            />
            <br />
            <button
              onClick={SendUserEmail}
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-primary text-white w-full h-10 mt-2 rounded-md"
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFile;
