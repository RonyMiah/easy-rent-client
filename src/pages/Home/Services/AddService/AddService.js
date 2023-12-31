import { Button, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddService = () => {

const [serviceData, setServiceData] = useState({})

  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newserviceData = {...serviceData}
    newserviceData[field] = value;
    setServiceData(newserviceData);
    console.log(serviceData);

  };
  const handelFrom = (e) => {
    console.log("Form Added done");

    e.preventDefault();
  };

  return (
    <div>
      <div className="design_popup">
        <Container>
          <Grid container spacing={2}>
            <Grid className="text_center" item sx={12} sm={6} md={6} lg={6}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <form onSubmit={handelFrom}>
                  <div>
                    <TextField
                      id="filled-error"
                      label="Image url"
                      defaultValue=""
                      name="image"
                      variant="filled"
                      onBlur={handelOnChange}
                    />
                    <TextField
                      id="filled-error-helper-text"
                      label="Year"
                      defaultValue=""
                      name="year"
                      variant="filled"
                      type="number"
                      onBlur={handelOnChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="filled-error"
                      label="Car Name"
                      defaultValue=""
                      name="name"
                      variant="filled"
                      onBlur={handelOnChange}
                    />
                    <TextField
                      id="filled-error-helper-text"
                      label="price"
                      defaultValue=""
                      name="price"
                      variant="filled"
                      type="number"
                      onBlur={handelOnChange}
                    />

                    <TextField
                      id="filled-error-helper-text"
                      label="kilo"
                      defaultValue=""
                      name="kilo"
                      variant="filled"
                      type="number"
                      onBlur={handelOnChange}
                    />
                    <TextField
                      id="filled-error-helper-text"
                      label="Car Type Auto or menualy"
                      defaultValue=""
                      name="type"
                      variant="filled"
                      onBlur={handelOnChange}
                    />
                    <TextField
                      id="filled-error-helper-text"
                      label="fuel Type"
                      defaultValue=""
                      name="fuel"
                      variant="filled"
                      onBlur={handelOnChange}
                    />
                    <TextField
                      id="filled-error-helper-text"
                      label="Discount Price"
                      defaultValue=""
                      name="discountPrice"
                      variant="filled"
                      type="number"
                      onBlur={handelOnChange}
                    />
                    <TextField
                      id="filled-error-helper-text"
                      label="Details "
                      defaultValue=""
                      name="details"
                      variant="filled"
                      type="number"
                      onBlur={handelOnChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="button_design"
                    variant="contained"
                    
                  >
                    Add Service
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AddService;
