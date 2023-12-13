"use client";
import React, { useEffect, useState } from "react";
import FileDetails from "./FileDetails";

const ViewFile = ({ Data, SavePassword }) => {
  const [Checked, setChecked] = useState(() => {
    if (Data && Data.password) return true;
    return false;
  });
  const [Copied, setCopied] = useState(false);
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [src, setSrc] = useState('/File.png');

  useEffect(() => {
    Data?.password && setChecked(true);
    Data?.password && setPassword(Data.password);
    Data?.fileUrl && setSrc(Data?.fileUrl);
  }, [Data]);

  Copied &&
    setTimeout(() => {
      setCopied(false);
    }, 2000);

  return (
    <FileDetails
      src={src}
      setSrc={setSrc}
      Data={Data}
      Copied={Copied}
      Checked={Checked}
      setChecked={setChecked}
      password={password}
      setPassword={setPassword}
      SavePassword={SavePassword}
      setEmail={setEmail}
      Email={Email}
      setCopied={setCopied}
    />
  );
};

export default ViewFile;
