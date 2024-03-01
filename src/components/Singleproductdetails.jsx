import React, { useEffect } from 'react'
import styles from "../CSS/singleproductdetails.module.css"



function Singleproductdetails() {

    return (
        <div className={styles.productDetailsConatiner} >
            <div className={styles.productImgContainer}>
                <div>
                    <div className={styles.imgMain}>
                        <img src='https://dostguru.com/HTML/plantly/assets/img/product/product_1.jpg'></img>
                    </div>
                </div>
            </div>
            <div className={styles.productDetails} id='details'>

                <h2 className={styles.productTitle}>Set Of 3 Live Indoor Plant Combo Of Zamia Green (ZZ) And Jade And Areca Palm With Self Watering Pot</h2>
                <p className={styles.productPrice}>₹899</p>
                <div className={styles.productFeatures}>
                    <img src='https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Sunlight_1.png?v=1704258264'></img>
                    <img src='https://cdn.shopify.com/s/files/1/0646/8327/8550/files/not_child_friendly_a589e231-7ed5-4db6-99ff-a00bc94cac6e.png?v=1704258264'></img>
                    <img src='https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Water_twice_2.png?v=1704258264'></img>
                    <img src='https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Self_watering_c7fba125-1fba-4435-b88e-c70fba9f85bb.png?v=1704258264'></img>
                    <img src='https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Pet_Friendly_1.png?v=1704269493'></img>
                </div>
                <p className={styles.selectPotText}>Select Pot Color:</p>
                <div className={styles.chooseColor}>
                    <div className={styles.red}></div>
                    <div className={styles.red}></div>
                    <div className={styles.red}></div>
                    <div className={styles.red}></div>
                    <div className={styles.red}></div>
                </div>
                <p className={styles.selectPotText}>Qantity:</p>
                <div className={styles.chooseQuantity}>
                    <div className={styles.minus}>-</div>
                    <div className={styles.quantity}>1</div>
                    <div className={styles.plus}>+</div>
                </div>
                <button className={styles.addToCart}>Add to cart</button>
                <div className={styles.discription}>
                    <h5>Description</h5>
                    <p>Brunch 3 Wolf Moon Tempor, Sunt Aliqua Put A Bird On It Squid Single-Origin Coffee Nulla Assumenda Shoreditch Et.<br></br>

                        Nihil Anim Keffiyeh Helvetica, Craft Beer Labore Wes Anderson Cred Nesciunt Sapiente Ea Proident. Ad Vegan Excepteur Butcher Vice Lomo.<br></br>

                        Leggings Occaecat Craft Beer Farm-To-Table, Raw Denim Aesthetic Synth Nesciunt You Probably Haven't Heard Of Them Accusamus Labore Sustainable VHS.</p>
                </div>
                <div className={styles.specification}>
                    <h5>Additional Information</h5>
                    <ul>
                        <li>Free delivery</li>
                        <li>Cash on delivery</li>
                        <li>10 days replacement policy</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Singleproductdetails