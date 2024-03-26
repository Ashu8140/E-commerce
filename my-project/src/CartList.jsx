import React, { useEffect, useState } from "react"; 
import CartRow from "./CartRow";

function CartList({products,cart,updateCart}){

  const [localCart, setLocalCart]=useState(cart);
  
  useEffect(function(){
  setLocalCart(cart);
  },
  [cart]);

 function handleQuantityChange( productId,newValue){ 
   const newLocalCart={...localCart,[productId]:newValue};
   setLocalCart(newLocalCart);
}

function handleUpdateCartClick(){
updateCart(localCart);
}

function handleRemove(productIds){

 const  newCart={...cart};
  delete newCart[productIds];
  updateCart(newCart);
 }

return(    
<div>
    <div className="flex px-4 py-2 mx-10 mt-10 space-x-4 bg-gray-100 border border-gray-300">
        <span className="ml-12 font-bold grow">Product</span>
        <span className="w-16 font-bold">Price</span>
        <span className="w-24 font-bold">Quantity</span>
        <span className="w-24 font-bold">Subtotal</span>
    </div>
{products.map(function(p){
return <CartRow
  key={p.id}
   products={p} 
   handleRemove={handleRemove} 
   quantity={localCart[p.id]} 
   onQuantityChange={handleQuantityChange}
   
   />
})
}
<div className="flex justify-end py-3 mx-10 border border-gray-300">
     <button onClick={handleUpdateCartClick} className="px-4 py-2 mr-4 text-lg text-white bg-red-500 border rounded-md">Update Cart</button> </div>  
</div>
);
}
export default CartList;