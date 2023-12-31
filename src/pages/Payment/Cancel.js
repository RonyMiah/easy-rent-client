import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const Cancel = () => {
  return (
    <Box sx={{ textAlign: "center", pt: 10 }}>
      <Typography variant="h5">Payment canceled</Typography>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
    </Box>
  );
};

export default Cancel;
