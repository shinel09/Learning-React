import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { data } from '../DB/ProductDB'
import DetailCard from '../components/DetailCard'


const DetailPage = () => {
    const { id } = useParams()
    // console.log(Product ${productId} clicked);
    // console.log(data);

    // Go into the database and find the product with the id === productId
    const product = data.find((product)=> product.id === parseInt(id));

// console.log(product);
  return (
    <div>
        <h1>Detail Page</h1>
        <div className="">
            <h3>Product {id} clicked</h3>
            {/* <ProductCard product={blard}/> */}
            <DetailCard product={product}/>
        </div>
        
    </div>
  )
}

export default DetailPage