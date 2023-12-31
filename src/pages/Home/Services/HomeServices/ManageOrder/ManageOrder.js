import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import ManageOrderCart from './ManageOrderCart';

const ManageOrder = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://easy-rent-server-kappa.vercel.app/api/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [user?.email]);

  return (
    <div>
      <Container>
        <h1 className="car-service-headline">Manage Order </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 5 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          {services.map((cardata) => {
            const data = {
              ...cardata.serviceId,
              _id: cardata._id,
            };
            return (
              <ManageOrderCart
                key={cardata._id}
                alldata={data}
                services={services}
                setServices={setServices}
              ></ManageOrderCart>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ManageOrder;
