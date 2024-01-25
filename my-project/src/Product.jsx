import React from 'react';
import { Link } from 'react-router-dom';

function Product({ thumbnail, category, title, rating, price, id }) {
	return (
		<div className="p-2 max-w-xs rounded-md ">
      <div className=" w-full aspect-square">
			<img class="h-full w-full object-cover " src={thumbnail} />
        </div>
			<h2 class="text-gray-500">{category}</h2>
			<h2 className="text-xl">{title}</h2>
			<h2 class="text-red-500 text-xl">{rating}</h2>
			<h2>{price}</h2> 
			<Link className="text-blue-400 text-xl text-blue"to={'/products/' + id}>
				View Data
			</Link>
		</div>
	);
}

export default Product;