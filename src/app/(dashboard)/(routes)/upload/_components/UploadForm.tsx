import React, { useState } from "react";
import Alert from "./Alert";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import { UploadFileIcon } from "@/utils/Svg";

const UploadForm = ({ UploadFile, progress }: any) => {
  const [file, setfile]: any = useState();
  const [Error, setError] = useState("");

  const handleChange = (e: any) => {
    let input = e.target.files[0];
    if (input && input.size > 10000000) {
      return setError("File size should be less than 10 MB");
    }
    Error && setError("");
    setfile(input);
  };

  return (
    <div className="text-center">
      <div className=" flex justify-center items-center mt-16 mb-5 ">
        <div className="flex items-center justify-center  md:w-[25rem] w-3/4 ">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200  shadow-[0px_0px_20px_1px] shadow-gray-400 ">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {UploadFileIcon}
              <p className="mb-2 text-sm text-gray-600  px-2">
                <span className="font-semibold">Click to upload</span> or
                <span className=" text-blue-500 font-semibold"> drag </span>
                and
                <span className=" text-blue-500 font-semibold"> drop </span>
              </p>
              <p className="text-xs text-gray-500 px-2">
                SVG, PNG, JPG or GIF (MAX 2MB)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      {Error && <Alert msg={Error} color={"red"} />}
      {file && (
        <FilePreview
          progress={progress}
          file={file}
          removeFile={() => setfile("")}
        />
      )}

      {progress ? (
        file &&
        progress != 100 && (
          <div>
            <ProgressBar progress={progress} />
          </div>
        )
      ) : (
        <button
          disabled={!file}
          className=" disabled:bg-gray-500 my-6 px-6 py-3 bg-primary  rounded-lg text-white"
          onClick={() => UploadFile(file)}
        >
          Upload
        </button>
      )}
      {progress === 100 && (
        <div className=" mt-5">
        <Alert msg={"Successfully Uploaded !"} color={"green"} />
        </div>
      )}
    </div>
  );
};

export default UploadForm;
