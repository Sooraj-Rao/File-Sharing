import {
  FileNameLogic,
  FileSizeLogic,
  FileTypeLogic,
} from "@/utils/CommonLogic";
import { SendEmail } from "@/utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { Copy } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const FileDetails = ({
  src,
  setSrc,
  Data,
  Copied,
  Checked,
  setChecked,
  password,
  setPassword,
  SavePassword,
  setEmail,
  Email,
  setCopied,
}: any) => {
  const { user } = useUser();
  let fileType = Data?.fileType && FileTypeLogic(Data.fileType);
  let fileSize = Data?.fileSize && FileSizeLogic(Data.fileSize);
  let fileName = Data?.fileName && FileNameLogic(Data.fileName);
  const CopyUrl = async () => {
    window.navigator.clipboard.writeText(Data?.shortUrl);
    return setCopied(true);
  };

  const SendUserEmail = () => {
    let data = {
      emailToSend: Email,
      userName: user?.fullName,
      fileName: Data?.fileName,
      fileSize: Data?.fileSize,
      fileType: Data?.fileType,
      shortUrl: Data?.shortUrl,
      download: Data?.fileUrl,
      password: Data?.password,
      userEmail: Data?.userEmail,
    };
    SendEmail(data)
      .then((res) => {
        if (res.data.data == null || res.data.error) {
          toast.error("Unable to send Mail");
        } else {
          toast.success("Mail Sent");
        }
      })
      .catch(() => toast.error("Unable to send Mail"));
  };

  return (
    <div className=" flex justify-center lg:flex-row flex-col sm:p-10 p-4  gap-4 items-center h-[calc(100vh-64px)]">
      <div className=" xl:w-[26rem] w-full lg:w-5/6  h-80  shadow-[0px_0px_10px_-2px]  rounded-md shadow-slate-400 flex flex-col items-center justify-evenly">
        <div className=" h-32 w-1/2  rounded-lg ">
          {src && (
            <Image
              src={src}
              width={100}
              height={100}
              alt="File"
              onError={() => setSrc("/File.png")}
              className={`w-full h-full 
          object-contain 
        `}
            />
          )}
        </div>
        <div className=" ml-4">
          <h1 className="  font-semibold capitalize">
            {Data?.fileName && fileName}
          </h1>
          <div className=" text-gray-600 flex gap-4">
            <h1>{Data?.fileType && fileType}</h1>
            <h1>{Data?.fileSize && fileSize}</h1>
          </div>
        </div>
      </div>
      <div className=" xl:w-[26rem] w-full lg:w-5/6  h-80 shadow-[0px_0px_10px_-2px]  rounded-md shadow-slate-400  p-5">
        <h1 className="text-slate-900">Short Url</h1>
        <div className="flex gap-[6px] text-gray-700 items-center   ">
          <h1 className=" w-5/6 overflow-hidden border-gray-400 border rounded h-10 flex items-center pl-2">
            <span>{Data?.shortUrl}</span>
          </h1>
          <button
            onClick={CopyUrl}
            className={`
           rounded-md cursor-pointer ml-1 bg-primary
            text-white py-2 w-16 flex justify-center`}
          >
            {Copied ? <p className="  ">Copied</p> : <Copy />}
          </button>
        </div>
        <div className=" my-2">
          <div className=" flex items-center gap-2 mb-2">
            <input
              checked={Checked}
              type="checkbox"
              className=" h-4 w-4  "
              onChange={() => setChecked(!Checked)}
            />
            <h2 className=" text-slate-800">
              {Data?.password ? "View" : "Enable"} Password?
            </h2>
          </div>

          {Data?.password ? (
            <div className={` flex gap-2 ${Checked ? "block" : "hidden"}`}>
              <input
                type="password"
                value={Data?.password == password ? password : password}
                onChange={(e) => setPassword(e.target.value)}
                className=" h-10 w-5/6 border-gray-400 border rounded outline-none pl-2"
              />
              <button
                className=" bg-primary text-white px-3 rounded-md"
                onClick={(e) => SavePassword(password, e)}
              >
                Save
              </button>
            </div>
          ) : (
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
          )}
          <div className=" h-32  mt-5 p-1">
            <h2>Send File to Email</h2>
            <input
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 border-gray-400 border outline-none pl-2 rounded-md "
            />
            <br />
            <button
              onClick={SendUserEmail}
              className=" bg-primary text-white w-full h-10 mt-3 rounded-md"
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;
