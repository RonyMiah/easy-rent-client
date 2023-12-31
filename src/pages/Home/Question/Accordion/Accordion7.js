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



const CustomizedAccordions7 = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container sx={{ marginX: "auto" }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Are all fees included in the rental price?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes, airport surcharges and any road fees. You'll pay for any 'extras' when you pick your car up, along with any young driver, additional driver or one-way fees - but we'll explain any additional costs before you book your car (and taking your own child seats or GPS can be an easy way to reduce your costs). For more details on what's included, just check the Ts and Cs of any car you're looking at.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>How do we treat hte personal data of children?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Rentalcars.com is a service you are only allowed to use if you are over 18 years of age. We only process information about children with the consent of their parents or legal guardians, or when the information is shared with us by the parents or legal guardians themselves.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>How can you control the personal data you have given us?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You have the right to review the personal data we keep about you at any time. You can request access to or deletion of your personal data by submitting this form. If you want to find out more about your rights to control your personal data, read on.

                        We want you to be in control of how your personal data is used by us.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Who is responsible for the processing of personal data on our platforms?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Booking.com Transport Limited (trading as Rentalcars.com) located in the United Kingdom, controls the processing of personal data for the provision of its services. That includes its websites and mobile apps, except for some exceptions that are clarified in this privacy statement.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default CustomizedAccordions7;