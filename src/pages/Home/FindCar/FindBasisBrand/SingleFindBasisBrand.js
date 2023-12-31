import { Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { AiFillStar } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { Link } from "react-router-dom";

const SingleFindBasisBrand = ({ car }) => {
  const { imgUrl, name, rent, star, available } = car;
  return (
    <Grid item xs={12} sm={6} lg={4} sx={{ padding: "10px" }}>
      <Grid item xs={12} sx={{ padding: "10px" }}>
        <img
          src={imgUrl}
          style={{ height: "200px", borderRadius: "10px", width: "100%" }}
          alt=""
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography py={1} variant="body1">
          {star} <AiFillStar style={{ color: "orange" }} />({available} trips){" "}
          <GiAchievement /> All-Star Host
        </Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} textAlign="right">
        <Typography variant="h5">Cost: {rent}$/day</Typography>
      </Grid>
      <Typography textAlign="center" sx={{ margin: "0 auto" }}>
        <Link to={`/singleCar/${name}`} style={{ textDecoration: "none" }}>
          <Button
            sx={{ backgroundColor: "orange", color: "white", my: 3 }}
            variant="contained"
          >
            View Details
          </Button>
        </Link>
      </Typography>
    </Grid>
  );
};

export default SingleFindBasisBrand;
