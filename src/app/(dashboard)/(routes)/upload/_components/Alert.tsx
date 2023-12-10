import { AlertCircle, CheckIcon } from "lucide-react";
import React from "react";

const Alert = ({ msg, color }) => {
  return (
    <div className=" flex justify-center mt-5">
      <div
        style={{ background: `${color}` }}
        className={` flex justify-center items-center gap-2  xl:w-1/3 sm:w-1/2 w-2/3 text-white rounded-md p-2`}
      >
        {color === "green" ? <CheckIcon /> : <AlertCircle />}
        <h1>{msg}</h1>
      </div>
    </div>
  );
};

export default Alert;
