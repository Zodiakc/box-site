import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BoltIcon from "@mui/icons-material/Bolt";
import OpacityIcon from "@mui/icons-material/Opacity";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
const EnergyItem = (props) => {
  return (
    <Grid
      item
      lg={3}
      xl={3}
      md={6}
      sm={6}
      xs={12}
      sx={{
        backgroundColor: `${props.color}`,
        width: "293px",
        height: "293px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          backgroundColor: "#FFE400",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.gear && (
          <SettingsIcon
            sx={{ color: "#2197D7", height: "50px", width: "50px" }}
          />
        )}
        {props.light && (
          <LightbulbIcon
            sx={{ color: "#2197D7", height: "50px", width: "50px" }}
          />
        )}
        {props.energy && (
          <BoltIcon sx={{ color: "#2197D7", height: "50px", width: "50px" }} />
        )}
        {props.water && (
          <OpacityIcon
            sx={{ color: "#2197D7", height: "50px", width: "50px" }}
          />
        )}
      </Box>

      <Typography
        sx={{
          color: "#717171",
          fontSize: "1.7rem",
          color: "#6d6d6d",
          marginTop: "20px",
        }}
      >
        {props.number}
      </Typography>
      <Typography
        sx={{ color: "#717171", fontSize: "0.8rem", color: "#868686" }}
      >
        {props.text}
      </Typography>
    </Grid>
  );
};

export default EnergyItem;
