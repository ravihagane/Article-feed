import React from "react";

export default function Articles(props) {
  return (
    <div className=" bg-green-50  rounded-xl md:w-1/2 w-10/12 flex flex-col justify-center align-middle items-center mx-auto shadow-xl mt-5 mb-5">
      <div>
        <img
          src={props.src}
          alt="pic"
          className="md:w-1/2  md:h-1/2 self-center px-4 mx-auto mt-5"
        ></img>
      </div>
      <h1 className=" text-2xl font-bold mb-3 self-start md:self-center text-yellow-600 mx-auto">
        {props.title}
      </h1>
      <div className=" font-bold mb-3 self-start mx-3">
        Category : {props.category}
      </div>
      <div className="mb-3">
        <p>{props.description}</p>
      </div>

      <a
        href={props.link}
        target="_blanc"
        className=" bg-blue-500 w-2/4 py-3 my-3  shadow-inner font-semibold  hover:bg-black hover:text-red-50 hover:shadow-xl"
      >
        VIEW
      </a>
    </div>
  );
}
