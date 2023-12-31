import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from '../../../images/bgi2.jpg'
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ProfileHome = () => {
    const { user, logOut } = useAuth();
    console.log(user?.photoURL);

    return (
        <div>
            <Box>
                <Card sx={{ maxWidth: 1600, marginTop: 0, marginLeft: 0, marginRight: 0 }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image}
                        alt="Profile"
                    />
                    <CardContent>
                        <img className='img' src={user?.photoURL} alt="" />
                        <Typography gutterBottom variant="h5" component="div">
                            {user?.displayName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: {user?.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {user?.email && <Link className='single-link' to="/login">
                            <button className='logout-btn' onClick={logOut}>Logout</button>
                        </Link>
                        }
                        {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
};

export default ProfileHome;