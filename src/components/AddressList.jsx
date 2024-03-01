import React from 'react'
import styles from '../CSS/addresslist.module.css'
import { addressList } from './data'

function AddressList(props) {

    

  return (
    <div className={styles.addressList}>
        {addressList.map((item)=>{
            return <div className={styles.addreessItem} onClick={()=>{props.onClicked(false, item)}}>
                <p>{item.fullName} <br></br> {item.houseDetails}, {item.streetDetails}, {item.landmark}, <br></br>{item.city}-{item.pincode} ,{item.state}, <br></br>{item.country},
                 {item.phone}
                </p>
            </div>
        })}
    </div>
  )
}

export default AddressList