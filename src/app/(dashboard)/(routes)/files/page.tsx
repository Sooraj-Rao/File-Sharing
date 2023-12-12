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
        console.log(doc.id, " => ", doc.data());
        Files.push(doc.data());
      });
      setData(Files);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container px-4 mx-auto">
      <div className=" flex justify-between px-6 pt-2 gap-3 items-center sm:text-lg text-sm font-medium text-gray-800">
        <span className=" self-start">Here are your Files</span>
        <span className=" flex items-center">
          Total files <ArrowRightIcon className=" h-4" />
          <span className=" text-blue-500 pl-2">{Data?.length}</span>
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto cursor-default  ">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              {Nodocs && <div className=" flex justify-center w-full   ">{Nodocs}</div>}
              {Data.length != 0 && (
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        <div className="flex items-center gap-x-3">
                          <span>File name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        File size
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Upload Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Password
                      </th>
                    </tr>
                  </thead>
                  {Data?.map((item, i) => {
                    let fileSize = FileSizeLogic(item?.fileSize);
                    let fileName = FileNameLogic(item?.fileName);
                    let fileType = FileTypeLogic(item?.fileType);
                    return (
                      <tbody
                        key={item.id}
                        className="bg-white hover:bg-gray-100   "
                      >
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full ">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                                    />
                                  </svg>
                                </div>

                                <div>
                                  <h2 className="font-normal text-gray-800 ">
                                    {item?.fileName && fileName}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                            {item?.fileSize && fileSize}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {item?.fileType && fileType}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {item?.UploadDate &&
                              new Date(item?.UploadDate).toLocaleString()}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {item?.password ? (
                              <span className=" flex ">
                                <input
                                  type={`${
                                    Showpas == item?.id ? "text" : "password"
                                  }`}
                                  value={item.password}
                                  readOnly
                                  className="mr-2 p-1 w-16 focus:border-blue-500 border outline-none "
                                />
                                {Showpas == item?.id ? (
                                  <Eye onClick={() => setShowpas("")} />
                                ) : (
                                  <EyeOff
                                    onClick={() => setShowpas(item?.id)}
                                  />
                                )}
                              </span>
                            ) : (
                              "No Password"
                            )}
                          </td>
                          <td
                            className=" cursor-pointer py-4 text-sm font-normal text-blue-700 hover:text-blue-500 whitespace-nowrap"
                            onClick={() =>
                              router.push("file_preview/" + item.id)
                            }
                          >
                            View
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
