import { useEffect, useState } from "react";
import { UserContext } from "../Context";
import axios from "axios";

function UserProvider({children}){

    const [user,setUser]= useState();
    const [loading,setLoading]=useState(true);

  const token=localStorage.getItem("token");
  
  useEffect(()=>{
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me",{
        headers:{
          Authorization:token,
        },}
        ).then((respons)=>{
          setUser(respons.data);
          setLoading(false)
        }).catch(function(){
          localStorage.removeItem("token");
          setLoading(false);
        })}},[]);

        function logout() {
          localStorage.removeItem("token");
          setUser(undefined);
        }
    return(<UserContext.Provider value={{user,setUser,logout}}>{children}</UserContext.Provider>);
}
export default UserProvider;