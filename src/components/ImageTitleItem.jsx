import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import DescriptionIcon from '@mui/icons-material/Description';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import SettingsIcon from '@mui/icons-material/Settings';
const ImageTitleItem = (props) => {
  return (
    <Grid
      item
      lg={props.xSize}
      xl={props.xSize}
      sx={{
        backgroundColor: `${props.bgColor}`,

        height: "311px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      md={6}
      sm={12}
      xs={12}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.play && (
          <PlayCircleFilledOutlinedIcon
            sx={{ color: "#594C43", width: "70px", height: "70px" }}
          />
        )}
        {props.file && (
          <DescriptionIcon
          sx={{ color: "#282828", width: "70px", height: "70px" }}
        />
        )}
         {props.point && (
          <PersonPinCircleIcon
          sx={{ color: "#594C43", width: "70px", height: "70px" }}
        />
        )}
        {props.gear && (
          <SettingsIcon
          sx={{ color: "#282828", width: "70px", height: "70px" }}
        />
        )}
        <Typography sx={{ color: `${props.textColor}` }}>
          {props.title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ImageTitleItem;
