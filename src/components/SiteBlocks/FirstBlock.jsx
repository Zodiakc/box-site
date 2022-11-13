import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import Header from "../Header";
import ArrowsBlock from "../ArrowsBlock";
import ImageTitleItem from "../ImageTitleItem";
const FirstBlock = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#D7D7D7",
          position: "absolute",
          width: {xl:"65.2%", lg: "70%", md:"70%", sm:"0%", xs:"0%"},
          left: "0",
          top: "0",
          zIndex: "-1",
          height: "658px",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#282828",
          position: "absolute",
          width: {xl: "34.8%", lg:"30%", md: "30%", sm:"100%", xs: "100%"},
          right: "0",
          top: "0",
          zIndex: "-1",
          height: "658px",
        }}
      ></Box>
      <Header />
      <Grid container>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            backgroundColor: "#FFE400",
            width: "293px",
            
            padding: "20px 30px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#FFE400",
              fontWeight: "700",
              fontSize: "1.5rem",
            }}
          >
            BULDING THE <br /> WORLD AROUND AS
          </Typography>
          <Box
            sx={{ width: "35px", height: "5px", backgroundColor: "#282828" }}
          ></Box>
          <Typography sx={{ backgroundColor: "#FFE400" }}>
            Still other clients have reserved for capital improvement projets
            and will work directly with our Design and Engineering team.{" "}
          </Typography>
          <Button
            sx={{
              backgroundColor: "#282828",
              color: "#FFF",
              borderRadius: "0px",
              width: "150px",
              padding: "10px 15px",
              marginTop: "35px",
            }}
          >
            Read more
          </Button>
        </Grid>
        <Grid
          item
          xs={3}
          
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl:"block" }}}
        ></Grid>
        <ArrowsBlock numsF="01" numsS="03" xSize="3"/>
        <Grid item xs={6} sx={{ width: "293px", height: "293px", display: { xs: "none", sm: "none", md: "block", lg: "block", xl:"block" } }}></Grid>
        <ImageTitleItem
          xSize="3"
          bgColor="#2197D7"
          title="company video"
          textColor="#fff"
          play="true"
        />
        
      </Grid>
    </div>
  );
};

export default FirstBlock;
