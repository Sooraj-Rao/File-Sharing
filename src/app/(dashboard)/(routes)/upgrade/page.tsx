"use client";
import React, { useState } from "react";
import Cards from "./_components/Cards";
import Contact from "./_components/Contact";

const Page = () => {
  const [contact, setcontact] = useState(false);
  return (
    <div>
      {contact ? (
        <Contact />
      ) : (
        <Cards contact={contact} setContact={setcontact} />
      )}
    </div>
  );
};

export default Page;
