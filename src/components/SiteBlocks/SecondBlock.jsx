import React from "react";
import { Grid } from "@mui/material";
import ServiceInfo from "../ServiceInfo";
import ArrowsBlock from "../ArrowsBlock";
const SecondBlock = () => {
  return (
    <Grid container>
      <ServiceInfo
        title="Our services"
        text="Our mission is to provide the
         highest level of service for our
        client-partners from concept,
        through construction"
        size="1.8rem"
        grNum="3"

      />
      <Grid
        item
        sx={{ width: "293px", height: "293px", backgroundColor: "#D7D7D7", display: {md: "none", xs: "none", sm: "none", lg: "block", xl:"block"} }}
        xs={3}
      ></Grid>
      <ServiceInfo
        title="
        General contracting"
        text="This allows the Design and
        Engineering team to originate
        drawings, specifications,
        structural calculations, details
        land scopes of work that deliver
        ‘exactly what the client had
        intended to achieve."
        size="1.2rem"
        grNum="3"
      />
      <Grid
        item
        sx={{ width: "293px", height: "293px", backgroundColor: "#D7D7D7", display: {md: "none", xs: "none", sm: "none", lg: "block", xl:"block"} }}
        xs={3}
        
      ></Grid>
      <ArrowsBlock numsF="03" numsS="06" xSize={3}/>
      <ServiceInfo
        title="Project design
        and engineering"
        text="Through Stage-Gate, Design and
        Engineering methodology,
        DMCS ensure client-partners
        realize clearly defined project
        objective to achieve intended
        results."
        size="1.2rem"
        grNum="3"
      />
      <Grid
        item
        sx={{ width: "293px", height: "293px", backgroundColor: "#D7D7D7", display: {md: "none", xs: "none", sm: "none", lg: "block", xl:"block"} }}
        xs={3}
      ></Grid>
      <ServiceInfo
        title="
        Capital
        improvements"
        text="
        This results in scope creep and
        slippage of the schedule that
        ultimately result in additional
        costs to the owner."
        size="1.2rem"
        grNum="3"
      />
    </Grid>
  );
};

export default SecondBlock;
