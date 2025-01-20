import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <img
      src="/iconR.png" 
      alt="Logo"
      className={classes.svgHover}
      style={{ width: "50px", height: "50px" }}
    />
  );
};
