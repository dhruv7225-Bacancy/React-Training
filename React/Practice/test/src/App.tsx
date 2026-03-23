import React, { useEffect, useState } from 'react'
import Product from './Product';
import './App.css'

const App = () => {
  const [search, setSearch] = useState<string>("");//for filter
  const [limit, setLimit] = useState<number>(10);//for page
  const [skip, setSkip] = useState<number>(0);//for page
  const [sortBy, setSortby] = useState<string>("");//for page
  const [order, setOrder] = useState<string>("asc");//for page
  const [category, setCategory] = useState<string>("");//for page
  const [categories, setCategories] = useState<string[]>([]);//for page
  const [showCategory, setShowCategory] = useState<boolean>(false);//for page

  const baseurl = "https://dummyjson.com/products"
  const [url, setUrl] = useState<string>(`${baseurl}?limit=10&skip=0`);


  const [data, setData] = useState<object[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const result = await res.json()


      setData(result.products)

      console.log(data)
    }
    fetchData()
  }, [url])
  console.log(data);

  useEffect(() => {
    if (search !== "") {
      setUrl(`${baseurl}/search?q=${search}`)
    }
  }, [search])

  useEffect(() => {
    setUrl(`${baseurl}?limit=${limit}&skip=${skip}`)
  }, [limit, skip])

  useEffect(() => {
    setUrl(`${baseurl}?sortBy=${sortBy}&order=${order}`)
  }, [sortBy, order])

  useEffect(() => {
    if (category !== "") {
      setUrl(`${baseurl}/category/${category}`)
    }
  }, [category])


  function prev() {
    if (skip !== 0) {
      setSkip(prev => prev - limit)
    }
  }
  function next() {

    setSkip(prev => prev + limit)
  }
  useEffect(() => {

      // setShowCategory(true)
      const res =  fetch(`${baseurl}/category-list`).then(result=>result.json()).then(d=>setCategories(d))
      // const result = await res.json()
      // setCategories(result)
    
  
  },[])
  return (
    <div>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="limit">Limit:</label>
        <input
          id="limit"
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="skip">Skip:</label>
        <input
          id="skip"
          type="number"
          value={limit}
          onChange={(e) => setSkip(Number(e.target.value))}
        />
      </div> */}


      <div>
        <label htmlFor="sortBy">Sort By:</label>
        <input
          id="sortBy"
          type="text"
          value={sortBy}
          onChange={(e) => setSortby(e.target.value)}
        />
      </div>
      <div>
        <select
          name=""
          id=""
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Asc</option>
          <option value="desc">desc</option>
        </select>
      </div>
{/* 
      <div>
        <label htmlFor="category">filter By category:</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div> */}
      <div>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          {
            categories.map(d=>(<option value={d}>{d}</option>))
          }
        </select>
      </div>
      {/* <button onClick={getbyCategory}>get all category list</button> */}





      <div>
        {
          data.map((product) => (<Product key={product.id} {...product} />))
        }
      </div>
      <div>
        {
          // showCategory && data.map((cat string)=>(<p key={cat}>{cat}</p>))
        }
      </div>

      <button onClick={prev}>Prev</button>
      <button onClick={next}>next</button>


    </div>
  )
}

export default App
