import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
const ArrowsBlock = (props) => {
  return (
    <Grid
      item
      lg={props.xSize}
      xl={props.xSize}
      sx={{
        backgroundColor: "#FFF",
       
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
      md={6}
      sm={12}
      xs={12}
    >
      <ArrowRightOutlinedIcon
        sx={{ width: "70px", height: "70px", color: "#6C6C6C" }}
      ></ArrowRightOutlinedIcon>
      <Box sx={{ display: "flex", gap: "5px" }}>
        <Typography sx={{ fontWeight: "700", fontSize: "2rem" }}>
          {props.numsF}
        </Typography>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ fontSize: "20px" }}>/</Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>{props.numsS}</Typography>
        </Box>
      </Box>
      <ArrowLeftOutlinedIcon
        sx={{ width: "70px", height: "70px", color: "#6C6C6C" }}
      ></ArrowLeftOutlinedIcon>
    </Grid>
  );
};

export default ArrowsBlock;
