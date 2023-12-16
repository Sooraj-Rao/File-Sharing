"use client";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../../../../Firebase.Config";
import ViewFile from "../_components/ViewFile";
import toast from "react-hot-toast";

const Page = ({ params }) => {
  const [Data, setData] = useState();
  let DocId = params?.id;
  const db = getFirestore(app);

  const GetFileData = async () => {
    try {
      const docRef = doc(db, "UploadedFiles", DocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        toast.error("File deosnt exist!");
      }
    } catch (error) {
      toast.error('Unable to fetch file details!')
    }
  };

  useEffect(() => {
    DocId && GetFileData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SavePassword = async (password) => {
    try {
      const docRef = doc(db, "UploadedFiles", DocId);
      const res = await updateDoc(docRef, {
        password: password,
      });
      toast.success("Password Saved");
    } catch (error) {
      toast.error("Unable to save password");
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

export default Page;
