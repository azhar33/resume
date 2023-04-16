import React from 'react'

export default function Skills() {
  return (
    <div className="flex items-center max-w-4xl mx-auto leading-8 mb-9" id="about">
        <div className="px-10 mt-10">
          <h1 className="text-center text-4xl mb-10">Skills</h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-24 mx-auto w-full">
            <div className="shadow-md shadow-gray-600 hover:scale-105 duration-75">
              <div className='p-5'>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-20 h-20 rounded-t-md  hover:translate-y-2 duration-700"
                />
              </div>
              
            </div>
            <div className="shadow-md shadow-gray-600  duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-20 h-20 rounded-t-md hover:-translate-x-2"
                />
              </div>
              
            </div>
            <div className="shadow-md shadow-gray-600 hover:scale-105 duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-20 h-20 rounded-t-md"
                />
              </div>
              
            </div>
            <div className="shadow-md shadow-gray-600 hover:scale-105 duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-20 h-20 rounded-t-md"
                />
              </div>
              
            </div>
            <div className="shadow-md shadow-gray-600 hover:scale-105 duration-75">
              <div>
                <img
                  src={
                    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-our-PHP-Developers.png"
                  }
                  alt=""
                  className="w-20 h-20 rounded-t-md"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}
