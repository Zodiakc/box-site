import { Rating, Typography, Box, Grid } from "@mui/material";
import React from "react";

const FeedBackItem = (props) => {
  return (
    <Grid
      item
      xl={props.grNum}
      lg={props.grNum}
      md={6}
      sm={12}
      xs={12}
      sx={{
        backgroundColor: `${props.color}`,
        width: "293px",
        height: "293px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: "#D7D7D7",
        }}
      ></Box>
      <Typography>{props.name}</Typography>
      <Rating defaultValue="5" />
      <Typography sx={{ textAlign: "center" }}>{props.text}</Typography>
      {props.block && (
        <Box sx={{display: "flex", gap: "10px"}}>
          <Box
            sx={{ width: "30px", height: "5px", backgroundColor: "#282828", opacity: "0.5"}}
          ></Box>
          <Box
            sx={{ width: "30px", height: "5px", backgroundColor: "#282828" }}
          ></Box>
        </Box>
      )}
    </Grid>
  );
};

export default FeedBackItem;
