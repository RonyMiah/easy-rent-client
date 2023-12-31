import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function PickupLocation({ location, setLocation }) {
  const [open, setOpen] = React.useState(false);
  // console.log(location);
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl sx={{ minWidth: 120, width: "100%" }}>
        {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
        <Select
          // labelId="demo-controlled-open-select-label"
          // id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={location}
          onChange={handleChange}
          displayEmpty
          required
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Dhaka">Dhaka</MenuItem>
          <MenuItem value="Rajshahi">Rajshahi</MenuItem>
          <MenuItem value="Rangpur">Rangpur</MenuItem>
          <MenuItem value="Chittagong">Chittagong</MenuItem>
          <MenuItem value="Khulna">Khulna</MenuItem>
          <MenuItem value="Sylhet">Sylhet</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
