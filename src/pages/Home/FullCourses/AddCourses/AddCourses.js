import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import './AddCourses.css';

const AddCourses = () => {
  const [Courses, setCourses] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    return (dispatch) => {
      axios
        .post('https://easy-rent-server-kappa.vercel.app/courseAdd', data)
        .then((res) => {
          dispatch(setCourses(res.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  };
  return (
    <div>
      <div className="mx-auto">
        <Typography
          variant="h4"
          style={{
            textAlign: 'center',
            fontSize: '70px',
            fontStyle: 'italic',
            margin: '30px auto',
            color: '#E78E52',
          }}
        >
          Add Course Here
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="input-area">
          <input
            {...register('title', { required: true })}
            required
            placeholder="Enter your name"
          />

          <textarea
            {...register('description', { required: true })}
            required
            placeholder="Write description"
            className="mx-auto"
          />

          <input
            {...register('youtube_video_link', { required: true })}
            required
            placeholder="enter img link"
          />

          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};
export default AddCourses;
