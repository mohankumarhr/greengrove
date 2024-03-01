import React, { useEffect, useState } from 'react'
import styles from "../CSS/cartlist.module.css"
import {cartProducts} from "./data"
import Cartitem from './Cartitem'
import AddressList from './AddressList'
import axios from 'axios'
import { productBase } from './data'

function Cartlist() {


  const [showAddressList, setAddressList] = useState(false)

  const [address, setAddress] = useState()

  const [currentUser] = useState(localStorage.getItem('currentUser')||null)

  const [cartItems , setCartItems] = useState([])

  const handleAddressList = (bool, item)=>{
    setAddressList(bool)
    setAddress(item)
    
}


useEffect(()=>{

  axios.get(`${productBase}/${currentUser}/get-user-cart`).then(
    (responces)=>{
      setCartItems(responces.data.itemQuantity)
      console.log(responces.data)
    }
  )
  

},[currentUser])


  return (
    <div className={styles.cartMainBody}>
    <div className={`${styles.addressListContainer} ${showAddressList&&styles.showAddressList}`}>
    <AddressList 
    onClicked = {handleAddressList}
    />
    </div>
        <div className={styles.cartList}>
        <div className={styles.cartHeader}>
        <h4>Shopping Cart</h4>
        </div>
         {cartItems.map((item)=>{
          return <Cartitem 
            img = {item.product.pimageURL}
            title={item.product.ptitle}
            price = {item.product.pprice}
            category = {item.product.category}
            quantity = {item.quantity}
          />
         })}
        </div>
        <div className={styles.checkOut}>
          {/* <div className={styles.addressContainer}>
            <button>Add Address</button>
          </div> */}
          <div className={styles.addressContainer}>
          {address&&<p>{address.fullName} <br></br> {address.houseDetails}, {address.streetDetails}, {address.landmark}, 
          <br></br>{address.city}-{address.pincode} ,{address.state}, <br></br>{address.country},
                 {address.phone}
                </p>}
            <button onClick={()=>{handleAddressList(true, address)}}>Change</button>
          </div>
          <div className={styles.priceDetails}>
            <h5>Price Details</h5>
            <div>
              <p>Items</p>
              <p>3</p>
            </div>
            <div>
              <p>Price</p>
              <p>5600</p>
            </div>
            <div>
              <p>Delivery Charges</p>
              <p>-2000</p>
            </div>
            <div className={styles.finalPrice}> 
              <p>Total Amount</p>
              <p>3600</p>
            </div>
            <button>Place Order</button>
          </div>
        </div>
    </div>
  )
}

export default Cartlist