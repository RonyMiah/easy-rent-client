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



const CustomizedAccordions6 = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container sx={{ marginX: "auto" }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>How old do I have to be to rent a car?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70, you might have to pay an additional fee.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Can I book a hire car for someone else?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>How do I find the cheapest car hire deal?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We work with all the major international car hire brands (and lots of smaller local companies) to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>What should I look for when I'm choosing a car?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{marginLeft:"20px"}}>
                        <ul>
                            <li>Space: You'll enjoy your rental far more if you choose a car with plenty of room for your passengers and luggage.</li>
                            <li>Fuel policy: Not planning on driving much? A Like for like fuel policy can save you a lot of money.</li>
                            <li>Location: You can't beat an 'on-airport' pick-up for convenience, but an 'off-airport' pick-up with a shuttle bus can be much cheaper.</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default CustomizedAccordions6;