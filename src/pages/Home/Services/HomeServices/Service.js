import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Service = ({ service }) => {
  const { model, car_name, image, price_daily } = service;
  return (
    <div className="Singel_card">

      <div>
        <img className="image_Optimize" src={image} alt="" />
        <h2>{car_name}</h2>
        <p>{model}</p>
        <h4> Daily Rent $ ({price_daily}) </h4>
        <br />
        <Link className="btn_design " to="/details">
          <Button className="btn_color" variant="contained">
            View Deal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
