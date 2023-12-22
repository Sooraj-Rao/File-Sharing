"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [Input, setInput] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      Input.email.length < 10 ||
      Input.msg.length < 10 ||
      Input.name.length < 5
    ) {
      return toast.error("Fill valid info");
    }
    setTimeout(() => {
      toast.success("Message Sent!");
    }, 2000);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  return (
    <section className="h-[calc(100vh-64px)] bg-white  lg:flex">
      <div className="flex flex-col justify-center w-full p-8 lg:bg-gray-100 lg:px-12 xl:px-32 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-500 ">We will reply you within an hour!</p>
      </div>

      <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
        <form>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm text-gray-600 ">
                Full Name
              </label>
              <input
                required
                type="text"
                value={Input.name}
                onChange={handleChange}
                name="name"
                placeholder="John Doe"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm text-gray-600 ">
                Email address
              </label>
              <input
                name="email"
                value={Input.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600 ">Message</label>
            <textarea
              required
              value={Input.msg}
              onChange={handleChange}
              name="msg"
              className="block resize-none w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-slate-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            get in touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
