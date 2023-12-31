import { useState, useEffect } from 'react';
import React from 'react';
import MyOrder from './MyOrder';
import { Container, Grid, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // my orders
  useEffect(() => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/find/rentSingleOrder/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // console.log(orders);

  // my orders canceling
  const handleDeleteFinal = (id) => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/find/rentCarsdelete/${id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.message) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order has been Canceled',
            showConfirmButton: false,
            timer: 1500,
          });
          const remaining = orders.filter((service) => service._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <Container>
      <Typography gutterBottom variant="h4" component="div"></Typography>
      <Grid container spacing={2}>
        {orders.map((order) => (
          <MyOrder
            key={order._id}
            order={order}
            deleteOrder={handleDeleteFinal}
          ></MyOrder>
        ))}
      </Grid>
    </Container>
  );
};

export default MyOrders;
