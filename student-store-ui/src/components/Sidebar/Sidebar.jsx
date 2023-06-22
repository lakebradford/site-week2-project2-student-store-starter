import * as React from "react"
import { useState } from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props) {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  // console.log(props.cartData)

  const handleSidebarClick = () =>{
    let sidebar = document.getElementById("sidebar")
    if(sidebar.className == "sidebar closed" ){
      sidebar.className = "sidebar open"
      setSidebarOpened(true)
    }
    else{
      sidebar.className = "sidebar closed"
      setSidebarOpened(false)
    }
  }

  return (
    <section className="sidebar closed" id = "sidebar">
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={handleSidebarClick}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
              <ShoppingCart sidebarOpened = {sidebarOpened} cartInfo = {props.cartInformation}  />
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </div>
    </section>

  )
}
