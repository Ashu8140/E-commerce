import React from "react";
import Product from "./Product";

function ProductList({ object}) {
  return (
    <div className="flex flex-wrap gap-2">
      
      {object.map(function(item) {
        return (
          <Product
            id={item.id}
            thumbnail={item.thumbnail}
            category={item.category}
            title={item.title}
            price={item.price}
             
            />);
          
      })
      }
    </div>
  );
}
export default ProductList;