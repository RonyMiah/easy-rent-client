import { Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const ViewSingleReview = ({ review }) => {
  const { name, image, carName, description, star } = review;
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item>
          <img
            style={{ borderRadius: "50%", width: "100%" }}
            src={image}
            alt="user"
          />
        </Grid>
        <Grid item pl={3}>
          <Typography variant="h6" sx={{ color: "orange" }}>
            {carName}
          </Typography>
          <Typography variant="h5">
            {star} <AiFillStar style={{ color: "orange" }} /> <b>{name}</b>
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body1">Date: apr 12, 2022</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewSingleReview;
