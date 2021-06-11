import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MountainBg from "../../assets/images/hero/mountain-background.jpg";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";
import ParallaxBannerStyles from "./ParallaxBanner.module.css";
import "./parallaxHero.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CenteredGrid from './grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const layers = [
    {
      image:
        "https://res.cloudinary.com/hjtkps4jr/image/upload/v1623299221/hero/clouds_ba2bum.svg",
      amount: 0.25,
    },
    {
      image:
        "https://res.cloudinary.com/hjtkps4jr/image/upload/v1623332309/hero/mountain-background_crop_oejast.png",
      amount: 0,
    },
    {
      image:
        "https://res.cloudinary.com/hjtkps4jr/image/upload/v1623367369/hero/mountain-foregroundNme_v2_pgilmp.png",
      amount: 0.2,
    },
  ];

  return (
    <>
      <ParallaxProvider>
        <div className="vertical">
          <div className={ParallaxBannerStyles.bannerContainer}>
            <ParallaxBanner
              className={ParallaxBannerStyles.bannerBg}
              layers={layers}
              style={{ height: "80vh" }}
            >
              <div className={ParallaxBannerStyles.parallaxChildren}>
                <Container maxWidth="sm">
                  <CenteredGrid    />
                  {/* <Typography
                    component="div"
                    style={{ backgroundColor: "none", height: "100%" }}
                    variant="h1"
                    component="h2"
                  >
                    {" "}
                    <Typography
                      component="div"
                      style={{ backgroundColor: "none", height: "100%" }}
                      variant="h1"
                      component="h2"
                    >
                      {" "}
                      h1. Heading
                    </Typography>
                  </Typography> */}
                </Container>
              </div>
            </ParallaxBanner>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default LandingPage;
