import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import { Typography, Grid } from "@material-ui/core";
import "@fontsource/fira-code"; // Defaults to weight 400.
// import { Typography } from '@material-ui/core/Typography';
import { shadows } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "-20%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: "Fira Code",
    fontWeight: "700",
    color: "white",
    textShadow: "1px 1px 1px rgba(0,0,180,0.8), 1px 0px 3px rgba(0,0,100,0.3)",
    // marginBottom: "10px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}

        <Grid item xs={12} sm={8} md={8}>
          <Typography
            // variant="h6"
            // component="h2"
            className={classes.typography}
          >
            {"#"} Freshly certified 🎉{" "}
          </Typography>
          <Typography
            variant="h5"
            // component="h2"
            className={classes.typography}
          >
            {"`<FullStackWebDeveloper/>`"}
          </Typography>
          <Typography className={classes.typography} style={{ margin: "16px" }} >
            {">"} With a technical background in web & graphic design.{" "}
          </Typography>
          <Typography
            // variant="h6"
            // component="h2"
            className={classes.typography}
          >
            {`I_love: [ 
    Coding with a clear and practical style 👾,
    Solving problems🚀,
    Being outdoors ⛰‍,
    Hard rock 👹]`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Typography
            variant="h6"
            // component="h2"
            className={classes.typography}
          >
            Hello world, I’m Fred{'\u2009'}🖐
          </Typography>
          <Typography className={classes.typography}>
            {">"} BASED IN MTL
          </Typography>
          <Typography className={classes.typography}>
            {">"} EN/FR BILINGUAL
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
