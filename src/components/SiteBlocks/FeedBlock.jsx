import React from "react";
import FeedBackItem from "../FeedBackItem";
import ServiceInfo from "../ServiceInfo";
import { Grid, Typography, Box } from "@mui/material";
import EnergyItem from "../EnergyItem";
const FeedBlock = () => {
  return (
    <Grid container>
      <FeedBackItem
        color="#fff"
        text="Together, we'll couple our knowledge, expertise, and innovativ
        capabilities with your astute knowledge of your business—to maximize
        and optimize results. This is all accomplished in a number of ways."
        name="Martin H. Jhonsons"
        grNum="6"
      />
      <ServiceInfo
        grNum="6"
        title="YOUR BUILDING IS
        GOOD HANDS"
        text="Our mission is to provide the. Highest fevel of servicel for our

        client-partners from concept through construction"
        bgColor="#D7D7D7"
        button = "true"
        size="1.7rem"
      />
      <FeedBackItem
        color="#FCF3D2"
        text="When selecting DMCS as the design-build team, clients benefit in terms
        of efficiency and continuity that translate into cost savings and optimized
        schedules. Contact us today and see how DMCS can best serve you from"
        name="Tony SH. Schults"
        grNum="6"
        block="true"
       
      />
      <EnergyItem number="55000" text="Expert Witness" energy="true"/>
      <EnergyItem color="#D7D7D7" number="124600" text="Construction" water="true"/>
      <Grid
        item
        sx={{ width: "293px", height: "293px", backgroundColor: "#2197D7", padding: "20px" }}
        lg={3}
        xl={3}
        md={12}
        sm={12}
        xs={12}
      > 
        <Typography sx={{color: "#fff", fontSize:"1.5rem"}}>NEWS</Typography>
        <Typography sx={{color: "#fff", fontSize:"0.9rem", opacity: "0.8", marginTop: "20px"}}>12 february, 2015</Typography>
        <Typography sx={{color: "#fff", fontSize:"1.3rem"}}>Project Design and Engineering Services</Typography>
        <Typography sx={{color: "#fff", fontSize:"0.9rem", opacity: "0.8", marginTop: "20px"}}>23 comments</Typography>
        <Box sx={{display: "flex", gap: "10px", marginTop: "60px"}}>
        <Box
            sx={{ width: "30px", height: "5px", backgroundColor: "#fff"}}
          ></Box>
          <Box
            sx={{ width: "30px", height: "5px", backgroundColor: "#fff", opacity: "0.5" }}
          ></Box>
            <Box
            sx={{ width: "30px", height: "5px", backgroundColor: "#fff", opacity: "0.5" }}
          ></Box>
        </Box>
      </Grid>
      <FeedBackItem
        color="#fff"
        text="In most urban areas, construction is already built exisring structures, many having been standing for decades"
        name="Tony SH. Schults"
        grNum="3"
      />
      <EnergyItem color="#D7D7D7" number="18000" text="Procurement" gear="true"/>
      <EnergyItem number="78150" text="Project Managments " light="true" />
    </Grid>
  );
};

export default FeedBlock;
