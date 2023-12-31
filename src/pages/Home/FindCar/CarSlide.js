import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CarSlide = ({ car }) => {
  return (
    <Box
      sx={{ backgroundColor: "rgb(244, 126, 18)", borderRadius: "10px", py: 1 }}
    >
      <Link to={`/car/${car.brandName}`} style={{ textDecoration: "none" }}>
        <Grid container spacing={1} sx={{ borderRadius: "20px" }}>
          <Grid item xs="12">
            <img
              style={{ borderRadius: "20px", padding: "5px", width: "100%" }}
              src={car.imgUrl}
              alt=""
            />
          </Grid>
          <Grid item xs="12">
            <Typography variant="h5" sx={{ color: "black" }} textAlign="center">
              {car.brandName}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
};

export default CarSlide;
