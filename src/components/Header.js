import React from "react";
// import PropTypes from "prop-types";
import * as rbs from "react-bootstrap";
// import { Button } from "./Button";
import styles from "./Header.module.css";
import BrandLogoType from "./BrandLogo";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
// import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <BrandLogoType />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link
                component="button"
                variant="body2"
                color="inherit"
                download
                href="src/assets/files/CV_FredericDesmarais_FullStackDev_ENG.pdf"
                onClick={() => {
                  console.info("Downloading my CV");
                }}
              >
                Download my CV
              </Link>
            </Typography>
            <Button color="inherit">
              <GitHubIcon color="inherit" />
            </Button>
            <Button color="inherit">
              <LinkedInIcon color="inherit" />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

const navIconStyle = {
  width: "auto",
  height: "100%",
  maxHeight: "1.8em",
  marginLeft: "1em",
};

export const Header_OLD = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <>
    <rbs.Navbar
      bg="dark"
      variant="dark"
      className="justify-content-between px-3"
    >
      <rbs.Navbar.Brand href="#home">
        <BrandLogoType />
      </rbs.Navbar.Brand>
      <rbs.Nav className="ml-auto">
        <rbs.Nav.Link href="/home">
          <span class="hide-on-mobile">Download my </span>CV
        </rbs.Nav.Link>

        <rbs.Nav.Link eventKey="link-1">
          <FaGithub style={navIconStyle} />
        </rbs.Nav.Link>

        <rbs.Nav.Link eventKey="link-2">
          <FaLinkedin style={navIconStyle} />
        </rbs.Nav.Link>
      </rbs.Nav>
    </rbs.Navbar>
  </>
);

Header.propTypes = {
  // user: PropTypes.shape({}),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  // user: null,
};
