import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import "./CleanCar.css";

const CleanCar = () => {

  const handelOnclick = () =>{
    alert("Email send")
  }

  return (
    <div className="main_card">
      <Container maxWidth="sx">
        <Grid container spacing={2}>
          <Grid className="clean_card" md={6} sm={12} item >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  className="clean_image"
                  width="100px"
                  height="100px"
                  src="https://i.ibb.co/6vXxnMB/thumbnail-covid-1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={8}>
                <h2>Clean cars. Flexible bookings. Socially</h2>
                <h3>distant rental counters.</h3>
                <p>
                  We’re working with our partners to keep you safe and in the
                  driving seat.
                </p>
                <a href="#">Find out more</a>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="clean_card" md={6} sm={12} item >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  className="clean_image"
                  width="100px"
                  height="100px"
                  src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/email-subscription/desktop/email_signup@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={8}>
                <h2>Subscribe for exclusive offers and deals!</h2>
            
                <TextField
                 
                  label="Email Me "
                  id="outlined-size-small"
                  variant="outlined"
                  
                  size="small"
                  required
                />
                <Button onclick={handelOnclick} className="margin_top" variant="contained">
                 Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CleanCar;
