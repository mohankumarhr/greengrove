import React, { useState } from 'react'

import styles from "../CSS/cartitem.module.css"
import axios from 'axios'
import { productBase } from './data'




function Cartitem(props) {

  const [currentUser] = useState(localStorage.getItem('currentUser')||null)

  const handleRemoveItem = ()=>{
    axios.delete(`${productBase}/${currentUser}/${props.title}/delete-product-from-cart`).then((responces)=>{
        console.log(responces)
    })
  }

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.imageContainer}>
        <img src={props.img} alt='photo'></img>
      </div>
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemHeader}>
          <h3>{props.title}</h3>
          <h3>Price: <span>{props.price}</span></h3>
        </div>
        <div className={styles.cartItemBody}>
          <p>{props.category}</p>
          <p>Seller: {props.seller} </p>
        </div>
        <div className={styles.cartItemButtom}>
            <div className={styles.addItem}>+</div>
            <input type='numbers' value={props.quantity}></input>
            <div onClick={handleRemoveItem} className={styles.removeItem}>-</div>
          </div>
      </div>
    </div>
  )
}

export default Cartitem