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
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const [Width, setWidth] = useState(0);
  const [DocId, setDocId]: any = useState();
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
          setWidth(progress == 0 ? 5 : progress);
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              toast.error("Uploading failed!");

              break;
            case "storage/canceled":
              toast.error("Uploading failed!");
              break;

            case "storage/unknown":
              toast.error("Uploading failed!");
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            SaveInfo(file, downloadURL);
          });
        }
      );
    } catch (error) {
      toast.error("Uploading failed!");
    }
  };

  const SaveInfo = async (file: any, fileUrl: any) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Page;
