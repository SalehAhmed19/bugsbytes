import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";

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

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Fade down>
        <h1 className="text-3xl lg:text-6xl text-center font-bold text-[#fff] my-10">
          Frequently <br className="block lg:hidden" /> Ask Questions
        </h1>
      </Fade>
      <div className="lg:w-4/5 lg:mx-auto mx-4">
        <Accordion
          sx={{
            borderRadius: "5px",
            margin: "5px 0",
            backgroundColor: "#033C20",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ color: "#6BF176" }}>
              What services does your company provide?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#6BF176" }}>
              Our company provides a range of web development and penetration
              services, including web design, web hosting, web application
              development, security testing, and penetration testing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: "5px",
            margin: "5px 0",
            backgroundColor: "#033C20",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ color: "#6BF176" }}>
              What is the difference between web design and web development?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#6BF176" }}>
              Web design focuses on the visual aspects of a website, such as the
              layout and user interface. Web development focuses on the coding
              and back-end functionality of a website, such as databases and
              server-side scripting.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: "5px",
            margin: "5px 0",
            backgroundColor: "#033C20",
          }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ color: "#6BF176" }}>
              What is security testing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#6BF176" }}>
              Security testing is a process of evaluating the security of a
              website or web application by identifying potential
              vulnerabilities and assessing the level of risk associated with
              them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: "5px",
            margin: "5px 0",
            backgroundColor: "#033C20",
          }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography sx={{ color: "#6BF176" }}>
              What is penetration testing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#6BF176" }}>
              Penetration testing is a type of security testing that involves
              attempting to exploit known vulnerabilities to gain unauthorized
              access to a website or web application.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
