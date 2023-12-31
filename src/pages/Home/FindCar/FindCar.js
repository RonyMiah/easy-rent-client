import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import CarSlide from './CarSlide';

const FindCar = () => {
  const [cars, setCars] = useState();
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/find/findCar')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Find your drive
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Explore the world's largest car sharing marketplace
      </Typography>
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Browse by make
        </Typography>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cars?.map((car) => (
            <SwiperSlide>
              <CarSlide key={car.id} car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default FindCar;
