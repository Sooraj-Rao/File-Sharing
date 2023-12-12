import React from "react";

const AnimFileList = () => {
  return (
    <div className=" h-[calc(100vh-20%)]">
      <div className="min-w-full bg-red-400 h-96  ">
        <div className=" h-10  ">
          <tr>
            <h1 className="py-3.5 px-4  ">
              <div className="flex items-center gap-x-3"></div>
            </h1>
            <h1 className="px-12 py-3.5  "></h1>
            <h1 className="px-4 py-3.5  "></h1>
            <h1 className="px-4 py-3.5 "></h1>
            <h1 className="px-4 py-3.5 "></h1>
          </tr>
        </div>
        {Array(3)
          .fill("")
          .map((item, i) => {
            return (
              <div key={i} className=" h-10  bg-slate-500  ">
                <div>
                  <div className="px-4 py-4 ">
                    <div className="inline-flex items-center gap-x-3">
                      <div className="flex items-center gap-x-2">
                        <div className=" "></div>

                        <div>
                          <h2 className=""></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-12 py-4 "></div>
                  <h1 className="px-4 py-4 "></h1>
                  <h1 className="px-4 py-4 "></h1>
                  <h1 className="px-4 py-4 "></h1>
                  <h1 className=" py-4 "></h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AnimFileList;
