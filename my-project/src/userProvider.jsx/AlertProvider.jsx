import { useEffect, useState } from "react";
import { AlertContext } from "../Context";


function AlertProvider({children}){
    const [alert,setAlert]=useState();

    const RemoveAlert=()=>{
        setAlert(undefined);
     }
useEffect(()=>{
if(alert){
    const timerAlert=setTimeout(RemoveAlert, 3 * 1000);
    return function(){
        clearTimeout(timerAlert);
    }
}
},[alert])

    return <AlertContext.Provider value={{alert,setAlert,RemoveAlert}}>{children}</AlertContext.Provider>
}
export default AlertProvider;