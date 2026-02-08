import React from 'react'
import './Checkout.css'
import loggo from '../images/checkoutAd.jpg'
import { useAuth } from './Context/GlobalState'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const {basket} = useAuth()
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='Checkout-ad' src={loggo}/>
            <h5>Hello, Guest</h5>
            <h4 className="checkout-title">Your Shopping Basket</h4>
            {basket.length > 0 ?(
                basket.map((item)=>(
                    <CheckoutProduct
                        key   = {item.id} 
                        id    = {item.id} 
                        title = {item.title} 
                        image = {item.image} 
                        price = {item.price}
                    />
                ))
            ):(<p>you have no item in your basket. To buy one or more items, click"Add To Basket"</p>

            )}
        </div>
        <div className = 'checkout-right'>
           <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout