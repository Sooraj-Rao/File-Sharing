import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilePreview = ({ file, removeFile, progress }) => {
  let FileName = file.name;
  let name = FileName.length > 20 ? FileName.slice(0, 20) + "..." : FileName;
  let Filetype = file.type;
  let type = Filetype.length > 25 ? Filetype.slice(0, 25) + "..." : Filetype;
  let size = (file.size / 1024 / 1024).toFixed(2) + "MB";
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
          <h1 className="  font-semibold">{name}</h1>
          <div className=" text-gray-800">
            <h1>{type}</h1>
            <h1>{size}</h1>
          </div>
        </div>
        <X
          className=" self-start absolute right-2 cursor-pointer top-2 text-gray-800   "
          onClick={!progress && removeFile}
        />
      </div>
    </div>
  );
};

export default FilePreview;
