import React, { useEffect, useState } from 'react'
import "../CSS/productlist.css"
import ProductItem from './ProductItem'
import { popularProducts } from './data'
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';

function Productlist() {


    const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [ProductData, setProductData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          
          try {
        
    
            // Make a GET request with headers
            const response = await axios.get(`https://product-service-zx9b.onrender.com/seller/ /get-products`);
    
            // Handle the server response
            console.log('Server Response:', response.data);
            setProductData(response.data)
          } catch (error) {
            // Handle errors
            console.error('Error:', error);
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, [token]);


    const handleFilterDisplay = ()=>{
        document.querySelector('.filter-container').classList.add('show-filter')
    }

    const handleFilter = ()=>{
        document.querySelector('.filter-container').classList.remove('show-filter')
    }

    return (
        <div className='product-section-container'>
        <div className='filter-icon' onClick={handleFilterDisplay}>Filter<FilterListIcon/></div>
            <div className='filter-container'>
                <h3>FILTER BY</h3>
                <div className='filter-range'>
                    <h5>RANGE</h5>
                    <div className='range-input'>
                        <div className='range-min'>
                            <label>Min</label>
                            <input type='number' name='min' placeholder='₹0'></input>
                        </div>
                        <div className='range-max'>
                            <label>Max</label>
                            <input type='number' name='max' placeholder='₹0'></input>
                        </div>
                    </div>
                </div>
                <div className='filter-color'>
                    <h5>COLOR</h5>
                    <div className='checkbox-input'>
                        <label>Pink</label>
                        <input type='checkbox' value={"pink"}></input>
                    </div>
                    <div className='checkbox-input'>
                        <label>Yellow</label>
                        <input type='checkbox' value={"yellow"}></input>
                    </div>

                    <div className='checkbox-input'>
                        <label>White</label>
                        <input type='checkbox' value={"white"}></input>
                    </div>

                    <div className='checkbox-input'>
                        <label>Green</label>
                        <input type='checkbox' value={"green"}></input>
                    </div>

                </div>
                <div className='filter-brand'>
                    <h5>BRAND</h5>
                    <div className='checkbox-input'>
                        <label>Brand1</label>
                        <input type='checkbox' value={"brand1"}></input>
                    </div>

                    <div className='checkbox-input'>
                        <label>Brand2</label>
                        <input type='checkbox' value={"brand2"}></input>
                    </div>

                    <div className='checkbox-input'>
                        <label>Brand3</label>
                        <input type='checkbox' value={"brand3"}></input>
                    </div>

                </div>
                <div className='filter-size'>
                    <h5>SIZE</h5>
                    <div className='checkbox-input'>
                        <label>Small</label>
                        <input type='checkbox' value={"small"}></input>
                    </div>

                    <div className='checkbox-input'>
                        <label>Large</label>
                        <input type='checkbox' value={"large"}></input>
                    </div>

                    <div className='checkbox-input'>
                        <label>Very large</label>
                        <input type='checkbox' value={"verylarge"}></input>
                    </div>

                </div>
                <button onClick={handleFilter}>Apply</button>
            </div>
            <div className='product-page-container'>
                {ProductData.map((item) => {
                    return <ProductItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Productlist