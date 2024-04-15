import React from "react";
import { withAlert } from "./withProvider";
import { HiOutlineXCircle } from "react-icons/hi";
import { HiOutlineCheckCircle } from "react-icons/hi";


const themeMap={
    succes:{
        color: "bg-green-400",
        Icon: HiOutlineCheckCircle , 
    },
    error:{
        color:"bg-red-500",
        Icon:HiOutlineXCircle,

    }
}
function Alert({alert,RemoveAlert}){
  if(!alert){
   return;
  }
  const {type,message}=alert;
const {Icon,color}=themeMap[type];

    return(
    <div>

<div id="alert-1" class={"flex items-center p-4 mb-4 text-blue-800 rounded-lg dark:text-blue-400" + color } role="alert">
  <Icon className={"flex-shrink-0 w-4 h-4 text-xl" + 
  color}/>
  <span className="sr-only">Info</span>
  <div className="ms-3 text-sm font-medium"><span className="font-bold text-xl">{type}</span> <span className="text-xl mr-2">:</span>
   {message}
  </div>


    <button onClick={RemoveAlert} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
      <span className="sr-only">Close</span>
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
  </button>
</div>
</div>

  
    );
}
export default withAlert(Alert);