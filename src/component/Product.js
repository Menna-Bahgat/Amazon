import React from 'react'
import'./Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useAuth } from './Context/GlobalState';
import { type } from '@testing-library/user-event/dist/type';

const Product = ({title, price, id, image, reting}) => {
  const {dispatch,basket} = useAuth()
  const addToBasket = ()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item : {
        id:id,
        price:price,
        image:image,
        title:title,
        reting:reting
      }
    })
  }
  console.log(basket)
  return (
    <div className='Product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className='product-rating'>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
      </div>
      <img src={image}/>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product