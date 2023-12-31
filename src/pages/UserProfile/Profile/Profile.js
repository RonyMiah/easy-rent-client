import React, { useState } from 'react';
import './Profile.css';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ProfileHome from '../ProfileHome/ProfileHome';
import AddReview from '../../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';

const Profile = () => {
    const [control, setControl] = useState("adminDashboard");

    console.log(control);

    return (
        <div className='profile'>
            {/* <Appbar></Appbar> */}
            <div>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>home</i>
                            <h3>Home</h3>
                        </Link>
                        <Link onClick={() => setControl("profileHome")} className='dashboard-link' to='/profile'><i className='material-icons-sharp'>person_outline</i>
                            <h3>Profile</h3>
                        </Link>
                        <Link onClick={() => setControl("myOrders")} className='dashboard-link' to='/profile'><i className='material-icons-sharp'>receipt_long</i>
                            <h3>My Orders</h3>
                        </Link>
                        <Link onClick={() => setControl("addreview")} className='dashboard-link' to='/profile'><i className='material-icons-sharp'>insights</i>
                            <h3>Add Review</h3>
                        </Link>
                    </Grid>
                    <Grid item xs={10}>
                        {control === "profile" && <ProfileHome></ProfileHome>}
                        {control === "profileHome" && <ProfileHome></ProfileHome>}
                        {control === "myOrders" && <MyOrders></MyOrders>}
                        {control === "addreview" && <AddReview></AddReview>}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Profile;