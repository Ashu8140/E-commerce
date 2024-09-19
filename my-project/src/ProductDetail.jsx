import React from 'react';
import { useEffect, useState } from "react";
import { getProductData } from "./Api";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import NoFound from "./NoFound";
//import NoMatchProduct from "./NoMatchProduct";
import Loading from "./Loading";
import { withCart } from './withProvider';


function ProductDetail({onAddToCard}) {

  const id = +(useParams().id);
  const [product, setProduct]=useState();
  const [loading, setLoading]=useState(true);
  const [count, setCount]=useState(1);
  
  
  useEffect(function() {
    const p = getProductData(id);
    p.then(function(product) {
      setProduct(product);
      setLoading(false);
    });
    
    p.catch(function(error) {
      setLoading(false);  });

    const a=1;
    setCount(a);
    
  }, [id]);

  
  function handleAddToCard(event){
    setCount(+event.target.value);
  }

  
  function onButtonClick(){
    onAddToCard(id,count);
  }

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NoFound />;
  }
  return (
    
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl mt-6">
      <Link className="flex text-xl" to="/"><HiArrowSmLeft className="text-3xl" />Back </Link>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 mt-8"
            src={product.thumbnail}
            alt="Product"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
           {product.title}
          </div>
          <p className="mt-2 text-gray-600">
           {product.description}
          </p>
          <div className="mt-2">
            <div className="text-gray-900 font-bold">{product.price}</div>
          </div>
          <div className="mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="quantity"
            >
              {product.quantity}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type='number' min={1} value={count}  onChange={handleAddToCard}
            />
          </div>
          <div className="mt-4">
            <button  onClick={onButtonClick} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
            <div className="flex justify-between mt-4">
         <div>
           {id > 1 && <Link className="flex text-xl item-center" to={"/products/" + (id - 1)}><HiArrowSmLeft className="text-3xl" />Preious </Link>}
       </div>
         <Link className="flex text-xl item-center" to={"/products/" + (id + 1)}><HiArrowSmRight className="text-3xl" />Next </Link>
       </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withCart(ProductDetail);