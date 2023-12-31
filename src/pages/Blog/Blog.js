import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import BlogCart from './BlogCart';
import Grid from '@mui/material/Grid';
import Appbar from '../Shared/Appbar/Appbar';
import NurFooter from '../Shared/Footer/NurFooter';
import './Blog.css';

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('https://easy-rent-server-kappa.vercel.app/api/getblogs')
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <Appbar></Appbar>
      <div className="blogbody">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 5 }}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          >
            <Grid item xs={12} sm={6} md={4} lg={2}></Grid>

            <Grid item xs={12} sm={12} md={8} lg={8}>
              {blog.map((data) => (
                <BlogCart alldata={data} key={data._id}></BlogCart>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2}></Grid>
          </Grid>
        </Container>
      </div>
      <NurFooter></NurFooter>
    </div>
  );
};

export default Blog;
