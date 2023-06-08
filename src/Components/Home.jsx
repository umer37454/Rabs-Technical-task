import React, { useEffect, useState } from 'react'

const Home = () => {
  // using props - useState, useEffects, useNavigate (about, contact components)
  const [product, setProduct] = useState([]);

  //fetching data from api
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => {
        setProduct(data)
      })
    console.log(product)
  }, [])

  const hasProduct = product.length > 0;

  return (
    <>
      {/* {passing prop into components} */}
      {hasProduct ? <CardComponent product={product} /> : 'Loading...'}
    </>
  )
}

const CardComponent = ({ product }) => {
  return (
    <>
      <div className="card-container">
        {product.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home