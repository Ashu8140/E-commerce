import { useField } from "formik";
import {memo} from "react"
import FormikHOC from "./FormikHOC";

function InputSignup({ id, name,label,errors,touched,...rest}){

   
   let borderClass="border-gray-300 focus:border-indigo-500"; 
    if(errors && touched ){
       borderClass ="border-red-500" 
   }
return (
<div>
    <label htmlFor={label} className="sr-only">{label}</label>
      <input 
     id={id} 
     name={name}
     className={"relative block  w-full appearance-none rounded-none border  px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus-within:ring-indigo-500 sm:text-sm mb-6 " + "" + borderClass}
     {...rest}       />
      {touched && errors &&  <div className="text-red-500">{errors}</div>} 
    </div>
)
}
export const FormikInputSignup=FormikHOC(InputSignup);

export default memo(InputSignup);