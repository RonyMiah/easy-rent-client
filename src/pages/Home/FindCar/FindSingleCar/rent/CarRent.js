import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Button, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const CarRent = () => {
  const { tranId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const {
    cus_name,
    cus_email,
    cus_add1,
    product_name,
    date_start,
    date_end,
    total_amount,
    product_imgUrl,
    val_id,
  } = order;
  useEffect(() => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/find/orderCar/${tranId}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [tranId]);

  const confirmOrder = () => {
    const data = {
      tran_id: tranId,
      val_id: val_id,
    };
    axios
      .post(`https://easy-rent-server-kappa.vercel.app/api/find/confirm`, data)
      .then((res) => {
        if (res.data === 'Successful') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Payment valided and order confirmed',
            showConfirmButton: false,
            timer: 2500,
          });
          navigate('/home');
        }
      });
  };

  return (
    <Container>
      <Typography variant="h4" textAlign="center" pt={2}>
        Check all information then confirm
      </Typography>
      <Grid container alignItems="center" spacing={5} py={4}>
        <Grid item xs={6}>
          <img style={{ width: '100%' }} src={product_imgUrl} alt="car" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Name: {cus_name}</Typography>
          <Typography variant="body1">Email: {cus_email}</Typography>
          <Typography variant="body1">Product Name: {product_name}</Typography>
          <Typography variant="body1">Start Date: {date_start}</Typography>
          <Typography variant="body1">End Date: {date_end}</Typography>
          <Typography variant="body1">Amount: {total_amount}</Typography>
          <Typography variant="body1">Location: {cus_add1}</Typography>
          <Typography variant="body1">TansId: {tranId}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" textAlign="center">
        <Button variant="contained" onClick={confirmOrder}>
          Confirm Order
        </Button>
      </Typography>
    </Container>
  );
};

export default CarRent;
