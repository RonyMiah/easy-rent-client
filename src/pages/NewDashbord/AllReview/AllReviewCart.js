import React from 'react'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';


const AllReviewCart = ({reviewdata, dfunc}) => {
    const {name, imgUrl, rating, designation, _id} = reviewdata
  return (
    <div className='review-cart'> 

        <img src={imgUrl} alt="" />       
        <h2>{name}</h2>
        <p>{designation}</p>

        <Rating name="read-only" value={rating} readOnly />

        <div className="btn-body">
          <button onClick={() => dfunc(_id)} className='red-btn' ><DeleteIcon></DeleteIcon></button>
          </div>
        
        
        
    </div>
  )
}

export default AllReviewCart