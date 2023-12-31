import { Box, Container, Grid, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Popup.css';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';

const Popup = () => {
  const { BookingId } = useParams();
  const [service, setService] = useState({});
  const [orderData, setOrderData] = useState({});
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(orderData);
  useEffect(() => {
    fetch(`https://easy-rent-server-kappa.vercel.app/api/service/${BookingId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [BookingId]);

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = { ...orderData, serviceId: BookingId, userId: user?.email };

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/createOrder",
  //       data
  //     );

  //     console.log("api res => ", res);

  //     //Ekohn tmi client side run kore ekta order create koro r console e dkeho ki ashe

  //     if (res.data) {
  //       alert("Order Created");
  //     }
  //   } catch (err) {}

  //   navigate("/pay");
  // };

  const initialInfo = {
    name: user?.displayName,
    email: user?.email,
    photoURL: user?.photoURL,
    carName: service?.name,
    startDate: '17/12/21',
    endDate: '19/12/21',
    rent: service?.price,
    location: orderData?.division,
    imgUrl: service?.image,
    rentStatus: 'pending',
  };
  console.log(initialInfo);

  const rentNow = () => {
    const rentCar = { ...initialInfo };
    fetch(`https://easy-rent-server-kappa.vercel.app/api/find/init`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(rentCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data);
      });
  };

  return (
    <div className="design_popup">
      <Container>
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid className="text_center" item sx={12} sm={6} md={6} lg={6}>
            <img width="60%" src={service.image} alt="" />
            <br />
            <div className="designCard">
              <h1>Car Name:- {service.name}</h1>
              <h3>Model:- {service.year}</h3>
              <h3>Price Per Day :- $ {service.price}</h3>
              <h3>Kilo :- {service.kilo}</h3>
              <h3>Fual :- {service.fual}</h3>
              <p>
                Details :- <p> {service.details}</p>{' '}
              </p>
            </div>
          </Grid>

          <Grid className="text_center" item sx={12} sm={6} md={6} lg={6}>
            <form onSubmit={rentNow}>
              <Box
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
              >
                {/* <div> */}
                <TextField
                  id="filled-error"
                  label="FullName"
                  defaultValue=""
                  variant="filled"
                  name="fullName"
                  required
                  onBlur={handleChange}
                />
                <TextField
                  id="filled-error"
                  label="Address"
                  defaultValue=""
                  variant="filled"
                  name="address"
                  required
                  onBlur={handleChange}
                />
                <TextField
                  id="filled-error-helper-text"
                  label="division"
                  defaultValue=""
                  variant="filled"
                  name="division"
                  required
                  onBlur={handleChange}
                />
                <TextField
                  id="filled-error-helper-text"
                  label="Year"
                  defaultValue=""
                  variant="filled"
                  name="year"
                  type="number"
                  required
                  onBlur={handleChange}
                />
                {/* </div> */}

                <Box sx={{ width: 500 }}>
                  {/* <input
                    onClick={rentNow}
                    required
                    type="submit"
                    className="button_design"
                    variant="contained"
                    value="Continew with pay"
                  /> */}
                  <Button onClick={rentNow} variant="contained">
                    Continue with pay
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Popup;
