import React from "react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
// import required modules
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <>
      <Grid container spacing={2} className="BannerMain">
        <Grid item md={6} xs={12} sm={12}>
          <h1 className="title_model">
            <b style={{ color: "#2196f3" }}> Car Rental </b>
            <span style={{ color: "#FF4F5A" }}>In Bangladesh</span>
          </h1>
          <Box className="Box_design">
            <h2>Cheap rental cars by destination </h2>
            <h3>Find and compare the best car rental deals</h3>
            <p >
              We search over 30,000 locations and <br /> include major car comparison
              sites, so you get a huge  <br /> selection of cheap car rental deals from
              around the world.
            </p>
            <h3 className="ride_design" >  Enjoy Your Ride </h3>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <div className="imgbn">
            <img width="100%" src="https://i.ibb.co/5n7NQtC/undraw-Trip-re-f724.png" alt="imagecar" />

          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
