"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../../Firebase.Config";
import DownloadFile from "./_componnet/DownloadFile";
import toast from "react-hot-toast";

const Page = ({ params }: any) => {
  const [Data, setData]: any = useState("");
  let DocId = params?.id;
  const db = getFirestore(app);

  const GetFileData = async () => {
    try {
      const docRef = doc(db, "UploadedFiles", DocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        toast.error("File doesnt exist!");
      }
    } catch (error) {
      toast.error("File doesnt exist!");
    }
  };

  useEffect(() => {
    DocId && GetFileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DocId]);

  return (
    <div>
      <DownloadFile Data={Data} />
    </div>
  );
};

export default Page;
