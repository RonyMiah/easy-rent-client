import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import CustomizedAccordions1 from './Accordion/Accordion';
import CustomizedAccordions2 from './Accordion/Accordion2';
import CustomizedAccordions3 from './Accordion/Accordion3';
import CustomizedAccordions4 from './Accordion/Accordion4';
import CustomizedAccordions5 from './Accordion/Accordion5';
import CustomizedAccordions6 from './Accordion/Accordion6';
import CustomizedAccordions7 from './Accordion/Accordion7';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    // children: PropTypes.node,
    // index: PropTypes.number.isRequired,
    // value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Question = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', width: "90%", margin: "10px auto" }}
        >
            <Tabs
                // orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', minWidth: '160px' }}
            >
                <Tab label="License" {...a11yProps(0)} />
                <Tab label="Technical" {...a11yProps(1)} />
                <Tab label="Purpose" {...a11yProps(2)} />
                <Tab label="Payment" {...a11yProps(3)} />
                <Tab label="Needs" {...a11yProps(4)} />
                <Tab label="Frequently Question" {...a11yProps(5)} />
                <Tab label="Additional Info" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <CustomizedAccordions1 />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CustomizedAccordions2 />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CustomizedAccordions3 />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <CustomizedAccordions4 />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <CustomizedAccordions5 />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <CustomizedAccordions6 />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <CustomizedAccordions7 />
            </TabPanel>
        </Box>
    );
};

export default Question;