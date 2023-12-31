import React, { useEffect, useState } from 'react';
import Review from './Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Review.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/addreview')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide>
            <Review key={review?._id} review={review}></Review>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
