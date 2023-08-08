import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ProductCard from '../../components/ProductCard'

const CategoryProducts = () => {
    const {name} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);

      if(products.length === 0) return <div>Loading....</div>
  return (
    <ProductCard products={products}/>
  )
}

export default CategoryProducts