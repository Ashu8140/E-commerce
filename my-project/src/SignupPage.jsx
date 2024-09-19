import { useFormik, withFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputSignup from "./InputSignup";
import axios from "axios";
import { withUser } from "./withProvider";

function callLogApi(values,bag){
// console.log("Send Api data",values.name,values.email,values.password);
axios.post("https://myeasykart.codeyogi.io/signup",{
         fullName:values.name,
         email:values.email,
         password:values.password,

}).then((respose)=>{
     const {user,token}=respose.data;
     localStorage.setItem("token",token);
     bag.props.setUser(user)
    }).catch(()=>{
    console.log("envalid crential");
})
}
 
    const schema=Yup.object().shape({
        email:Yup.string().email().required(),
        password:Yup.string().min(8).required(),
        name:Yup.string().min(2).required(),
    });

       
       const  initialValues={
             name:"",
            email:"",
            password:"", }


function SignupPage({handleBlur,handleChange,handleSubmit,errors,touched,values,resetForm}){


return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
<form 
onSubmit={handleSubmit}

className="flex flex-col w-80 p-5 rounded-md shadow-md bg-white" >
    <h1 className="text-2xl font-bold self-center mb-4">SignUp Page</h1>

    <InputSignup
    label="name" 
    id="name"
    onChange={handleChange}
     value={values.name}
     onBlur={handleBlur}
    type="name" 
    name="name"
    autoComplete="name"
    required
    placeholder="Name"
   touched={touched.name}
   errors={errors.name}
    />
    <InputSignup label="Email Address" id="Email Address"
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
    <InputSignup label="Password" id="password"
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

<button  className="border bg-indigo-500 mt-4 rounded-md ml-48 px-2 text-center">Signup</button>
 <button  className="border bg-indigo-500 mt-4 rounded-md ml-48 px-3 text-center" onClick={resetForm}>Reset</button> 

 </div>
<a href="" className="text-sm ml-8 mt-6" >Need an account? SIGN UP</a>
</form>
</div>
);}

const myHOc=withFormik({
    validationSchema:schema,
    initialValues:initialValues,
    handleSubmit:callLogApi,
})(SignupPage);
export default withUser(myHOc);

