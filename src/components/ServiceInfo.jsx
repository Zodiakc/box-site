import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";

const ServiceInfo = (props) => {
  return (
    <Grid
      item
      sx={{
        width: "293px",
        height: `${props.height}`,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: `${props.bgColor}`
      }}
      lg={props.grNum}
      xl={props.grNum}
      md={6}
      sm={12}
      xs={12}
    >
      <Typography sx={{fontWeight: "700", fontSize:`${props.size}`}}>{props.title}</Typography>
      <Box
        sx={{ width: "35px", height: "5px", backgroundColor: "#282828" }}
      ></Box>
      <Typography>{props.text}</Typography>
      {props.secondText && <Typography>{props.secondText}</Typography>}
      {props.button && <Button sx={{backgroundColor: "#282828", color: "#fff", marginTop: "40px", width: "40%"}}>ABOUT COMPANY</Button>}
      {props.yellowButton && <Button sx={{backgroundColor: "#FEE402", color: "#282828", marginTop: "60px", width: "60%", fontWeight: "700"}}>ABOUT COMPANY</Button>}
    </Grid>
  );
};

export default ServiceInfo;
