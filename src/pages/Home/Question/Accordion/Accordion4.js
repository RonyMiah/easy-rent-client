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

const CustomizedAccordions4 = () => {
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
          <Typography>Renting a Car with a Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A credit card must be presented with available credit, in the
            renter's name. The signature must match the name imprinted on the
            card and the signature on the car rental agreement. For online
            reservations, the number and name printed on the card presented must
            match the name and number stored for the online reservation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What are the payment method of rental system?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "20px" }}>
            <ol type="i">
              <li>
                Credit Cards accepted: American Express®, Mastercard®, VISA® and
                Discover® Network
              </li>
              <li>
                Credit Cards accepted in Canada: American Express®, MasterCard®,
                and VISA®
              </li>
              <li>
                Credit Cards accepted in Puerto Rico: American Express,
                Mastercard, VISA, Diners Club and Discover Network.
              </li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Renting a Car with a Debit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Debit/Check cards are considered to be any non-credit card bearing
            the VISA, Mastercard® or Discover logo. Pre-paid cards or any other
            non-credit card without one of these logos is not accepted.
            (Discover not accepted in Canada.)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default CustomizedAccordions4;
