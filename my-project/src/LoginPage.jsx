import {withFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { InputLogin } from "./Input";
import { Link} from "react-router-dom";
import { withUser } from "./withProvider";

function callLogApi(values,bag){
  console.log("bag",bag);
  console.log("Send Api data",values.email,values.password);
  
  axios.post("https://myeasykart.codeyogi.io/login",{
    email: values.email,
    password:values.password
    
  }).then(function(respons){
    const {user,token}=respons.data;    
    localStorage.setItem("token",token);
    bag.props.setUser(user);
  }).catch(()=>{
   
  })
}



const schema=Yup.object().shape({
  email:Yup.string().email().required(),
  password:Yup.string().min(8).required(),
});
const initialValues={
      email:"",
      password:"",
}

    function LoginPage({handleBlur,handleChange,handleSubmit,values,errors,touched,setUser}){
   
    
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
<form 
onSubmit={handleSubmit} 
className="flex flex-col w-80 p-5 rounded-md shadow-md bg-white" >
    <h1 className="text-2xl font-bold self-center mb-4">Login</h1>

    <InputLogin
    label="Email Address" 
    id="Email Address"
    onChange={handleChange}
    value={values.email}
    onBlur={handleBlur}
    type="Email Address" 
    name="email"
    autoComplete="current-Email"
    required
    placeholder="Email Address"
   touched={touched.email}
   errors={errors.email}
    />
    <InputLogin label="Password" id="password"
    onChange={handleChange}
     value={values.password}
     onBlur={handleBlur}
    type="password" 
    name="password"
    autoComplete="current-password"
    required
    placeholder="Password"
   touched={touched.password}
   errors={errors.password}
    />
    
   
 <div>

<button  className="border bg-indigo-500 mt-4 rounded-md ml-48 px-2 text-center">Login</button>
 {/* <button  className="border bg-indigo-500 mt-4 rounded-md ml-48 px-3 text-center" onClick={resetForm}>Reset</button>  */}

 </div>
<Link to="/signup " className="text-sm ml-8 mt-6" >Need an account? SIGN UP</Link>
</form>
</div>
);}
const Formik=withFormik({
  validationSchema:schema,
  initialValues:initialValues,
  handleSubmit:callLogApi,
})(LoginPage);


export default withUser(Formik);



