import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  height: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#111111",
    height: "100px",
  },
  color: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.height}>
      <Box display="flex" alignItems="flex-end" className={classes.color}>
        <Typography>Leandro Garassino 2021©</Typography>
      </Box>
    </Box>
  );
};
