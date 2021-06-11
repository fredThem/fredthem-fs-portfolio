import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import ParallaxBannerStyles from "./ParallaxBanner.module.css";
import "./parallaxHero.css";
import Container from "@material-ui/core/Container";
import CenteredGrid from "./grid";
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
        "https://res.cloudinary.com/hjtkps4jr/image/upload/v1623410463/hero/mountain-background_crop_syugir.png",
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
                <Container maxWidth="md" style={{ marginTop: "-16%" }}>
                  <CenteredGrid />
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
