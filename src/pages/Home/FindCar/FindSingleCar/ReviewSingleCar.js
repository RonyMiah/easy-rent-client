import { Container, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const ReviewSingleCar = ({ carName }) => {
  const { user } = useAuth();
  const [star, setStar] = React.useState(0);
  const initialInfo = {
    name: user.displayName,
    image: user.photoURL,
    carName: carName,
    star,
  };
  const [review, setReview] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...review };
    newInfo[field] = value;
    setReview(newInfo);
  };

  const handleReviewSubmit = (e) => {
    const reviewAdd = { ...review, star: star };
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/carReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviewAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert('Information successfully submitted.!');
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleReviewSubmit}>
        <Typography variant="h6">Rating:</Typography>
        <Rating
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
          sx={{ fontSize: '50px' }}
        />
        <Typography variant="h6">Description about this car:</Typography>
        <textarea
          type="text"
          name="description"
          rows="10"
          placeholder="Description About this Car"
          onBlur={handleOnBlur}
          required
          style={{ width: '100%' }}
        />
        <br />
        <input
          style={{ width: '110px' }}
          className="btn btn-danger"
          type="submit"
          value="Add Review"
        />
      </form>
    </Container>
  );
};

export default ReviewSingleCar;
