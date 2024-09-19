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
import Alert from './Alert';
import AlertProvider from './userProvider.jsx/AlertProvider';
import LoginPage from './LoginPage';

function App() {

  return (
    <div>
      {/* <Test/> */}
      <UserProvider>
      <CartProvider>
        <AlertProvider>
        <Alert />
      <UserRouter>
        < NavBar />
        </UserRouter>
        
      <div className="p-4 bg-gray-200 " >
        <div className="h-full  pt-4 bg-white">
          <Routes>
            <Route path="/" element={<UserRouter><ProductListPage /></UserRouter>} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NoFound />} />
            <Route path="/product" element={<CartPage />} />
            <Route path="/login" element={<AuthRouter ><LoginPage  /></AuthRouter>} />
            <Route path="/signup" element= {<AuthRouter><SignupPage /></AuthRouter>}/>
          </Routes>
        </div>
      </div>
      <Footer />
      </AlertProvider>
      </CartProvider>
      </UserProvider> 
    </div>
  );
}

export default App;
