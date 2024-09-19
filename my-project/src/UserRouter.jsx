import React from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";

const UserRouter=({user,children})=>{
    if(!user){
    return<Navigate to="/signup"/>
    }
    return  children;
}

export default withUser(UserRouter);