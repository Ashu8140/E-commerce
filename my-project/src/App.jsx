import React, { useState } from 'react';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import { Routes, Route, } from 'react-router-dom';
import NavBar from "./navBar";
import Footer from "./Footer";
import NoFound from './NoFound';
import CartPage from './CartPage';
import Login from './LoginPage';
import Dashboard from "./Dashboard";
import { object } from 'yup';

function App() {

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
   
  const handleAddToCard = (productId, count) => {
  
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

  return (
    <div>
      < NavBar productCount={totalCount} />
      <div className="p-16 bg-gray-200 " >
        <div className="h-full p-16 pt-4 bg-white">
          <Routes>

            <Route path="/" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetail onAddToCard={handleAddToCard} />} />
            <Route path="*" element={<NoFound />} />
            <Route path="/product" element={<CartPage cart={cart} updateCart={updateCart} />} />
          
            <Route path="/product/Login" element={<Login />} />
         


          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
