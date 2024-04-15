import { defaultLocale } from "yup";
import { CartContext } from "../Context";
import { useState } from "react";

function CartProvider({children}){

    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart, setCart] = useState(savedData);

    const onAddToCard = (productId, count) => {
      let oldCount = cart[productId] || 0;
      const newCart = { ...cart, [productId]: oldCount + count }; 
      updateCart(newCart);
    };
    
    function updateCart(newCart) {
      setCart(newCart);
      const cartString = JSON.stringify(newCart);
      localStorage.setItem("my-cart", cartString);
    }
    
    const totalCount = Object.keys(cart).reduce(function(output, current) {
      return output + cart[current];
    }, 0);
    
    
    return <CartContext.Provider value={{cart,totalCount,onAddToCard,updateCart}}>{children}</CartContext.Provider>
}
export default CartProvider;