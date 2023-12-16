import { FileNameLogic, FileSizeLogic, FileTypeLogic } from "@/utils/CommonLogic";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilePreview = ({ file, removeFile, progress }:any) => {
  let FileName =FileNameLogic(file?.name);
  let Filetype = FileTypeLogic(file?.type);
  let Filesize = FileSizeLogic(file?.size);
  return (
    <div className=" flex  items-center text-start mt-5 justify-center">
      <div className="relative flex bg-gray-200   md:w-[25rem] w-3/4 items-center py-2 rounded-md pl-5 pr-10 ">
        <Image
          src={"/File.png"}
          height={30}
          width={50}
          alt="file"
          className=" h-14 w-14 z-10"
        />
        <div className=" ml-4">
          <h1 className=" font-semibold text-gray-700 ">{FileName}</h1>
          <div className=" text-gray-800">
            <h1>{Filetype}</h1>
            <h1>{Filesize}</h1>
          </div>
        </div>
        <X
          className={` self-start absolute right-2 cursor-pointer top-2   
          ${progress?'text-gray-400 cursor-not-allowed':'text-gray-800'}
          `}
          onClick={!progress ? removeFile:null}
        />
      </div>
    </div>
  );
};

export default FilePreview;
