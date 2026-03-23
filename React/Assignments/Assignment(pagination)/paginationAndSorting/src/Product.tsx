import './App.css'

const Product = ({id,image,title,price,rating}) => {
  return (
    <div className='product-card'>
      <p>{id}</p>
      <img src={image} alt="No image" width={100} height={100} />
      <p>{title}</p>
      <p>Price: {price}</p>
      <p>Ratings: {rating}</p>
    </div>
  )
}

export default Product
