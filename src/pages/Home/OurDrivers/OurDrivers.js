import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OurDriver from './OurDriver';

const OurDrivers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/singleDriver')
      .then((res) => res.json())
      .then((data) => setItems(data.slice(0, 4)));
  }, []);

  return (
    <Container>
      <Typography
        sx={{ textAlign: 'center', marginTop: '50px' }}
        gutterBottom
        variant="h4"
        component="div"
      >
        Our Drivers
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <OurDriver key={item._id} item={item}></OurDriver>
        ))}
      </Grid>
      <Typography
        sx={{ textAlign: 'center', marginTop: '50px' }}
        gutterBottom
        variant="h4"
        component="div"
      >
        <Link to="/drivers">More...</Link>
      </Typography>
    </Container>
  );
};

export default OurDrivers;
