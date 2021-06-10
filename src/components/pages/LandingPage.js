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
        "https://res.cloudinary.com/hjtkps4jr/image/upload/v1623298541/hero/mountain-background_crop_hhcwxe.png",
      amount: 0.25,
    },
    {
      image:
        "https://res.cloudinary.com/hjtkps4jr/image/upload/v1623298291/hero/mountain-foregroundNme_mmnsl0.png",
      amount: 0,
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
              style={{ height: "95vh" }}
            >
              <h1> hello world</h1>
            </ParallaxBanner>
          </div>
        </div>
        <div className="vertical">
          <div className={ParallaxBannerStyles.bannerContainer}>
            <ParallaxBanner
              className={ParallaxBannerStyles.bannerBg}
              layers={layers}
              style={{ height: "75vh" }}
            >
              <h1> hello world</h1>
            </ParallaxBanner>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default LandingPage;
