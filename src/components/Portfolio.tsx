import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div className="flex items-center max-w-4xl mx-auto leading-8" id="about">
        <div className="px-10 mt-10">
          <h1 className="text-center text-4xl mb-10">Portfolio</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full">
            <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-60 h-40 rounded-t-md"
                />
              </div>
              <div className="flex justify-between px-5 text-white">
                <button className="p-4 hover:scale-105 duration-200 text-black">
                  <a href="https://google.com" target="_blank">Demo</a>
                </button>
                <button className="p-4 hover:scale-105 duration-200 text-black">
                  <a href="https://google.com" target="_blank">Code</a>
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-60 h-40 rounded-t-md"
                />
              </div>
              <div className="flex justify-between px-5 text-white">
                <button className="p-4 hover:scale-105 duration-200 text-black">
                  <a href="https://google.com" target="_blank">Demo</a>
                </button>
                <button className="p-4 hover:scale-105 duration-200 text-black">
                  <a href="https://google.com" target="_blank">Code</a>
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-60 h-40 rounded-t-md"
                />
              </div>
              <div className="flex justify-between px-5 text-white">
                <button className="p-4 hover:scale-105 duration-200 text-black">
                  <a href="https://google.com" target="_blank">Demo</a>
                </button>
                <button className="p-4 hover:scale-105 duration-200 text-black">
                  <a href="https://google.com" target="_blank">Code</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
