import React, { useEffect, useState } from 'react'
import type { CartItemType, CartType, DepType, ProductType } from './types'
import ProductItem from './components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './components/CartItem';

const App = () => {
  const [products, setProducts] = useState<[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [state, setState] = useState<DepType>({
    search: "",
    category: "",
    limit: 10,
    skip: 0,
    sortBy: "",
    order: "asc"
  })

  const cart:CartType = useSelector((state) => state.cart)

  function getUrl(): string {
    let url = "https://dummyjson.com/products"
    if (state?.category) {
      url = `${url}/category/${state.category}`
    }
    else if (state?.search) {
      url = `${url}/search?q=${state.search}`
    }
    const arr = Object.entries(state).slice(2)

    const params = arr.map((param) => param.join("=")).join("&")

    if (state.search) {
      url = `${url}&${params}`
    }
    else {
      url = `${url}?${params}`
    }
    console.log(url);

    return url
  }

  useEffect(() => {
    const url = getUrl()
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setProducts(data.products)
      })

  }, [state])


  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setCategories(data)
      });

  }, [])
  return (
    <div>
      <div>
        <select
          onChange={(e) => {
            setState(prev => ({
              ...prev,
              category: e.target.value
            }))
          }}
        >
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>

        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id='search'
            value={state.search}
            onChange={(e) => {
              setState(prev => ({
                ...prev,
                search: e.target.value
              }))
            }}
          />
        </div>

        <div>
          <select 
          value={state.sortBy}
          onChange={(e) => {
            setState(prev => ({
              ...prev,
              sortBy: e.target.value
            }))
          }}>
            <option value="">Sort By</option>
            <option value="price">price</option>
            <option value="rating">rating</option>
          </select>
          <select 
          value={state.order}
          onChange={(e) => {
            setState(prev => ({
              ...prev,
              order: e.target.value==="asc"?"asc":"desc"
            }))
          }}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>

          
        </div>
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          {
            products.map((product: ProductType) =>
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
              />)
          }
        </div>
        <div>
          <h2>Cart</h2>
          {
            cart.cartItems && cart.cartItems.map((cartItem: CartItemType) =>
              <CartItem
                key={cartItem.id}
                {...cartItem}
              />)
          }
          <h2>TotalPrice:{cart.totalPrice}</h2>
        </div>
      </div>
    </div>
  )
}

export default App
