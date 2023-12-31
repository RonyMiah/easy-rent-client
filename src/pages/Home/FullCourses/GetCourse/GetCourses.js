import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import './GetCourses.css';

const GetCourses = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/course/allCourse')
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleAlert = (id) => {
    Swal.fire(
      'Good job!',
      'You successfully completed this course!',
      'success'
    );
  };

  return (
    <>
      <Container className=" my-5 ">
        <div className="pricing-text">
          <h1>Become A Safer</h1>
          <p>
            Good ideas deserve good company, and as a certified B Corporation™
            we strive to use our business as a force for good.mental health{' '}
            <br /> to donating 30% of our advertising space to support artists
            we admire and causes we care about
          </p>
        </div>

        <Grid container spacing={2} sx={{ my: '20px' }}>
          {allCourses.map((allCourse) => (
            <Grid
              xs={12}
              md={3}
              sx={{ mx: '20px', my: '10px' }}
              key={allCourse._id}
              service={allCourse}
            >
              <iframe
                width="300"
                height="200"
                src={allCourse.youtube_video_link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {allCourse.title}
              </Typography>

              <Typography>{allCourse.description}</Typography>
              <Box className="btn-color">
                <Button
                  sx={{
                    backgroundColor: '#f47e12',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                  onClick={handleAlert}
                >
                  Complete Course
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default GetCourses;
