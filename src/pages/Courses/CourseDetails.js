import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Appbar from '../Shared/Appbar/Appbar';
import Footer from '../Shared/Footer/Footer';

const CourseDetails = () => {
  const { user } = useAuth();
  const { courseName } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://easy-rent-server-kappa.vercel.app/api/find/courses`)
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.find((d) => d.courseId === courseName);
        // console.log(filterData);
        setData(filterData);
      });
  }, []);

  const initialInfo = {
    name: user?.displayName,
    email: user?.email,
    photoURL: user?.photoURL,
    carName: courseName,
    startDate: '1',
    endDate: '2',
    rent: data?.price,
    location: 'Bangladesh',
    imgUrl: data?.bannerImg,
    rentStatus: 'pending',
    product_category: 'Course',
  };
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
    <div>
      <Appbar />
      <Container>
        <Box textAlign="center" px={10}>
          <img style={{ width: '100%' }} src={data?.bannerImg} alt="" />
          <Typography gutterBottom variant="h6" component="div">
            Course: {courseName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Trainer: {data?.trainer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Not only do pass rates decline with age, it can also take longer to
            actually learn to drive. So, while it might seem like you're saving
            money by putting off learning to drive, it's actually more
            cost-effective to get it out of the way as soon as you can. 10 Best
            New/Used Cars in India for Teenager/Learner Driver Maruti Suzuki
            Alto. Maruti Suzuki Alto. ... Maruti Suzuki S-Presso. Maruti Suzuki
            S-Presso. ... Renault Kwid. Renault Kwid BS6. ... Tata Tiago. Tata
            Tiago Facelift. ... Hyundai Grand i10 NIOS. BS6 Hyundai Grand i10
            Nios. ... Maruti Suzuki Swift. ... Volkswagen Polo. ... Maruti
            Suzuki Baleno.
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Cost of course: {data?.price}$
          </Typography>
          <Button
            onClick={rentNow}
            sx={{ backgroundColor: 'orange' }}
            variant="contained"
          >
            Pay {data?.price}$
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default CourseDetails;
