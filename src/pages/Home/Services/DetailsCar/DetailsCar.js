import {  Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./DetailsCar.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";



const DetailsCar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
    
      <Container>
      {/* <Link to="/home"> <Button value="contain">  ⏮</Button></Link> */}
        <div>
          <Grid container spacing={2}>
            <Grid
              item
              spacing={{ xs: 2, md: 3, lg: 5 }}
              columns={{ xs: 10, sm: 5, md: 5, lg: 5 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Car type</p>
                </Grid>
                <Grid item xs={6}>
                  {/* <Button className="text_right" variant="text">Reset</Button> */}
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid
                  item
                  spacing={{ xs: 2, md: 3, lg: 5 }}
                  columns={{ xs: 12, sm: 6, md: 2.4, lg: 2.4 }}
                >
                  <Link className="_btn" to="/small">
                    <div className="small_box">
                      <img
                        width="50px"
                        height="25px"
                        src="https://i.ibb.co/gjz0t4s/2018-Toyota-Noah-X-facelift-removebg-preview.png"
                        alt=""
                      />
                      <p sx={{ align: "center" }}>Small</p>
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  spacing={{ xs: 2, md: 3, lg: 5 }}
                  columns={{ xs: 12, sm: 6, md: 2.4, lg: 2.4 }}
                >
                  <Link className="_btn" to="/medium">
                    <div className="small_box">
                      <img
                        width="50px"
                        height="25px"
                        src="https://th.bing.com/th/id/R.8b54fce0c51f09af18e1ee3d2889287a?rik=Qa4fEblOI8zO7w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-hd-of-cars-car-png-file-png-image-1312.png&ehk=h4Z6LY0yG3Qx7rvd%2fHmMB6F5UTTb%2fwEWkkzu8Pvcmkg%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                      <p sx={{ align: "center" }}>Medium</p>
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  spacing={{ xs: 2, md: 3, lg: 5 }}
                  columns={{ xs: 12, sm: 6, md: 2.4, lg: 2.4 }}
                >
                  <Link className="_btn" to="/large">
                    <div className="small_box">
                      <img
                        width="50px"
                        height="25px"
                        src="https://pngimg.com/uploads/mercedes/mercedes_PNG1898.png"
                        alt=""
                      />
                      <p>Large</p>
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  spacing={{ xs: 2, md: 3, lg: 5 }}
                  columns={{ xs: 12, sm: 6, md: 2.4, lg: 2.4 }}
                >
                  <Link className="_btn" to="/details">
                    <div className="small_box">
                      <img
                        width="50px"
                        height="25px"
                        src="https://freepngimg.com/thumb/mercedes/49-mercedes-car-png-image.png"
                        alt=""
                      />
                      <p sx={{ align: "center" }}>ALL</p>
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              spacing={{ xs: 2, md: 3, lg: 6 }}
              columns={{ xs: 10, sm: 5, md: 5, lg: 5 }}
            >
              <div className="navigation_btn">
                <Box sx={{ width: "100%" }}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >




                    
                    <Link to="/truck">
                      {" "}
                      <BottomNavigationAction
                        label="Small Car"
                        icon={<RestoreIcon />}
                      />{" Truck "}
                    </Link>
                    <Link to="/pickup">
                      {" "}
                      <BottomNavigationAction
                        label="Medium"
                        icon={<FavoriteIcon />}
                      />
                     PickUp
                    </Link>
                    <Link to="/small">
                      <BottomNavigationAction
                        label="Large"
                        icon={<LocationOnIcon />}
                      />
                      Small Car
                    </Link>
                    <Link to="/large">
                      <BottomNavigationAction
                        label="Large"
                        icon={<LocationOnIcon />}
                      />
                      Large Car
                    </Link>
                    <Link to="/details">
                      {" "}
                      <BottomNavigationAction
                        label="All Car"
                        icon={<FavoriteIcon />}
                      />
                      All Car
                    </Link>
                  
                  </BottomNavigation>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default DetailsCar;
