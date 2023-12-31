import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



const CustomizedAccordions2 = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container sx={{ marginX: "auto" }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>What is a DNR list?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    A do-not-resuscitate order, or DNR order, is a medical order written by a doctor. It instructs health care providers not to do cardiopulmonary resuscitation (CPR) if a patient's breathing stops or if the patient's heart stops beating.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>What does BCD eligible mean?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Budget Customer Discount (BCD) Entering a promotional/discount code (BCD) will provide a discounted rate on your rental (if the vehicle and rate is available). Look for discount codes in ads and deal descriptions. If a promotional rate is unavailable, the leisure rate will return for that car class.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>How do you be removed from do not rent list?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    They are placed on a Do Not Rent list (DNR) if they are deemed a risk in some way. To end up on the list, the rental company will have a document of violations the customer has committed. It is difficult to get off this list, but there are things you can keep in mind so that you do not end up on it in the first place.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default CustomizedAccordions2;