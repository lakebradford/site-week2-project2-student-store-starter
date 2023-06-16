import * as React from "react"
import { useState } from "react"
import "./Home.css"
import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(data) {
  console.log(data.data)

  let result = data.data

  
  const [searchedItem, setSearchedItem] = useState('')
  const [buttonCategory, setButtonCategory] = useState('all')
  const [searchedData, setSearchedData] = useState(data.data)



  const handleInputChange = (event) =>{
    //we first check to see if a button was clicked or if a search was mad
    event.preventDefault()
    setButtonCategory(event.target.name)
    setSearchedItem(event.target.value)
    setButtonCategory(event.target.name)

    //We can now filter by category and then by search
    let sortedByCategory = data.data
    if (event.target.name !== 'all'){
      sortedByCategory = data.data.filter((product) => product.category == event.target.name)
    }

    //now we update our filtered data that we need to display
    setSearchedData(sortedByCategory)
    if (event.target.value !== ''){
      setSearchedData(sortedByCategory.filter((productByCategory) => productByCategory.name.toLowerCase().includes(event.target.value)))
    }
  }

  // we return our buttons, searchbar, product grid, contact info, about us, and the footer
  return (
    <div className="home" id = "home-div">
      <div id = "form-wrapper">
        <form>
          <input id = "search-bar" type = "text" placeholder="Search.." onChange = {handleInputChange} value = {searchedItem} name = {buttonCategory} />

        </form>
      </div>
      <div className= "categories">
        <button name = {"all"} onClick={handleInputChange}>All Categories</button>
        <button name = {"food"} onClick={handleInputChange}>Food</button>
        <button name = {"clothing"} onClick={handleInputChange}>Clothing</button>
        <button name = {"accessories"} onClick={handleInputChange}>Accessories</button>
        <button name = {"tech"} onClick={handleInputChange}>Tech</button>
      </div>
      <ProductGrid products = {searchedData.length === 0  && searchedItem.length ===0? data.data: searchedData}  />
      <div id="contact-div">
            <div id = "about">
              <h2>About Me</h2>
              <p>My name is lake bradford and I am a rising junior at the college of William and Mary majoring in computer science. </p>
            </div>
        </div>
      <div id="contact-div">
          <div id = "contact">
              <h2>Contact me</h2>
            <br></br>
            <br></br>
              Email: lakebradford13@gmail.com
            <br></br>
            <br></br>
              Phone: 3186175322
            <br></br><br></br>
              Address : 123 Fake Street, San Francisco, CA
            <br></br><br></br>
              


          </div>
        </div>
          <div class="footer-basic">
          <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Salesforce © 2018</p>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    </div>
  )
}
