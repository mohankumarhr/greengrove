import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "../CSS/productitem.css"
import axios from 'axios';
import { productBase } from './data';

function ProductItem({item}) {

    const [currentUser] = useState(localStorage.getItem('currentUser')||null)

    const AddToCart =()=>{

        const headers = {
            quantity: 1, // Include authorization header if needed
          };
        
        axios.post(`${productBase}/${currentUser}/${item.ptitle}/addProducts-to-cart`,{
            headers: headers
        }).then(response => {
            console.log(response.data);
            })
            .catch(error => {
            console.error('error:', error);
            });
    }

  return (
    <div className='product-container'>
        <div className='product-img'>
        <img src={item.pimageURL} alt='img'></img>
        <div className='product-icon'>
            <div onClick={AddToCart} className='icon'>
                <ShoppingCartOutlinedIcon className='icon-item' />
            </div>
            <div className='icon'>
                <InfoOutlinedIcon className='icon-item' />
            </div>
            <div className='icon'>
                <FavoriteBorderOutlinedIcon className='icon-item' />
            </div>
        </div>
        </div>
        <div className='product-info'>
            <a href='/' className='product-title'>{item.ptitle}</a>
            {/* <a href='/' className='rating'>{item.rating}</a> */}
            <a href='/' className='price'>{item.pprice}</a>
        </div>
    </div>
  )
}

export default ProductItem