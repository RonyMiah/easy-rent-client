import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import NewServicecart from './NewServicecart';

const NewService = () => {
  const [newService, setNewService] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/getnewService')
      .then((res) => res.json())
      .then((data) => setNewService(data));
  }, []);
  console.log(newService);
  return (
    <div>
      <Container>
        <h1 className="car-service-headline">Our Services</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 5 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={2}></Grid>

          <Grid item xs={12} sm={6} md={4} lg={8}>
            {newService.map((data) => (
              <NewServicecart alldata={data} key={data._id}></NewServicecart>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewService;
