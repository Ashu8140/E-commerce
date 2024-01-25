import React from "react";
import { useEffect } from "react";
import {getProductData} from "./Api";
import { useState } from "react";
import Loading from "./Loading";
import CartList from "./CartList";

function cartPage({cart,updateCart}){  

 const [loading,setLoading]=useState(true);
  const [products, setProducts]=useState([]);
  const productId= Object.keys(cart);

   useEffect(function(){
   setLoading(false);
    const myProductPromises=productId.map(function(id){
      return getProductData(id);
    });

    Promise.all(myProductPromises).then(function(product){
      setProducts(product);
   });
    },[cart]);

  
   if (loading){
     return <Loading />;
  }
   
  return(
    <div>

      <CartList products={products}  cart={cart} updateCart={updateCart} />
     
    </div>
    ); 
     }
export default cartPage;