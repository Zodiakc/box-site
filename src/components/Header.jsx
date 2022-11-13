import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/system";

const Header = () => {
  return (
    <Toolbar sx={{ padding: "0px" }}>
      <Typography sx={{ flexGrow: 1, fontWeight: "800", fontSize: "2rem" }}>
        Logo
      </Typography>
      <Box sx={{ display: "flex", gap: {xl: "40px", lg: "40px", md: "40px", sm:"30px", xs:"20px"} }}>
        <FacebookOutlinedIcon sx={{ color: "#fff" }} />
        <img src="twitter.svg" alt="#" />
          <ShoppingCartOutlinedIcon sx={{ color: "#fff" }} />
        <Box
          sx={{
            width: "14px",
            height: "14px",
            backgroundColor: "#FEE300",
            position: "absolute",
            fontSize: "0.6rem",
            textAlign: "center",
            zIndex: "2",
            top: "10%",
            right: {xl: "7%", lg:"7%", md:"7.5%", sm:"9%", xs: "8%"},
          }}
        >
          99
        </Box>
        <MenuIcon sx={{ color: "#fff" }} />
      </Box>
    </Toolbar>
  );
};

export default Header;
