import { faCar, faBriefcaseMedical, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import './Facilities.css';

const Facilities = () => {

    // font awesome
    const Car = <FontAwesomeIcon icon={faCar} />
    const support = <FontAwesomeIcon icon={faBriefcaseMedical} />
    const user = <FontAwesomeIcon icon={faUser} />
    const info = <FontAwesomeIcon icon={faCircleInfo} />

    return (
        <div className='facilities'>
            <Box sx={{ mx: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
                            {Car}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
                            500
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
                            Transport Available
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
                            {user}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
                            1500+
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
                            Happy Client
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
                            {info}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
                            Get 10% off for first Raid
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
                            When you sign up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
                            {support}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
                            24/7
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
                            Our Support
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
        // <div className='facilities'>
        //     <Box sx={{ mx: "auto" }}>
        //         <Grid container spacing={2}>
        //             <Grid item xs={12} sm={12} md={3}>
        //                 <Typography sx={{ fontSize: 150, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
        //                     {Car}
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 60, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
        //                     50
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 50, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
        //                     Car Available
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12} sm={12} md={3}>
        //                 <Typography sx={{ fontSize: 150, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
        //                     {user}
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 60, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
        //                     15+
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 50, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
        //                     Happy Client
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12} sm={12} md={3}>
        //                 <Typography sx={{ fontSize: 150, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
        //                     {info}
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 60, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
        //                     Get 10% off 1 Item
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 50, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
        //                     When you sign up
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12} sm={12} md={3}>
        //                 <Typography sx={{ fontSize: 150, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h3">
        //                     {support}
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 60, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h5">
        //                     24/7
        //                 </Typography>
        //                 <Typography sx={{ fontSize: 50, fontWeight: 500, textAlign: "center", m: 2, color: 'white.main' }} variant="h6">
        //                     Our Support
        //                 </Typography>
        //             </Grid>
        //         </Grid>
        //     </Box>
        // </div>
    );
};

export default Facilities;