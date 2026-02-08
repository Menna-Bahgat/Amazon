import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Context/GlobalState'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Payment = () => {
    const {basket} = useAuth()
  return (
    <div className='payment'>
        <div className="payment-container">
            <h1>Checkout ({<Link to="/Checkout">{basket.length} items</Link>})</h1>
        </div>
        <div className="payment-section">
            <div className="payment-title">
                <h4>Delivery Address</h4>
            </div>
            <div className="payment-address">
                <p>menna@gmail.com</p>
                <p>Alexandria, Egypt</p>
            </div>
        </div>
        <div className="payment-section">
            <div className="payment-title">
                <h4>Review items and delivery</h4>
            </div>
            <div className="payment-item">
                {basket.map((item)=>(
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
        <div className="payment-section">
            <div className="payment-title">
                <h4>Payment Methods</h4>
            </div>
            <div className="payment-details">
                <p><CreditCardIcon/> رقم البطاقه</p>
                <h4>Order Total : $453,4</h4>
                <button>Buy Now</button>
            </div>
        </div> 
    </div>
  )
}

export default Payment