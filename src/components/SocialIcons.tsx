import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export const SocialIcons = () => {
  return (
    <div>
      <Link href={"https://linkedin.com"} target="_blank">
        <div className="ml-[-85px] hover:ml-0 duration-200 flex items-center  text-lg gap-2 fixed text-white bg-gray-600 top-[30vh] w-32 py-2 p-3 rounded-r-lg">
          LinkedIn
          <FaLinkedin size={30}  />
        </div>
      </Link>
      <Link href={"https://github.com"} target="_blank">
        <div className="ml-[-85px] hover:ml-0 duration-200 flex justify-between  text-lg gap-2 fixed text-white bg-gray-600 top-[38vh] w-32 py-2 p-3 rounded-r-lg">
          Github
          <FaGithubSquare size={30}/>
        </div>
      </Link>
    </div>
  );
};
