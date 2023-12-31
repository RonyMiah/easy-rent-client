import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../images/404.jpg';
import './Notfound.css';

const NotFound = () => {
  return (
    <div className='notFound'>
      <img style={{ width: '100%', height: '100%' }} src={notfound} alt="" />
      <NavLink className="button" to="/"><Box textAlign='center'>
        <Button style={{
          borderRadius: 35,
          backgroundColor: "#FDAF7E",
          padding: "18px 36px",
          fontSize: "18px"
        }} variant='contained'>
          Go Back
        </Button>
      </Box></NavLink>
    </div>
  );
};

export default NotFound;