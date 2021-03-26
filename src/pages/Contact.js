import React from "react";
import Header from "../component/header";

export default function Contact() {
  return (
    <div>
      <Header title="Contact Me" />
      <div>
        <span className=" font-extrabold text-xl border-b-2 border-black">
          Social
        </span>
        <div className=" mx-auto w-1/2 h-1/2 flex flex-row justify-between my-7 md:my-16 mt-8">
          <a
            href="https://www.linkedin.com/in/ravireddy1998/"
            className="  w-14 h-1/4"
            target="_blanc"
          >
            <img src="linkedin.svg" alt="Linkedin"></img>
          </a>
          <a
            href="https://github.com/ravihagane"
            className=" w-14 h-1/4  md:my-3 "
            target="_blanc"
          >
            <img src="github.svg" alt="Github"></img>
          </a>
          <a
            href="https://twitter.com/hagane_ravi"
            target="_blanc"
            className="w-14 h-1/4"
          >
            <img src="twitter.svg" alt="Twitter"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
