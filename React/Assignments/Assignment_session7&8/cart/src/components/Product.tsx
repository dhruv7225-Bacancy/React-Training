import '../App.css'
import React from 'react';
import type { CartItemType } from '../types';

type props={
  id:number,
  image:string,
  title:string,
  price:number,
  rating:number,
  isAddedToCart:CartItemType|undefined,
  inc:(id:number)=>void,
  dec:(id:number)=>void,
  addToCart:(id:number,title:string,price:number)=>void
}
const Product = React.memo(({ id, image, title, price, rating,isAddedToCart ,inc, dec,addToCart}:props) => {

  console.log("product item");
  
  return (
    <div className='product-card'>
      <p>{id}</p>
      <img src={image} alt="No image" width={100} height={100} />
      <p>{title}</p>
      <p>Price: {price}</p>
      <p>Ratings: {rating}</p>

      { !isAddedToCart&& <button onClick={()=>addToCart(id,title,price)}>add to cart</button>}
      {isAddedToCart && <div className='product-buttons'>
        <button onClick={()=>inc(id)}>+</button>
        <p>{isAddedToCart.quantity}</p>
        <button onClick={()=>dec(id)}>-</button>
      </div>}
    </div>
  )
})

export default Product