"use client";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../../../../Firebase.Config";
import ViewFile from "../_components/ViewFile";
import toast from "react-hot-toast";

const page = ({ params }) => {
  const [Data, setData] = useState();
  const [load, setload] = useState(false);
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
  }, []);

  const SavePassword = async (password) => {
    try {
      setload(true);
      const docRef = doc(db, "UploadedFiles", DocId);
      const res = await updateDoc(docRef, {
        password: password,
      });
      toast.success("Password Saved");
      setload(false);
    } catch (error) {
      console.log(error);
      toast.error("Unable to save password");
      setload(false);
    }
  };

  return (
    <div>
      <div>
        <ViewFile Data={Data} SavePassword={SavePassword} />
      </div>
    </div>
  );
};

export default page;
