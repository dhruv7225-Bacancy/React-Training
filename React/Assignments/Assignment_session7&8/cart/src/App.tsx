import { useEffect, useState } from 'react'
import Product from './components/Product';
import { useDebounce } from './Hooks/useDebounce';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import type { CartItemType, ProductType } from './types';
import { useCart } from './Hooks/useCart';

const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>("");
  // const [limit, setLimit] = useState<number>(10);
  const limit=10
  const [skip, setSkip] = useState<number>(0);
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortby] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);


  const { cart, setCart, inc, dec, addToCart } = useCart()
  const BASE_URL = "https://dummyjson.com/products"

  useEffect(() => {

    fetch(BASE_URL + "/category-list")
      .then(res => res.json())
      .then(data => setCategories(data))

  }, [])
  const debouncedSearch = useDebounce(search, 500)

  function setUrl() {
    let url = BASE_URL
    if (debouncedSearch) {
      url = url.concat("/search?q=" + debouncedSearch)
    }
    else if (category) {

      url = url.concat("/category/" + category)

    }

    const params = new URLSearchParams();

    params.append("limit", String(limit))
    params.append("skip", String(skip))

    if (sortBy) {
      params.append("sortBy", sortBy)
    }
    if (order) {
      params.append("order", order)
    }

    return debouncedSearch ? `${url}&${params.toString()}` : `${url}?${params.toString()}`
  }

  const url = setUrl()
  console.log(url)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })

  }, [url])

  return (
    <div className='main'>
      <div><Navbar /></div>
      <div className='home'>
        <div className='left-pannel'>
          <div className='search-pannel'>
            <div>
              <label htmlFor="">Category: </label>
              <select value={category} onChange={(e) => {
                setCategory(e.target.value)
                setSkip(0)
              }}>
                <option value="">Select Category</option>
                {
                  categories && categories.map(c => (<option key={c} value={c}>{c}</option>))
                }
              </select>
            </div>
            <div>
              <label htmlFor="">Search:</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
              <label htmlFor="">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortby(e.target.value);
                  setSkip(0);
                }}
              >
                <option value="">Sort By</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Order By: </label>
              <select
                value={order}
                onChange={(e) => {
                  setOrder(e.target.value)
                  setSkip(0)
                }}
              >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>


          </div>
          <div className='products'>
            {
              products && products.map(product => {
                const present = cart.find((item:CartItemType) => item.id === product.id); 
                return <Product 
                          key={product.id} 
                          id={product.id} 
                          image={product.images[0]} 
                          title={product.title} 
                          price={product.price} 
                          rating={product.rating} 
                          isAddedToCart={present} 
                          inc={inc} 
                          dec={dec} 
                          addToCart={addToCart} />
              })
            }
          </div>
          <div className='page-buttons'>
            <button disabled={skip === 0} onClick={() => setSkip(prev => prev - limit)}>prev</button>
            <button disabled={products.length < limit} onClick={() => setSkip(prev => prev + limit)}>next</button>
          </div>
        </div>
        <div className='right-pannel'>
          <div className='cart'>
            {
              cart.map((cartItem:CartItemType) =>
                <CartItem
                  key={cartItem.id}
                  {...cartItem}
                  inc={inc}
                  dec={dec}

                />)
            }
          </div>
          <div className='cart-buttons'>
            <p className='price'>Price: {cart.reduce((acc:number, obj:CartItemType) => {
              acc += obj.price * obj.quantity
              return acc
            }, Number(0))}</p>
            <button
              onClick={() => setCart([])}
            >Checkout</button>
            <button onClick={() => {
              setCart([])
            }}>Clear Cart</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App