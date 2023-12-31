import Car from "../../../images/car.png";
import './Porsche.css';
import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Porsche = () => {
    return (
        <div className="main">
            <div className="text">
                <h1>Long-Journey experience with short
                    <br />commute convenience. Rent Our</h1>
                <h1>Vehicles and Drivers Based</h1>
                <h1>on your preference Enjoy</h1>
                <h1>Your Rides With Our</h1>
                <h1>Various Services</h1>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita vero</p>
                <Link to='/details'> <Button variant="contained" style={{
                    backgroundColor: "#212121",
                }}>
                    Get Now
                </Button></Link>
            </div>
            <div className="car">
                <img src={Car} alt="" />
            </div>
        </div>
    );
};

export default Porsche;