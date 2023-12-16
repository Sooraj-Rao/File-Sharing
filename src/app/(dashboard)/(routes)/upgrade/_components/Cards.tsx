import React from "react";
import Contact from "./Contact";

const Cards = ({ contact, setContact }:any) => {
    console.log(contact);
    
  return (
    <div className="bg-white ">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-slate-100 border-2 border-gray-200 rounded-lg lg:mx-4  ">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 ">
                Casual
              </h2>
            </div>

            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase">
                Free
              </span>
            </div>

            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 ">
                Up to 5 file upload for a month{" "}
              </li>

              <li className="text-gray-500 ">Maximim File size 10 MB</li>

              <li className="text-gray-500 ">Limited storage</li>
            </ul>
            <p className=" text-gray-500">Current Plan</p>
            <button
              disabled
              className="inline-flex disabled:bg-gray-500 disabled:cursor-not-allowed items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Start free
            </button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4  ">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 ">
                Professional
              </h2>
            </div>

            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase ">
                $5
              </span>

              <span className="text-gray-500 ">/month</span>
            </div>

            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 ">Up to 100 file upload a month</li>

              <li className="text-gray-500 ">Maximum file size 500 MB</li>

              <li className="text-gray-500 ">10Gb of storage</li>

              <li className="text-gray-500 ">24 x 7 Support</li>
            </ul>

            <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Start free trial
            </button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4  ">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 ">
                Expert
              </h2>
            </div>

            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase ">
                $12
              </span>

              <span className="text-gray-500 ">/month</span>
            </div>

            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 ">Unlimited file uploads</li>

              <li className="text-gray-500 ">Maximum file size 2 GB</li>

              <li className="text-gray-500 ">Unlimited storage</li>

              <li className="text-gray-500 ">Unlock AI tools</li>

              <li className="text-gray-500 ">24x7 Support</li>
            </ul>

            <button
              onClick={() => setContact(true)}
              className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
