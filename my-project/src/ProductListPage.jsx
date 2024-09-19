import React, { useState, useEffect, createContext } from 'react';
import ProductList from './ProductList';
import NoMatchProduct from './NoMatchProduct';
import { getProductList } from './Api';
import Loading from "./Loading";
import { Navigate } from 'react-router-dom';
import { withUser } from './withProvider';

function ProductListPage({user}) {

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(function() {
    const xyz = getProductList();
    xyz.then(function(products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);
  
  
  let data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseProduct = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseProduct)!= -1;
  });
  

  if (sort == 'price') {
   data.sort(function(x, y) {
      return x.price - y.price;
      
    });
  } else if (sort == 'name') {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleChangeQuery(event) {
    setQuery(event.target.value);
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  
  if (loading) {
    return <Loading />;
  }
 if(!user){
  return <Navigate to="/login"/>
 }
  return (
    <div>
      <div className="gap-2 mt-8">
        <input
          value={query}
          className="border-2 ml-2 border-gray-300 py-1 text-xl bg-gray-50 mb-6"
          placeholder="Search"
          onChange={handleChangeQuery}
        />

        <select
          onChange={handleSortChange}
          value={sort}
          className="border-2 ml-2 border-gray-300 bg-gray-50 mb-6 py-1 px-9  text-xl" >
          <option value="default"> Default short</option>
          <option value="name">Short by name</option>
          <option value="prise">Short by prise</option>
        </select>
      </div>

      {data.length > 0 && <ProductList object={data}  />}
      {data.length == 0 && <NoMatchProduct />}
    </div>
  );
}

export default withUser(ProductListPage);
