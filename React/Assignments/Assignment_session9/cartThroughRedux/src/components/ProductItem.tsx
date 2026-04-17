import React from 'react'
import { useDispatch } from 'react-redux'
// import { addToCart } from '../Store/actionCreators'
import type { ProductType } from '../types'
import { addToCart } from '../SliceWithTLK/CartSlice';

const ProductItem = React.memo(({id,title,price}:ProductType) => {

    const dispatch=useDispatch();

    // const {id,title,price}=product


    console.log("product",id);
    
    
  return (

    <div style={{width:"500px",margin:"20px",border:"2px solid black"}}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={()=>dispatch(addToCart({id,title,price,quantity:1}))}>add to cart</button>
    </div>
  )
})

export default ProductItem
