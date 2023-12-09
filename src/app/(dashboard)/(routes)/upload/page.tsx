import React from "react";
import UploadForm from "./_components/UploadForm";

const page = () => {
  return (
    <div>
      <h1 className=" text-center py-5 text-2xl">
        Start <strong>Uploading</strong> files and <strong>Share it !</strong>
      </h1>
      <UploadForm />
    </div>
  );
};

export default page;
