import "./ProductCard.css"
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ProductCard = (prop) => {
  //display the product card (called in productGrid)
  return (
    <Link to={`/product/${prop.id}`}>
      <button className= "product-card">
          <img src ={prop.image}/>
          <h4 className = "product-name"> {prop.product}</h4>
          <h4 className = "product-price"> ${prop.price}</h4>
      </button>
    </Link>
  )
}

export default ProductCard