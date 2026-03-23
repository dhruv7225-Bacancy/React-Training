
const Product = ({...product}) => {
    // console.log(product);
    
  return (
    <div style={{width:"400px", border:"2px"}}>
        <p>{product.id}</p>
      <p>{product.title}</p>
      <img src={product.images[0]} alt="$" width={100} height={100}/>
      <p>{product.description}</p>
      <br />
    </div>
  )
}

export default Product
