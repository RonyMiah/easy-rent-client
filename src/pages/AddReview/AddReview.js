import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Grid, Typography, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.name = user?.displayName;
    data.imgUrl = user?.photoURL;
    axios
      .post('https://easy-rent-server-kappa.vercel.app/api/addreview', data)
      .then((data) => {
        if (data?.statusText === 'Created') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Review has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(-1);
          reset();
        }
      });
  };
  //change the title when change the route
  useEffect(() => {
    document.title = 'Add Review';
  }, []);
  return (
    <div className="login-container">
      <div className="login-grid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6" component="div" gutterBottom>
            Hi <span style={{ color: 'tomato' }}>{user?.displayName}</span> Your
            Opinion will help us to improve
          </Typography>
          <Grid
            container
            spacing={3}
            maxWidth="lg"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} style={{ paddingTop: '2rem' }}>
              <input
                className="login-input"
                type="text"
                placeholder="Designation"
                label="Designation"
                variant="outlined"
                required
                {...register('designation')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Rating
                </InputLabel>
                <Select {...register('rating')}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={4.5}>4.5</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sx={{ width: '100%' }}>
              <TextField
                fullWidth
                {...register('opinion')}
                id="outlined-textarea"
                label="Your Opinion"
                placeholder="Your Opinion"
                multiline
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </Grid>
            <input type="submit" className="btn solid" />
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
