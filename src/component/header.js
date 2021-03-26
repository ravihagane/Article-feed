import React from "react";
import Navigation from "./navigation";

export default function header(props) {
  return (
    <header
      className={`bg-yellow-300 border-b-2 border-gray-400 text-2xl flex  justify-between items-center p-5`}
    >
      <span className="font-bold ">{props.title}</span>
      <Navigation />
    </header>
  );
}
