import React, { useState } from 'react';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import { Routes, Route, } from 'react-router-dom';
import NavBar from "./navBar";
import Footer from "./Footer";
import NoFound from './NoFound';
import CartPage from './CartPage';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRoute';
import SignupPage from './SignupPage';
import UserProvider from './UserProvider.jsx/UserProvider';
import CartProvider from './UserProvider.jsx/CartProvider';

function App() {

  return (
    <div>
      <UserProvider>
      <CartProvider>
      <UserRouter>
        < NavBar />
        </UserRouter>
        
      <div className="p-16 bg-gray-200 " >
        <div className="h-full p-16 pt-4 bg-white">
          <Routes>
            <Route path="/" element={<UserRouter><ProductListPage /></UserRouter>} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NoFound />} />
            <Route path="/product" element={<CartPage />} />
            {/* <Route path="/login" element={<AuthRouter ><LoginPage  /></AuthRouter>} /> */}
            <Route path="/login" element= {<AuthRouter><SignupPage /></AuthRouter>}/>
          </Routes>
        </div>
      </div>
      <Footer />
      </CartProvider>
      </UserProvider> 
    </div>
  );
}

export default App;
