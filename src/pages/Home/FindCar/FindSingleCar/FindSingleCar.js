import { Grid, Typography, Container, Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import Appbar from '../../../Shared/Appbar/Appbar';
import ReviewSingleCar from './ReviewSingleCar';
import ResponsiveDatePickers from './DatePicker';
import useAuth from '../../../../hooks/useAuth';
import ViewSingleReview from './ViewSingleReview';
import PickupLocation from './PickupLocation';
import SliderBrandCar from './SliderBrandCar';
import SingleCarDetails from './SingleCarDetails';
import NurFooter from '../../../Shared/Footer/NurFooter';

const FindSingleCar = () => {
  const { carName } = useParams();
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const [rent, setRent] = useState(0);
  const [image, setImage] = useState('');
  const [newRent, setNewRent] = useState(rent);
  const [days, setDays] = useState(0);
  const [location, setLocation] = useState('');
  const { user } = useAuth();
  const startDate = startValue.toLocaleDateString();
  const endDate = endValue.toLocaleDateString();
  // console.log(location);

  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/findBrand')
      .then((res) => res.json())
      .then((data) => {
        const filterCar = data.filter((data) => data.name.includes(carName));
        setImage(filterCar[0].imgUrl);
        setRent(filterCar[0].rent);
      });
  }, []);

  const initialInfo = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    carName: carName,
    startDate,
    endDate,
    rent: newRent,
    location: location,
    imgUrl: image,
    rentStatus: 'pending',
    product_category: 'Brand',
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

  const [viewReview, setViewReview] = useState();
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/carReview')
      .then((res) => res.json())
      .then((data) => {
        const singleReview = data.filter((review) => review.carName == carName);
        setViewReview(singleReview);
      });
  }, []);
  // console.log(viewReview.length);

  const [slider, setSlider] = useState();
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/sliderSingleCar')
      .then((res) => res.json())
      .then((data) => {
        const singleSlide = data.filter((slide) => slide.name == carName);
        setSlider(singleSlide);
      });
  }, []);

  useEffect(() => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
    const sumRent = diffDays * rent;
    // console.log(sumRent);
    setNewRent(sumRent);
  }, [startDate, endDate]);

  return (
    <div>
      <Appbar />
      <Typography
        variant="h3"
        textAlign="center"
        style={{ fontWeight: 'bold' }}
      >
        {carName} Car
      </Typography>
      {/* slider use here */}
      {slider?.map((slide) => (
        <SliderBrandCar key={slide?._id} slide={slide} />
      ))}

      <Container>
        <Grid container>
          <Grid item xs={12} md={8}>
            {/* hard code of this page   */}
            <SingleCarDetails />

            <Typography variant="h4" py={2} fontWeight="bold">
              Rating and Reviews
            </Typography>
            {viewReview?.length === 0 ? (
              <Typography variant="h6" sx={{ color: 'red' }}>
                Sorry! This car has no review.
              </Typography>
            ) : (
              viewReview?.map((review) => <ViewSingleReview review={review} />)
            )}
            <Typography variant="h4" sx={{ py: 2, fontWeight: 'bold' }}>
              Give Feedback
            </Typography>
            {/* Feedback comment */}
            <ReviewSingleCar carName={carName} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4">Rent Here</Typography>
            <Typography variant="h5">US ${rent}/Day</Typography>
            <Divider />
            <Typography variant="h6" pt={2}>
              Trip Start
            </Typography>
            <ResponsiveDatePickers
              value={startValue}
              setValue={setStartValue}
            />
            <Typography variant="h6">Trip End</Typography>
            <ResponsiveDatePickers value={endValue} setValue={setEndValue} />
            <Typography variant="h6" pt={2}>
              Pickup and Return location
            </Typography>
            <PickupLocation location={location} setLocation={setLocation} />
            <Typography variant="h5" py={1}>
              Total {days} days.
            </Typography>
            <Typography variant="h5" pb={1}>
              Total cost: ${newRent}
            </Typography>
            <Typography textAlign="center" py={2}>
              {/* <Link to={`/rent/${carName}`} style={{ textDecoration: "none" }}> */}
              <Button onClick={() => rentNow()} variant="contained">
                Pay {newRent}$
              </Button>
              {/* </Link> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <NurFooter />
    </div>
  );
};

export default FindSingleCar;
