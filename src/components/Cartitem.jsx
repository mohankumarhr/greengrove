import React from 'react'

import styles from "../CSS/cartitem.module.css"

function Cartitem(props) {
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
            <div className={styles.removeItem}>-</div>
          </div>
      </div>
    </div>
  )
}

export default Cartitem