import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function ServiceCard({ service }) {
  return (
    <div>
      <Box
        sx={{
          margin: "0 auto",
          cursor: "pointer",
          perspective: "1000px",
          transition: "transform 0.4s",
          "& > div, & > div > div": {
            transition: "inherit",
          },
          "&:hover": {
            "& > div": {
              transform: "rotateY(30deg)",
              "& > div:nth-child(2)": {
                transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
              },
              "& > div:nth-child(3)": {
                transform: "translate3d(45px, 50px, 40px)",
              },
            },
          },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            margin: "0 auto",
            minHeight: "280px",
            width: 320,
            backgroundColor: "#01290C",
            borderColor: "#02411C",
          }}
        >
          <Typography
            sx={{ fontWeight: "800", color: "#6BF176" }}
            level="h2"
            fontSize="lg"
            textColor="#000"
          >
            {service.service}
          </Typography>
          <CardCover
            sx={{
              background: "#02201A",
              border: "1px solid",
              borderColor: "#777",
            }}
          >
            {/* <img
              src="https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg"
              alt=""
            /> */}
          </CardCover>
          <CardContent
            sx={{
              alignItems: "center",
              justifyContent: "flex-end",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
              border: "1px solid",
              borderColor: "#000",
            }}
          >
            <h1 className="text-6xl text-[#6BF176]">{service.icon}</h1>
            <Typography
              sx={{ fontWeight: "800" }}
              level="p"
              textColor="#fff"
              m={3}
            >
              {service.content}
            </Typography>
          </CardContent>
        </Card>
        <h4 className="text-center text-[#6bf176] font-bold text-2xl my-10">
          {service.service}
        </h4>
      </Box>
    </div>
  );
}
