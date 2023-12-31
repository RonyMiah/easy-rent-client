import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css';
// import {data} from "../FakeData/FakeDataHome"

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/service_main')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    <div>
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          mb: '70px',
          mt: '60px',
        }}
      >
        {' '}
        Our services
      </Box>
      <Container>
        <Grid container>
          {services?.slice(0, 4).map((serviceP) => (
            <Grid
              item
              sx={12}
              sm={6}
              md={4}
              lg={3}
              className="Card"
              container
              spacing={1}
            >
              <Service key={serviceP._id} service={serviceP}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
