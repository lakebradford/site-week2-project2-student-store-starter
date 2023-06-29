import React, { useEffect, useState } from 'react'
import "./ShoppingCart.css"


const ShoppingCart = (props) => {
    //usestate variables responsible for controlling the reciept, cart information, and storing the name and email input
    const[totalCartInfo, setTotalCartInfo] = useState([])
    const [displayReciept, setDisplayReciept] =useState(false)
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    
    


    useEffect(() => {
        //if the cart object is already present in our list, we update the quantity
        if (totalCartInfo.filter( product => product.id ===  props.cartInfo.id).length > 0) {
            const updatedCartList = totalCartInfo
            let updatedObject = updatedCartList.findIndex((object)=> object.id == props.cartInfo.id)
            updatedCartList[updatedObject].quantity = props.cartInfo.quantity
            setTotalCartInfo(updatedCartList)
        }
        //if the cart object is not in our list, we add it to our total so it can be displayed
        else{
            setTotalCartInfo(totalCartInfo.concat(props.cartInfo))
        }



    }, [props.cartInfo]);

    //Stores our email and name input for the reciept
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        setNameInput(document.getElementById("name-input").value)
        setEmailInput(document.getElementById("email-input").value)
        setDisplayReciept(true)
    }

    

    if (props.sidebarOpened){
        return (
        <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <center><i className="material-icons md-48">add_shopping_cart</i>
                <h3 className='sidebar-title'>Shopping Cart</h3></center>
                    {totalCartInfo.map((displayedItem) => {
                        if(displayedItem.id && displayedItem.quantity > 0 ){
                            //caluclating the subtotal 
                            subtotal += displayedItem.quantity * displayedItem.price
                            //calculating the total price and taxes
                            return (<div className = "cart-item"> Product: {displayedItem.name}, Quantity: {displayedItem.quantity}, Unit Price: ${displayedItem.price.toFixed(2)}, Total Price {(displayedItem.price* displayedItem.quantity).toFixed(2)}</div>)
                        }
                        
                        
                    })}

                    <center id = 'cart-total'><div>Subtotal ${subtotal.toFixed(2)}</div>
                    <div>Taxes ${(subtotal * 0.0725).toFixed(2)}</div>
                    <div>Total ${(subtotal + (subtotal * 0.0725)).toFixed(2)}</div></center>
              </span>
              <span className="cart-icon icon button">
                <center><i className="material-icons md-48">monetization_on</i>
                <h3 className='sidebar-title'>Checkout</h3></center>
                <div id = "checkout-cart">
                    <form>
                        <center>
                            <input id = "name-input" className = "payment" type = "text" placeholder="Name" required/>
                            <input id = "email-input" className = "payment" type = "text" placeholder="Email" required />
                            <br></br>
                            <input type="submit" onClick={handleFormSubmit}></input>
                        </center>
                    </form>
                </div>
              </span>
              <span className="cart-icon icon button">
                <br></br>
                <br></br>
                <center><i className="material-icons md-48">fact_check</i>
                <h3 className='sidebar-title'>Reciept</h3>
                <div id = "reciept-div">
                    {(displayReciept == true) ? <div id = "reciept-title"> Showing reciept for {nameInput} available at {emailInput}
                    {totalCartInfo.map((displayedItem) => {
                        // if the displayed item has a quantity of zero we dont want to display it
                        if (displayedItem.id && displayedItem.quantity > 0 ){
                            return (<div> * Product: {displayedItem.name}, Quantity: {displayedItem.quantity}, Price: ${displayedItem.price}</div>)
                        }
                    })}  </div> : <div></div>}
                </div>
                </center>
                
              </span>
            </div>
            
          </div>
          )
    }


}

export default ShoppingCart