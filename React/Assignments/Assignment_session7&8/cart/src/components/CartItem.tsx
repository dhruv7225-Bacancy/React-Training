import React from 'react'
type props={
    id:number,
    title:string,
    price:number,
    quantity:number,
    inc:(id:number)=>void,
    dec:(id:number)=>void
}
const CartItem = React.memo(({ id, title, price, quantity,inc ,dec }:props) => {
    
    return (
        <div className='cart-item'>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Quantity:{quantity}</p>

            <div className='inc-dec-button'>
                <button onClick={()=>inc(id)}>+</button>
            <button onClick={()=>dec(id)}>-</button>
            </div>
        </div>
    )
})

export default CartItem
