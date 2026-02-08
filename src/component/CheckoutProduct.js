import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './CheckoutProduct.css'
import { useAuth } from './Context/GlobalState';


const CheckoutProduct = ({id, image, title, price, hiddenButton, }) => {
    const {dispatch} = useAuth()
    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct-image' src={image}/>
        <div className='checkoutproduct-info'>
            <p className='checkoutproduct-title'>{title}</p>
            <p className='checkoutproduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  ) 
}

export default CheckoutProduct