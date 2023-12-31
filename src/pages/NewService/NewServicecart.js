import React from 'react'
import Grid from "@mui/material/Grid";

const NewServicecart = ({alldata}) => {
    const {carName, image, people, type, mileage, enhanced, shuttle, cancellation, payAt, recommend, cost, carType}= alldata;
  return (
    <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 5 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <img src={image} alt="" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <p>{carType}</p>
                <p>{carName}</p>
                <div>
                <p>{people}</p>
                <p>{type}</p>
                </div>
                <p>{mileage}</p>
                <p>{enhanced}</p>
                <p>{shuttle}</p>
                
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <p>{cancellation}</p>
            <p>{payAt}</p>
            <p>{recommend}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <h3>{cost}</h3>
            </Grid>
        </Grid>
    </div>
  )
}

export default NewServicecart