import React from "react"; 
import CartList from "./CartList";
import CartRow from "./CartRow";
import allData from "./DummyData";

function Test(){
return(    
<div>
<CartList products={allData} cart={{1:2,2:4,4:3}}/>
</div>
);
}
export default Test;