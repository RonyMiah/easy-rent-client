import { Box, Grid, ListItemButton, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Video = ({
  video,
  setVideo,
  setImage,
  setVideoId,
  videoCompleteId,
}) => {
  const { v_id, name, link } = video;
  // console.log(v_id);
  const setVideoLink = (id) => {
    setVideo(link);
    setImage("");
    setVideoId(id);
  };

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "5px",
        m: 1,
      }}
    >
      <ListItemButton onClick={() => setVideoLink(v_id)} sx={{ bgcolor: "" }}>
        <Grid container alignContent="space-between" alignItems="center">
          <Grid item xs={11}>
            <Typography variant="body1">{name}</Typography>
          </Grid>
          <Grid item xs={1}>
            {videoCompleteId === v_id ? (
              <CheckCircleIcon sx={{ color: "green" }} />
            ) : (
              <CheckCircleOutlineIcon sx={{ color: "green" }} />
            )}
          </Grid>
        </Grid>
      </ListItemButton>
    </Box>
  );
};

export default Video;
