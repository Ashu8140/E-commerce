import React from "react";
import { Link, useParams } from "react-router-dom";

function NoFound(){
  return(
    <div className="h-screen">
      <img className="h-1\3 w-1\3" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000"/>
      <h1 className="text-3xl font-bold   flex justify-center">No data found</h1>
      <Link className="bg-gray-900 flex justify-center rounded-2xl border-2 border-black text-white text-xl py-2 mx-96 mt-4" to="/">Go Home</Link>
    </div>
  );
  
}
export default NoFound;