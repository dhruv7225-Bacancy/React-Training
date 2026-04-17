import React from 'react'
import type { CartItemType } from '../types'
import { useDispatch } from 'react-redux';
import { dec, inc } from '../SliceWithTLK/CartSlice';
// import { dec, inc } from '../Store/actionCreators';

const CartItem = React.memo(({id,title,price,quantity}:CartItemType) => {
        const dispatch=useDispatch();

    console.log("cart",id);
    
    // const {id,title,price,quantity}=item
  return (
    <div style={{width:"500px",margin:"20px",border:"2px solid black"}}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <button onClick={()=>dispatch(inc(id))}>+</button>
      <button onClick={()=>dispatch(dec(id))}>-</button>
    </div>
  )
})

export default CartItem
