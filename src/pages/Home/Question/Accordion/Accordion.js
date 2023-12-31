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



const CustomizedAccordions1 = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container sx={{ marginX: "auto" }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>How can I get driving Licence in Bangladesh?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To obtain a driving licence one should hold a learner driving licence before appearing the driving test. Application for the learner's licence to be submitted to the licensing authority in the prescribed form along with related papers and fees.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Can you drive before 18?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        If you want to drive a car, you'll need to be at least 17 before you can do so on UK roads. There are, however, exceptions to the age limit. You can get a provisional licence and take your car driving test at 16 if you receive the Personal Independence Payment (PIP) that's made to long-term sick or disabled people.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>How long does it take to get a drivers license in Bangladesh?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is issued by Bangladesh Road Transport Authority (BRTA). After getting a learners driving license, you will get 2-3 months for your driving training, and after that you must attend a written and practical test to get the original driving license.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Can I drive in Bangladesh with us licence?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Is a Local Driving Licence Valid in Bangladesh? Tourists, such as U.S. citizens, need an IDP to drive legally in the country. When you are driving to this country, your national driving license can be used, but it would not be enough to present as a legal document.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>What is the difference between professional and non professional drivers license?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        That said, the most significant difference between professional and non-professional driver's license is the kind of vehicles that the bearer can drive. Ultimately, a non professional license holder cannot drive heavy and big vehicles.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>How do I get a smart driver's license?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        How to Apply STEP 1. Open your TIMS account through tims.ntsa.go.ke using your ID and KRA PIN STEP 2: Log into your account and go to the Driving License Section. STEP 3. Click on Apply Smart DL and confirm the driving license details provided.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default CustomizedAccordions1;