import React from "react";
import { Grid, Typography, Box, TextField } from "@mui/material";
import ServiceInfo from "../ServiceInfo";
import ArrowsBlock from "../ArrowsBlock";
import ImageTitleItem from "../ImageTitleItem";

const LastBlock = () => {
  return (
    <Grid container>
      <Grid item xl = {6} lg={6} md={12} sm={12} xs={12}>
        <Box sx={{ display: "flex" }}>
          <ServiceInfo
            title="Contemporary
            Villa"
            text="Diversity is a buzzword often
            heard by brand managers,
            business tycoons, politicians,
            and more; but it's much more
            than that. To us at DM
            Construction, diversity is the
            name of the game.
            "
            secondText="We offer a diverse set of skills to
            all clients in all fields, but also
            offer a diverse group of
            individuals who are able to
            
            deliver those skills. From
            "
            
            size="1.7rem"
            yellowButton="true"
          />
          <Box sx={{ backgroundColor: "#D7D7D7", width: "293px", display: { xs: "none", sm: "none", md: "none", lg: "block", xl:"block" } }}></Box>
        </Box>
      </Grid>

      <Grid item container lg={6} xl={6} md={12} sm={12} xs={12}>
        <Grid item xs={6} sx={{ backgroundColor: "#D7D7D7", display: { xs: "none", sm: "none", md: "none", lg: "block", xl:"block" } }}></Grid>
        <ImageTitleItem
          xSize="6"
          bgColor="#FFE400"
          title="work with us"
          textColor="#282828"
          gear="true"
        />
        <ArrowsBlock xSize="6" numsF="01" numsS="09" />
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12} sx={{ backgroundColor: "#2197D7", padding: "20px" }}>
          <Typography
            sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: "700" }}
          >
            SUBSCRIBE
          </Typography>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "40px",
              height: "5px",
              marginTop: "5px",
            }}
          ></Box>
          <TextField
            label="E-mail"
            variant="filled"
            sx={{ backgroundColor: "#fff", width: "100%", marginTop: "70px" }}
          ></TextField>
          <Typography
            sx={{
              textAlign: "right",
              fontSize: "0.7rem",
              color: "#fff",
              marginTop: "5px",
            }}
          >
            SIGN UP
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LastBlock;
