import React, { useEffect, useState } from "react";
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import './Clock.css'

const Clock = () => {
    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    }, []);


    return (

        <Box style={{
            fontSize: "20px", marginBottom: "20px", backgroundColor: '#202020',
        }}>

            <Container className="container2">

                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <span className="title">
                            <span className="title-word title-word-1">Find the best </span>
                            <span className="title-word title-word-2">car rental deals. </span>
                            <span className="title-word title-word-3">Search and </span>
                            <span className="title-word title-word-4">compare rental</span>
                        </span>
                    </Grid>
                    <Grid className='clock' item xs={2}>
                        <span >
                            {clock}
                        </span>
                    </Grid>
                </Grid>

            </Container>



        </Box>
    )
}

export default Clock;


