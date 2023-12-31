import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Driver = (props) => {
  const { user } = useAuth();

  const { name, email, experience, phone, address, picture, price } =
    props.item || {};
  const initialInfo = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    carName: name,
    startDate: '1',
    endDate: '2',
    rent: price,
    location: address,
    imgUrl: picture,
    rentStatus: 'pending',
  };
  // console.log(initialInfo);
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
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
          <CardMedia
            component="img"
            width="100%"
            height="350px"
            image={picture}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Experience: {experience}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: {address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: {phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price per Day: ${price}
            </Typography>
          </CardContent>
          <CardActions>
            <button onClick={rentNow} className="rent-button">
              Hire Now
            </button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Driver;
