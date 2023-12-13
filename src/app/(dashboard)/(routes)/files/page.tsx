"use client";
import { getFirestore } from "firebase/firestore";
import React, { Suspense, useEffect, useState } from "react";
import { app } from "../../../../../Firebase.Config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import {
  FileNameLogic,
  FileSizeLogic,
  FileTypeLogic,
} from "@/utils/CommonLogic";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, Eye, EyeOff } from "lucide-react";
import Loading from "./loading";
import Alert from "../upload/_components/Alert";
import FileList from "./_components/FileList";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const db = getFirestore(app);
  const { user } = useUser();
  const [Nodocs, setNodocs] = useState();
  const [Data, setData] = useState([]);
  const [Showpas, setShowpas] = useState("");
  let UserEmail = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    UserEmail && FetchData();
  }, [user]);

  const FetchData = async () => {
    try {
      const q = query(
        collection(db, "UploadedFiles"),
        where("userEmail", "==", UserEmail)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return setNodocs(<Alert msg={"No Documents found!"} color={"black"} />);
      }
      let Files = [];
      querySnapshot.forEach((doc) => {
        Files.push(doc.data());
      });
      setData(Files);
    } catch (error) {
      toast.error('Unable to fetch Files')
    }
  };

  return (
    <div>
      <FileList
        Data={Data}
        Nodocs={Nodocs}
        setShowpas={setShowpas}
        Showpas={Showpas}
        router={router}
      />
    </div>
  );
};

export default page;
