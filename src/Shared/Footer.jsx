import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Fade from "react-reveal/Fade";
import "../Styles/Footer.css";
import Shape1 from "../Assets/Shapes/shape-1.png";
import Shape2 from "../Assets/Shapes/shape-2.png";

const Footer = () => {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          BugsBytes
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];
  return (
    <Fade up>
      <div className="bg-[#020E09] bg-footer relative w-full">
        <Fade left>
          <img
            className="w-32 absolute bottom-0 -left-0 hidden lg:block"
            src={Shape1}
            alt=""
          />
        </Fade>
        <Fade right>
          <img
            className="w-20 absolute -right-0 hidden lg:block"
            src={Shape2}
            alt=""
          />
        </Fade>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="#fff" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        variant="subtitle1"
                        color="#fff"
                        className="cursor-pointer"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5, color: "#fff" }} />
        </Container>
        {/* End footer */}
      </div>
    </Fade>
  );
};

export default Footer;
