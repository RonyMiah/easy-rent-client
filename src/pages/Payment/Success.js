import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

const Success = () => {
  const navigate = useNavigate();
  const { tran_id } = useParams();
  const [order, setOrder] = useState({});
  const {
    product_name,
    product_imgUrl,
    cus_name,
    cus_email,
    val_id,
    total_amount,
    cus_add1,
  } = order || {};
  useEffect(() => {
    fetch(`https://easy-rent-server-kappa.vercel.app/orders/${tran_id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [tran_id]);

  const validatePayment = () => {
    const data = {
      tran_id: tran_id,
      val_id: val_id,
    };
    axios
      .post(`https://easy-rent-server-kappa.vercel.app/validate`, data)
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
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item md={6} className="car-card">
          <Typography variant="h4" component="div" gutterBottom>
            Please recheck to validate your Order
          </Typography>
          <img className="car-card-img" src={product_imgUrl} alt="" />
          <Typography variant="h5" component="div" gutterBottom>
            {`Brand: ${product_name}`}
          </Typography>
          <hr />

          <Typography variant="h6" component="div" gutterBottom>
            {`Your Name: ${cus_name}`}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {`Your Email: ${cus_email}`}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {`Pickup Location: ${cus_add1}`}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {`Price: BDT ${total_amount}`}
          </Typography>
          <Button onClick={validatePayment} variant="contained">
            Validate Order
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Success;
