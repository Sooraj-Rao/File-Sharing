"use client";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../../../Firebase.Config";
import ProgressBar from "./_components/ProgressBar";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";

const page = () => {
  const { user } = useUser();
  const [Width, setWidth] = useState("");
  const storage = getStorage(app);
  const db = getFirestore(app);
  let progress;
  const UploadFile = (file: any) => {
    try {
      const metadata = {
        contentType: file.type,
      };
      const storageRef = ref(storage, "file-upload/" + file?.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setWidth(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              console.log(error);

              break;
            case "storage/canceled":
              console.log(error);
              break;

            case "storage/unknown":
              console.log(error);
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (error) {
      console.log("Error Upload : " + error);
    }
  };

  const SaveInfo = async (file, fileUrl) => {
    const docId = Date.now().toString();
    let res = await setDoc(doc(db, "UploadedFiles", docId), {
      fileName: file.name,
      fileSize: file.size,
      filetype: file.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: "",
      shortUrl:
    });
  };
  SaveInfo();
  return (
    <div>
      <h1 className=" text-center py-5 text-2xl px-5  sm:px-0">
        Start <strong>Uploading</strong> files and
        <br className=" sm:hidden block" /> <strong>Share </strong>it !
      </h1>
      <UploadForm UploadFile={UploadFile} progress={Width} />
    </div>
  );
};

export default page;
