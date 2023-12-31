import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Appbar from '../Shared/Appbar/Appbar';
import Footer from '../Shared/Footer/Footer';
import CourseCard from './CourseCard';

const Courses = () => {
  const { user } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://easy-rent-server-kappa.vercel.app/api/find/courses`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Appbar />
      <Container>
        <Typography variant="h4" fontWeight="bold" pb={2}>
          Welcome
          <span style={{ color: 'orange' }}> {user.displayName}</span>, ready
          for start lesson?
        </Typography>
        <Grid container spacing={2} alignContent="center">
          {data?.map((course) => (
            <CourseCard course={course} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Courses;
