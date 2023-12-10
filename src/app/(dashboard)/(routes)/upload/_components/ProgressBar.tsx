import React from "react";

const ProgressBar = ({ progress }) => {
  console.log(progress);

  return (
    <div>
      <div className=" flex justify-center mt-5">
        <div className="md:w-[25rem] w-3/4 bg-slate-400 h-8 flex items-center px-1 rounded-full ">
          <div
            className={`  bg-primary text-white text-center  duration-500 rounded-full h-7 `}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
          <h1 className=" mt-2 font-semibold">Uploading {progress?.toFixed(0)} %</h1>
    </div>
  );
};

export default ProgressBar;
