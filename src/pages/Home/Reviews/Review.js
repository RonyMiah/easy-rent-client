import { Box, Typography } from '@mui/material';
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import Rating from 'react-rating';
import './Review.css'

const Review = ({ review }) => {
    const { name, imgUrl, designation, rating, opinion } = review || {};
    return (
        <Box className="review-card">
            <div style={{ display: 'flex' }}>
                <figure>
                    <img className='review-img' src={imgUrl} alt="User Img" />
                </figure>
                <div className='reviwe-right-part'>
                    <Typography variant="h6" component="div" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" component="div" gutterBottom>
                        <b>{designation}</b>
                    </Typography>
                </div>
            </div>
            <p className='review-desc'>{opinion.slice(0, 100)}</p>
            <div className='rating'>
                <Rating
                    initialRating={rating}
                    emptySymbol={<AiIcons.AiOutlineStar className='emptystar' />}
                    fullSymbol={<AiIcons.AiFillStar className='fillstar' />}
                    readonly
                />
            </div>
        </Box>
    );
};

export default Review;