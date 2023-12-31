import { Typography } from '@mui/material';
import React from 'react';
import Question from './Question';

const HomeQuestion = () => {
    return (
        <div>
            <Typography variant="h3" textAlign='center' sx={{ my: 3 }}>
                Do you have any Question?
            </Typography>
            <Question></Question>
        </div>
    );
};

export default HomeQuestion;