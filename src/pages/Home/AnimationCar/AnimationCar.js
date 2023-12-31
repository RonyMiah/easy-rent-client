import { Box, Container, Grid } from "@mui/material";
import animationCar from "../../../Asset/mobailApp.svg";
import "./AnimationCar.css";

const AnimationCar = () => {
  return (
    <div className="animation_main">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <img width="90%" height="90%" src={animationCar} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ mt: "5%", fontSize: 18, mx: 10 }}>
              <h1>
                <b style={{ color: "#2196f3" }}> Our Apps</b> <br />{" "}
                <span style={{ color: "#FF4F5A" }}>Coming Soon...</span>
              </h1>
              <h3> Using App First Time Get 20% Discount !! </h3>
              <p>
                Earn double Expedia Rewards points when you book on the app.
                Plus, get travel alerts and manage your bookings on the go.
              </p>
              <button className="discover_btn">Download Now</button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AnimationCar;
