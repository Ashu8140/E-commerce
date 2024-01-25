import React from 'react';
import { useEffect, useState } from "react";
import { getProductData } from "./Api";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import NoFound from "./NoFound";
//import NoMatchProduct from "./NoMatchProduct";
import Loading from "./Loading";


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
    <div>
      <div className="flex max-w-2xl gap-8 p-6 pb-16 bg-gray-100 border-2 border-solid ">

        <div>
          <Link className="flex text-xl" to="/"><HiArrowSmLeft className="text-3xl" />Back </Link>
          <img className="h-full max-w-full "  src={product.thumbnail} />
        </div>
        <div className="mt-12">
          <h1 className="text-2xl">{product.title}</h1>
          <h1 className="mt-4 text-xl font-bold">{product.prise}</h1>
          <p className="mt-2">{product.description}</p>
          
           <input onChange={handleAddToCard} className="w-10 py-1 text-center border-2 border-black rounded-md " type="number" min={1} value={count}  ></input>
          
          <button onClick={onButtonClick} className="px-8 py-1 mt-6 ml-1 bg-red-400 border-2 border-black rounded-md">Add to Card</button>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          {id > 1 && <Link className="flex text-xl item-center" to={"/products/" + (id - 1)}><HiArrowSmLeft className="text-3xl" />Preious </Link>}
        </div>
        <Link className="flex text-xl item-center" to={"/products/" + (id + 1)}><HiArrowSmRight className="text-3xl" />Next </Link>
      </div>
    </div>
  );
}
export default ProductDetail;