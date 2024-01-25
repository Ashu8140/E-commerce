import React from "react";
import { ImSpinner6 } from "react-icons/im";


function Loading(){
  return(
    <div className="flex justify-center">
     <div className=" mt-8 text-5xl font-bold text-indigo-700">{<ImSpinner6 className="animate-spin"/>}</div> 
      <div className="ml-2 mt-8 text-3xl font-bold text-indigo-700" >Loading...</div>
    </div>
  );
}
export default Loading;
