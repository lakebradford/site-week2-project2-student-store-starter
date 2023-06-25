import "./ProductCard.css"
import React, { useEffect } from 'react'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const ProductCard = (prop) => {
  //display the product card (called in productGrid)
  //if the product total changes, we need to update the value of 
  const [productTotal, setProductTotal] = useState(0)
  //shoppingCart data should take the id and the quantity as a object
  const handleProductIncrement = (event) => {
    event.preventDefault()
    setProductTotal(productTotal + 1)
    // when the plus button is clicked, a cart object is created and passed up to the sidebar so it can be displayed
    prop.cartData({"id": prop.id, "quantity": productTotal + 1, "name": prop.product, "price": prop.price})
  }

  const handleProductDecrement = (event) => {
    event.preventDefault() 
    if(productTotal > 0){
      setProductTotal(productTotal - 1)
      // when the minus button is clicked, a cart object is created and passed up to the sidebar so it can be displayed
      prop.cartData({"id": prop.id, "quantity": productTotal - 1, "name": prop.product,"price": prop.price})
    }
  }








  return (
      <div>
        <button className= "product-card">
          <Link to={`/product/${prop.id}`}>
              <img src ={prop.image}/>
          </Link>
          <h4 className = "product-name"> {prop.product}</h4>
          <h4 className = "product-price"> ${prop.price}</h4>
          <span className="minus"  name = "minus" onClick = {handleProductDecrement} id = {productTotal}>-</span>
          <input id = {prop.product} name = "product-num" type="text" value={productTotal}  readOnly/>
          <span className="plus" name = "plus"  onClick = {handleProductIncrement} id = {productTotal}>+</span>
        </button>
      </div>
  )
}

export default ProductCard