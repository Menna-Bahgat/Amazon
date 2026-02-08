import React from 'react'
import { useAuth } from './Context/GlobalState'
import './Subtotal.css'
import { useNavigate } from 'react-router-dom';


const Subtotal = () => {
    const { basket } = useAuth();
    const navigate = useNavigate()
  return (
    <div className='Subtotal'>
        <p>Subtotal({basket.length} item) : <strong>$453,4</strong></p>
        <small className='subtotal__gift'>
          <input type='checkbox'/>
          This order contain a gift
        </small>
        <button onClick={()=> navigate("/Payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal