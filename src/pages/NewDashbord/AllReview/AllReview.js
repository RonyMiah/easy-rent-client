import React, { useEffect, useState } from 'react';
// import { Container} from "@mui/material";
// import Grid from '@mui/material/Grid';
import AllReviewCart from './AllReviewCart';
import Swal from 'sweetalert2';
import './AllReview.css';

const AllReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/addreview')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://easy-rent-server-kappa.vercel.app/api/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Review has been Deleted',
            showConfirmButton: false,
            timer: 1500,
          });
          const remainig = review.filter((service) => service._id !== id);
          setReview(remainig);
        }
      });
  };

  return (
    <div className="dashbord-review">
      {/* <Container> */}
      <h1>All Users Review</h1>
      <div className="dashbord-review-cart">
        {/* <Grid container spacing={{ xs: 2, md: 3, lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid item xs={12} sm={6} md={4} lg={3}> */}

        {review.map((data) => (
          <AllReviewCart
            key={data._id}
            reviewdata={data}
            dfunc={handleDelete}
          ></AllReviewCart>
        ))}

        {/* </Grid>
        </Grid> */}
      </div>
      {/* </Container> */}
    </div>
  );
};

export default AllReview;
