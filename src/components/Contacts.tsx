import React from "react";

export default function Contacts() {
  return (
    <div className="flex items-between max-w-4xl mx-auto leading-8" id="Contacts">
      <div className=" px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl mb-10">Contact Us</h1>
        <p className="text-center">
          Get in touch with you as soon as possible Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Esse d sww ss
        </p>
        <div>
          <form>
            <div className="my-5">
              <input
              required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none"
                type="text"
                placeholder="your name"
              />
            </div>
            <div className="my-5">
              <input
              required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none"
                type="email"
                placeholder="your email"
              />
            </div>
            <div>
              <input
              required
                
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none"
                type="textarea"
                placeholder="your message"
              />
            </div>
            <button type="submit" className="mx-auto block px-5 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
