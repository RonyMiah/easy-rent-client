import React, { useState } from "react";
import { Collapse, Grid, ListItemButton, Typography } from "@mui/material";
import Module from "./Module";
import { Box } from "@mui/system";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Milestone = ({
  milestone,
  setImage,
  setTitle,
  setVideo,
  setVideoId,
  videoCompleteId
}) => {
  const { name, modules, image } = milestone;
  const [open, setOpen] = useState();

  const handleClick = () => {
    setOpen(!open);
    setImage(image);
    setTitle(name);
    setVideo("");
  };

  return (
    <Box sx={{ background: "#FFFFFF", m: 1, borderRadius: "10px" }}>
      <ListItemButton onClick={handleClick}>
        <Grid container alignItems="center" alignContent="space-between">
          <Grid item xs={11}>
            <Typography
              variant="body1"
              sx={{
                color: "blue",
                fontWeight: "500",
              }}
            >
              {name}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {open ? (
              <IndeterminateCheckBoxIcon sx={{ color: "blue" }} />
            ) : (
              <AddBoxIcon sx={{ color: "blue" }} />
            )}
          </Grid>
        </Grid>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography variant="h6" p={1}>
          {modules?.map((module) => (
            <Module
              key={module?.name}
              module={module}
              setVideo={setVideo}
              setImage={setImage}
              setVideoId={setVideoId}
              videoCompleteId={videoCompleteId}
            ></Module>
          ))}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default Milestone;
