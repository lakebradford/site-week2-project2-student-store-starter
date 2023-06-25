import * as React from "react"
import { useState } from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props) {
  const [sidebarOpened, setSidebarOpened] = useState(false)


  //when the sidebar is clicked, it either opens or closes depending on its previous state
  const handleSidebarClick = (event) =>{
    event.preventDefault()

    let sidebar = document.getElementById("sidebar")
    if(sidebar.className == "sidebar closed" ){
      sidebar.className = "sidebar open"
      setSidebarOpened(true)
    }
    else{
      console.log("CART CLOSED")
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
        <ShoppingCart sidebarOpened = {sidebarOpened} cartInfo = {props.cartInformation}  />
      </div>
    </section>

  )
}
