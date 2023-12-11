"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../../Firebase.Config";
import DownloadFile from "./_componnet/DownloadFile";

const page = ({ params }) => {
  const [Data, setData] = useState("");
  let DocId = params?.id;
  const db = getFirestore(app);

  const GetFileData = async () => {
    try {
      const docRef = doc(db, "UploadedFiles", DocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setData(docSnap.data());
      } else {
        console.log("File deosnt exist in DB");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DocId && GetFileData();
  }, [DocId]);

  return <div><DownloadFile Data={Data}/></div>;
};

export default page;
