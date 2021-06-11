import { GiPlasticDuck } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import frontEndSVG from "./skillTree/frontEnd.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SkillTreeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        maxWidth="md"
        // style={{ paddingTop: "60px", paddingBottom: "60px" }}
        className={"py-5"}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} className={"border-bottom mb-4"}>
            <div className={"d-flex justify-content-between"}>
              <Typography variant="h3">
                <GiPlasticDuck /> Skill stack
              </Typography>
              <Typography
                variant="subtitle1"
                className={"d-flex justify-content-end align-items-center"}
              >
                <BsFillStarFill className={"mr-2"} /> == years of experience
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <img
              src="https://res.cloudinary.com/hjtkps4jr/image/upload/v1623414566/hero/skill-tree/frontEnd_iwn7dc.png"
              alt=""
              className={"img-fluid"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://res.cloudinary.com/hjtkps4jr/image/upload/v1623414566/hero/skill-tree/backend_ssoyqb.png"
              alt=""
              className={"img-fluid"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://res.cloudinary.com/hjtkps4jr/image/upload/v1623414566/hero/skill-tree/design_x6jfoc.png"
              alt=""
              className={"img-fluid"}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
