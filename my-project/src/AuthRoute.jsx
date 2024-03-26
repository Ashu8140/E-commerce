import React from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";

const AuthRouter=({user,children})=>{
    console.log("user",user);

    if(user){
   return<Navigate to="/"/>
    }
    return  children;


}
export default withUser(AuthRouter);