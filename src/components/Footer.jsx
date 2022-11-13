import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-beetween",
        alignItems: "center",
        color: "#D7D7D7",
        flexDirection:{xl:"row", lg:"row", md:"row", sm:"column", xs:"column"}
      }}
    >
      <Typography sx={{ flexGrow: "1", fontSize: "0.7rem" }}>
        2015 @ Copyright - Fountation theme by Stylemixthemes
      </Typography>
      <Box>
        <List sx={{ display: "flex", flexDirection:{xl:"row", lg:"row", md:"row", sm:"row", xs:"column"} }}>
          <ListItem sx={{ fontSize: "0.7rem" }}>Services</ListItem>
          <ListItem sx={{ fontSize: "0.7rem" }}>OurWorks</ListItem>
          <ListItem sx={{ fontSize: "0.7rem" }}>News&events</ListItem>
          <ListItem sx={{ fontSize: "0.7rem" }}>WorkWithUs</ListItem>
          <ListItem sx={{ fontSize: "0.7rem" }}>F.A.Q</ListItem>
          <ListItem sx={{ fontSize: "0.7rem" }}>ContactUs</ListItem>
          <ListItem sx={{ fontSize: "0.7rem" }}>Shop</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
