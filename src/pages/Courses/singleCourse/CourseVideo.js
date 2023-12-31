import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import Milestone from './Milestone';
import ReactPlayer from 'react-player';
import SearchLesson from './SearchLesson';

const CourseVideo = ({ courseId }) => {
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpdmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
  );
  const [title, setTitle] = useState('Milestone 0: Orientation');
  const [video, setVideo] = useState('');
  const [videoId, setVideoId] = useState();
  const [videoCompleteId, setVideoCompleteId] = useState();
  const [data, setData] = useState();
  // console.log(videoId);
  // console.log(videoCompleteId);

  useEffect(() => {
    fetch(
      `https://easy-rent-server-kappa.vercel.app/api/find/singleCourse/${courseId}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [courseId]);
  // console.log(data);
  return (
    <Container>
      <Grid container textAlign="left" spacing={2} py={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" pb={1}>
            {data?.course}
          </Typography>
          <Box>
            {image && (
              <img
                style={{ width: '100%' }}
                alt="milestone image"
                src={image}
              />
            )}
            {video && (
              <ReactPlayer
                width="100%"
                controls
                url={video}
                onEnded={() => setVideoCompleteId(videoId)}
                onError={() => console.log('onError callback')}
              />
            )}
          </Box>
          <Grid
            container
            alignContent="space-between"
            alignItems="center"
            pt={2}
          >
            <Grid item xs={8}>
              <Typography variant="h6" fontWeight="bold">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button variant="outlined">Previous</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained">Next</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold" pb={1}>
                Course Content
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <ProgressBar />
            </Grid>
            <Grid item xs={12}>
              <SearchLesson />
              <Box
                sx={{
                  width: '100%',
                  background: 'rgba(128,128,128,.15)',
                  maxHeight: '450px',
                  overflow: 'scroll',
                  border: '2px solid rgba(128,128,128,.5)',
                  borderRadius: '5px',
                  overflowX: 'hidden',
                  '&::-webkit-scrollbar': {
                    width: '0.4em',
                  },
                  '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.2)',
                    outline: '1px solid rgba(128,128,128,.55)',
                    borderRadius: '3px',
                  },
                }}
                pl={-2}
              >
                {data?.data?.map((milestone) => (
                  <Milestone
                    key={milestone?.m_id}
                    milestone={milestone}
                    setImage={setImage}
                    setTitle={setTitle}
                    setVideo={setVideo}
                    setVideoId={setVideoId}
                    videoCompleteId={videoCompleteId}
                  ></Milestone>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseVideo;
