import React from "react";

import Header from "../component/header";
import "./About.css";

export default function About() {
  return (
    <div className=" min-h-screen">
      <Header title="About me" />
      <div className=" md:flex md:flex-row">
        <div className=" bg-green-400 image w-2/3 h-2/3 mt-4 mx-auto md:w-1/2 md:h-1/2 md:border-r-2 border-black">
          <img
            src="DP1.png"
            className=" w-1/2 h-1/2 mx-auto rounded-full"
            alt="pic"
          ></img>
        </div>

        <div className="my-auto text-xl  px-3 border-black">
          I am{" "}
          <span className="text-yellow-600 font-bold ">Ravi teja reddy</span> &
        </div>
        <div className=" my-auto mx-4 text-xl">
          I am a{" "}
          <span className=" font-bold text-yellow-600">
            Full stack Developer
          </span>
          <p className=" border-black border-t-2 ">
            I am a passionate learner and open to all possibilities
          </p>
        </div>
      </div>
      <div>
        <button className="  bg-blue-400 px-6 py-3 sm:mx-auto mt-5 hover:bg-black hover:text-green-50">
          Hire Me
        </button>
      </div>
    </div>
  );
}
