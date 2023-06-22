import React from 'react'
import "./ProductGrid.css"
import ProductCard from '../ProductCard/ProductCard'
import { useState } from 'react'
const ProductGrid = (props) => {
  //The product grid renders all of the product cards (called in Home)

  

  return (
    <div className = "product-grid" id = "buy-now">
        {props.products.map((product) => {
            return (<ProductCard key = {product.id}product = {product.name} id = {product.id} price = {product.price}  image = {product.image} cartData = { cartData => props.cartData(cartData)}/>)
        })}
    </div>
  )
}

export default ProductGrid