import * as React  from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, json,Routes,Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import axios from "axios"
import ProductCard from "../ProductCard/ProductCard"
import ProductDetail from "../ProductDetail/ProductDetail"
import ProductGrid from "../ProductGrid/ProductGrid"



export default function App() {
  const [productData, setProductData] = useState([])
  const [cartData, setCartData] = useState({})

  //accessing the api information and setting the information to the variable productData
  useEffect( () => {axios.get("https://codepath-store-api.herokuapp.com/store").then((response) => {
    setProductData(response.data.products)
  }).catch((error) => {
    console.log(error);
  })}, [])


  
  //we return our whole web page
  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar cartInformation = {cartData}/>
          <Navbar/>
          <Hero />
          <Routes>
            <Route path="/"  element={<Home data ={productData} cartData = { cartData => setCartData(cartData)}/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
