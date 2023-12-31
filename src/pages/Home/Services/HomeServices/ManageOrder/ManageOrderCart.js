import { Box, Grid } from '@mui/material';
import React from 'react';
import axios from 'axios';

const ManageOrderCart = ({ alldata, services, setServices }) => {
  const { _id, name, price, image, year, type, fual, kilo } = alldata;

  const deleteOrder = async () => {
    try {
      const res = await axios.delete(
        `https://easy-rent-server-kappa.vercel.app/api/orders/delete/${_id}`
      );
      console.log(res);
      if (res.data._id) {
        const filtered = services.filter((service) => service._id !== _id);
        setServices(filtered);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className="box">
        <div>
          <div className="car-box">
            <img src={image} alt="" />
          </div>
          <div className="cart-text">
            <p className="year-text">{year}</p>
            <h3 className="name-text">{name}</h3>
            <p className="price-text">
              <span className="span-text">${price}</span>/Day
            </p>
            <div className="details-box">
              <small className="small_details">{kilo}kilo</small>
              <small className="small_details">{type}</small>
              <small className="small_details">{fual}</small>
            </div>
          </div>
        </div>
        <div className=" my-3 d-flex             justify-content-between">
          <Box
            onClick={() => deleteOrder()}
            component="button"
            sx={{ width: 1, display: 'block', my: 0.5 }}
          >
            Cancel Order
          </Box>
        </div>
      </div>
    </Grid>
  );
};

export default ManageOrderCart;
