import { Container, Grid } from "@mui/material";
import React from "react";
import NurServices from "../NurServices/NurServices";
import DetailsCar from "./DetailsCar";


const MainService = () => {
  return (

    <div>
      <DetailsCar></DetailsCar>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <NurServices></NurServices>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainService;
