import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/Img/logo-bb.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#020D0A",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className="w-full flex justify-between">
            <img className="w-10 hidden lg:block" src={logo} alt="" />
            <div className="hidden lg:block">
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Portfolio</Button>
              <Button color="inherit">Contact</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
