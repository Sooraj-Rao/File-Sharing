"use client";
import React, { useEffect, useState } from "react";
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
import { Random } from "./_components/Random";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { user } = useUser();
  const [Width, setWidth] = useState(0);
  const [DocId, setDocId] = useState();
  const [Upload, setUpload] = useState(false);
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
          setWidth(progress == 0 ? 2 : progress);
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
            SaveInfo(file, downloadURL);
          });
        }
      );
    } catch (error) {
      console.log("Error Upload : " + error);
    }
  };

  const SaveInfo = async (file, fileUrl) => {
    try {
      const docId = Random();
      let res = await setDoc(doc(db, "UploadedFiles", docId), {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        password: "",
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "f/" + docId,
        UploadDate: Date.now(),
      });
      setUpload(true);
      setDocId(docId);
    } catch (error) {
      console.log("Upload Save Failed");
    }
  };

  useEffect(() => {
    Upload && router.push("/file_preview/" + DocId);
  }, [Upload]);

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
