import React, { useEffect, useState } from 'react'
import './App.css'
import { useDebounce } from './useDebounce'
const ProductCard = ({id, image, title }) => {

  return (
    <div className='product-card'>
      <p>{id}</p>
      <img src={image} alt="image" width={100} height={100} />
      <p>{title}</p>
    </div>
  )
}


//pagination with frontend Side Pagination
const App = () => {
  const BASE_URL="https://dummyjson.com/products"
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [url, setUrl] = useState<string>(BASE_URL);

  const debouncedSearch=useDebounce(search,500)

  const fetchData = async () => {
    const data = await fetch(url)
    const result = await data.json()
    setProducts(result.products);
  }
  const PAGE_SIZE = 10;
  const totalPage = Math.ceil(products.length / PAGE_SIZE)

  useEffect(()=>{
    if(debouncedSearch){
      setUrl(BASE_URL+"/search?q="+debouncedSearch)
      fetchData()
    }
    else{
      setUrl(BASE_URL)
    }
  },[debouncedSearch])

  useEffect(() => {
    fetchData()
  }, [url])


  const start = (pageNo - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE
  return (
    <>

      <div>
        <input 
          type="text" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
           />
      </div>
      

      <div className='product-container'>
        {
          products.length && products.slice(start, end).map((product) => <ProductCard key={product.id} id={product.id} image={product.images[0]} title={product.title} />)
        }
      </div>
      <div className='pagination-pannel'>
        <button disabled={pageNo===1} onClick={()=>{setPageNo(prev=>prev-1)}}>prev</button>
        <div className='pageNoPannel'>
          {[...Array(totalPage)].map((_,n) => {
            return <span key={n + 1} className={'page-number'+  (pageNo===n+1 ? " active":"")} onClick={() => setPageNo(n + 1)}>{n + 1}</span>
          })}</div>

        <button disabled={pageNo===totalPage} onClick={()=>{setPageNo(prev=>prev+1)}}>next</button>
      </div>
    </>
  )
}

export default App
