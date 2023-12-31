import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const SliderBrandCar = ({ slide }) => {
  const { imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5 } = slide;
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img style={{ width: "100%" }} src={imgUrl1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={imgUrl2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={imgUrl3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={imgUrl4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={imgUrl5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderBrandCar;
