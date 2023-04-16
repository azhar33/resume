import React from "react";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function HomeHero() {
  return (
    
      <section className="max-w-4xl mx-auto flex md:flex-row flex-col mt-5">
        {/* left Div */}
        <div className="">
          <h1>I'm a Full Stack Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sunt quae voluptatem aut recusandae, porro, tenetur voluptas tempore
            rem ipsa rerum id. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Temporibus mollitia eaque voluptatem architecto
            repudiandae nobis minus sapiente illum autem eius voluptas laborum
            pariatur doloremque perferendis, quasi ut, tempora quae culpa.
          </p>
          <button className="group flex  items-center mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-4 rounded-full text-white">
            Profile
            <MdOutlineKeyboardArrowRight size={20} className="group-hover:rotate-90 duration-500"/>
          </button>
        </div>
        {/* right div  */}
        <div>
            <img className="md:w-full mx-auto" src="https://www.shutterstock.com/image-vector/illustration-featuring-male-businessman-wearing-600w-234744016.jpg" alt="banner-image" />
        </div>
      </section>
    
  );
}
