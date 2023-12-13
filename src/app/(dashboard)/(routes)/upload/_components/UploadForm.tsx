import React, { useState } from "react";
import Alert from "./Alert";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ UploadFile, progress }) => {
  const [file, setfile] = useState();
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
      <div className=" flex justify-center items-center mt-16 ">
        <div className="flex items-center justify-center  md:w-[25rem] w-3/4 ">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200  shadow-[0px_0px_20px_1px] shadow-gray-400 ">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-16 h-10 mb-4 text-blue-500  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
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
        <Alert msg={"Successfully Uploaded !"} color={"green"} />
      )}
    </div>
  );
};

export default UploadForm;
