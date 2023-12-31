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

const CustomizedAccordions5 = () => {
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
          <Typography>What do I need to hire?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          To book your car, all you need is a credit or debit card. When you
          pick the car up, you'll need:
          <Typography sx={{ marginLeft: "20px" }}>
            <ul>
              <li>
                Your voucher / eVoucher, to show that you've paid for the car.
              </li>
              <li>
                The main driver's credit / debit card, with enough available
                funds for the car's deposit.
              </li>
              <li>
                Each driver's full, valid driving licence, which they've held
                for at least 12 months (often 24).
              </li>
              <li>
                Your passport and any other ID the car hire company needs to
                see.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What do you must need to rent a car?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol type="i">
              <li>
                To be 25 years old (if you're under 25, you may be required to
                pay a young driver's fee, which varies by rental location)
              </li>
              <li>A valid driver's license with a photo</li>
              <li>A photo ID (For example: a driver's license or passport)</li>
              <li>
                Credit or debit card (check the acceptable forms of payment at
                the location you're renting from)
              </li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default CustomizedAccordions5;
