import { Collapse, Grid, ListItemButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import Video from "./video";

const Module = ({ module, setVideo, setImage,  setVideoId,videoCompleteId }) => {
  const { name, videos } = module;
  const [open, setOpen] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(128,128,128,.15)",
        borderRadius: "5px",
        mb: 1,
      }}
    >
      <ListItemButton onClick={handleClick}>
        <Grid container alignItems="center" alignContent="space-between">
          <Grid item xs={11}>
            <Typography variant="body1">{name}</Typography>
          </Grid>
          <Grid item xs={1}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Grid>
        </Grid>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {videos?.map((video) => (
          <Video
            key={video?.name}
            video={video}
            setVideo={setVideo}
            setImage={setImage}
            setVideoId={setVideoId}
            videoCompleteId={videoCompleteId}
          ></Video>
        ))}
      </Collapse>
    </Box>
  );
};

export default Module;
