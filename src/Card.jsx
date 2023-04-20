import React from "react";
import logo from "./logo.svg";
function Card(props) {
  return (
    <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl  ">
      <img
        src={props.Image}
        alt="Not Found"
        className="rounded-t-lg w-full h-[50%] border"
      />

      <div className="p-6">
        <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
          {props.FirstName + " " + props.LastName}
        </h1>
        <p>{props.Email}</p>
      </div>
    </div>
  );
}
export default Card;
