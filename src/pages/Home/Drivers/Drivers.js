import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Driver from './Driver';

const Drivers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/singleDriver')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <Appbar></Appbar>
      <Container>
        <Typography
          sx={{ textAlign: 'center' }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Our Drivers
        </Typography>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Driver key={item._id} item={item}></Driver>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Drivers;
