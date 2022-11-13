import React from "react";
import { Box, Grid, Typography, Input, IconButton, TextField } from "@mui/material";
import {makeStyles} from "@mui/material";
import ImageTitleItem from "../ImageTitleItem";
import SearchIcon from "@mui/icons-material/Search";

const DownloadBlock = () => {

  return (
    <Grid container wrap-xs-nowrap>
      <ImageTitleItem
        bgColor="#FFE400"
        xSize="3"
        title="download price"
        textColor="#282828"
        file="true"
      />
      <ImageTitleItem
        xSize="3"
        bgColor="#2197D7"
        title="contact us"
        textColor="#fff"
        point="true"
      />
     
      <Grid
        item
        sm={12}
        xs={12}
        sx={{
          backgroundColor: "#282828",
          position: {md:"absolute", lg:"absolute", xl:"absolute", sm:"relative"},
          right: "0",
          width: "50%",
          height: "311px",
          
          padding: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="What you're looking for"
          sx={{ width: "50%" }}
          variant="standard"
          
        />
         
       
      
        <SearchIcon/>
      </Grid>
    </Grid>
  );
};

export default DownloadBlock;
