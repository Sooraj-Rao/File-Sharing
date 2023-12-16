import {
  FileNameLogic,
  FileSizeLogic,
  FileTypeLogic,
} from "@/utils/CommonLogic";
import { File } from "@/utils/Svg";
import { ArrowRightIcon, Eye, EyeOff } from "lucide-react";
import React from "react";

const FileList = ({ Data, Nodocs, setShowpas, Showpas, router }: any) => {
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
              {Nodocs && (
                <div className=" flex justify-center w-full   ">{Nodocs}</div>
              )}
              {Data?.length != 0 && (
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
                  {Data?.map((item: any, i: any) => {
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
                                  {File}
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

export default FileList;
