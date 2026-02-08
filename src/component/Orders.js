// import React, { use } from 'react'
import "./Orders.css"
import CheckoutProduct from './CheckoutProduct'
import { useAuth } from './Context/GlobalState'

const Orders = ({order}) => {
    const {basket} = useAuth()
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className="orders-order">
            <h3>order</h3>
            <p>April 24/2025 9:05 </p>
            {basket?.map((item) => (
            <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}
        </div>
        
    </div>
  )
}

export default Orders