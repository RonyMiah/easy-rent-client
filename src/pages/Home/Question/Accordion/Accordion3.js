import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const CustomizedAccordions3 = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ marginX: "auto" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is the purpose of car rental service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Car rental agencies primarily serve people who require a temporary
            vehicle, for example, those who do not own their own car, travelers
            who are out of town, or owners of damaged or destroyed vehicles who
            are awaiting repair or insurance compensation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What are the benefits of car rental system?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "20px" }}>
            <ol type="i">
              <li>
                Save time. Getting around with a car is faster than public
                transport.{" "}
              </li>
              <li>
                Discover more. Travelers are limited when traveling around with
                public transport.{" "}
              </li>
              <li>Feel like a local. </li>
              <li>It's cheaper.</li>
              <li>There are no taxis around. </li>
              <li>Don't carry your luggage around. </li>
              <li>Door to door transportation.</li>
              <li>No waiting times.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is a car rental system?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            CAR RENTAL SYSTEM (CRS) is a web based system for a company that
            rents out cars. This system enables the company to make their
            services available to the public through the internet and also keep
            records about their services.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default CustomizedAccordions3;
