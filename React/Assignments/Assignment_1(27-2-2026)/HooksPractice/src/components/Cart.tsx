import React, { useReducer, useState } from 'react'

type Cart = item & {
    quantity: number
}

type item = {
    id: number,
    name: string,
    price: number
}

type ActionType={
    type:"addItem"|"removeItem"|"incItem"|"decItem"|"clear"
    payload:{id:number}|Cart
}
const ShoppingCart = () => {

    const initstate: Cart[] = []
    function reducer(cart: Cart[], action:ActionType) {
        switch (action.type) {
            case "addItem":
                if("name" in action.payload ){
                    const { id, name, price } = action.payload
                    return [...cart, { id: id, name: name, price: price, quantity: 1 }]
                }
                break;
            case "removeItem":
                cart = cart.filter(item => item.id !== action.payload.id)
                return cart;
            case "incItem":

                return cart.map(item => 
                    {
                        if(action.payload.id === item.id){
                            return {...item,quantity:item.quantity+1}
                        }
                        return item
                    });

            case "decItem":
                return cart.map(item => {
                    if(item.id === action.payload.id){
                        return {...item,quantity:item.quantity-1}
                    }
                    return item
                })
                .filter(item=>item.quantity!==0)
                
            case "clear":
                return [];
        }
    }
    const [cart, dispatch] = useReducer(reducer, initstate)
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    function add() {
        if (cart.find(item => item.id === id)) {
            dispatch({ type: "incItem", payload: { id: id } })
        }
        else {
            dispatch({ type: "addItem", payload: { id: id, name: name, price: price, quantity: 1 } })
        }
    }

    function remove() {
        dispatch({ type: "removeItem", payload: { id: id } })
    }

    function dec() {
        dispatch({ type: "decItem", payload: { id: id } })
    }


    return (
        <div>
            <p>add item</p>

            <div className='flex flex-col gap-2 '>

                <input
                    type="number"
                    className='border-2'
                    name='id'
                    id='id'
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                />
                <input
                    type="text"
                    className='border-2'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className='border-2'
                    name='price'
                    id='price'
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />

                <button
                    className='border-2 rounded-2xl p-2'
                    onClick={add}
                >
                    add
                </button>
            </div>

            <p>remove item</p>
            <div className='flex flex-col gap-2 '>

                <input
                    type="number"
                    className='border-2'
                    name='id'
                    id='id'
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                />

                <button
                    className='border-2 rounded-2xl p-2'
                    onClick={remove}
                >
                    remove
                </button>
                <button
                    className='border-2 rounded-2xl p-2'
                    onClick={dec}
                >
                    dec
                </button>
            </div>



            <h2>Cart-items</h2>
            <p>id name price quantity</p>
            {
                cart.map(item => (

                    <div className='flex gap-3'>
                        <div> {item.id}</div>
                        <div> {item.name}</div>
                        <div> {item.price}</div>
                        <div> {item.quantity}</div>
                        <div>{}</div>
                    </div>

                ))
            }
            <p>Total cost:{
                cart.map(item=>item.price*item.quantity).reduce((acc,sum)=>{
                    return acc+sum
                },0)
                }</p>
        </div>
    )
}

export default ShoppingCart
