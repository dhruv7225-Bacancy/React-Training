import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useDebounce } from './useDebounce';

const App = () => {
  const [products, setProducts] = useState<object[]>([]);
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);
  const [order, setOrder] = useState("asc");
  const [sortBy, setSortby] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

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

    params.append("limit", limit)
    params.append("skip", skip)

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
    <>
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
              onChange={(e)=>{
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
          products && products.map(product => <Product key={product.id} id={product.id} image={product.images[0]} title={product.title} price={product.price} rating={product.rating} />)
        }
      </div>
      <div className='page-buttons'>
        {/* {[...Array(20)].map((_,n)=><button key={n} onClick={()=>{setSkip(n*limit)}}>{n}</button>)} */}
        <button disabled={skip === 0} onClick={() => setSkip(prev => prev - limit)}>prev</button>
        <button disabled={products.length < limit} onClick={() => setSkip(prev => prev + limit)}>next</button>
      </div>
    </>
  )
}

export default App
