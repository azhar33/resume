
'use client';
import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
export default function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <section className="bg-gray-700 text-white">
        <div className="flex justify-between items-center">
          <h1 className="font-autograph m-7">Azhar Haneef</h1>
          <ul className="m-7 md:flex hidden">
            <li className="mx-5 text-2xl hover:scale-150 duration-500">Home</li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              About
            </li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              Portfolio
            </li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              Skills
            </li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              Contact
            </li>
          </ul>
          <div
            className="pr-5 md:hidden z-20"
            onClick={() => {
              setToggle(!toggle);
              console.log(toggle);
            }}
          >
            {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} /> }
          </div>
          {/* overlay menu div */}
          {!toggle?
          <div className=" fixed top-0 left-0 bg-black h-screen w-full flex items-center justify-center">
          <ul className="m-7 md:flex text-white">
            <li className="mx-5 text-2xl hover:scale-150 duration-500">Home</li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              About
            </li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              Portfolio
            </li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              Skills
            </li>
            <li className="mx-5 text-2xl hover:scale-150 duration-500">
              Contact
            </li>
          </ul>
          </div>
          :null}
        </div>
      </section>
    </div>
  );
}
