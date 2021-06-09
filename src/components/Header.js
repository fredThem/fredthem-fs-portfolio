import React from "react";
// import PropTypes from "prop-types";
import BrandLogoType from "./BrandLogo";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
} from "@material-ui/core/";

import { purple } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
// theme
// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import styles from "./Header.module.css";
import DownloadLink from "react-download-link";

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
  buttonText: {},
  buttonGroup: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "right",
  },
}));

export default function Header() {
  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();
  return (
   
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
            aria-label="menu"
            className="mr-auto"
            >
              <BrandLogoType />
            </IconButton>
            
            <Link
              component="button"
              className="mr-3"
              variant="body2"
              color="inherit"
              href="src/assets/files/CV_FredericDesmarais_FullStackDev_ENG.pdf"
              onClick={() => {
                console.info("Downloading my CV");
              }}
            >
              <span className={styles.hideOnMobile}>Download my</span> CV
            </Link>
            {/* <DownloadLink
              label="Save"
              filename="myfile.txt"
              exportFile={() => "Download my CV"}
            /> */}
            
            <ButtonGroup
              variant="text"
              // variant="contained"
              color="secondary"
              size="large"
              // aria-label="text primary button group"
            >
              <Button color="inherit">
                <GitHubIcon color="inherit" />
              </Button>
              <Button color="inherit">
                <LinkedInIcon color="inherit" />
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>

  );
}

const navIconStyle = {
  width: "auto",
  height: "100%",
  maxHeight: "1.8em",
  marginLeft: "1em",
};

// export const Header_OLD = ({ user, onLogin, onLogout, onCreateAccount }) => (
//   <>
//     <rbs.Navbar
//       bg="dark"
//       variant="dark"
//       className="justify-content-between px-3"
//     >
//       <rbs.Navbar.Brand href="#home">
//         <BrandLogoType />
//       </rbs.Navbar.Brand>
//       <rbs.Nav className="ml-auto">
//         <rbs.Nav.Link href="/home">
//           <span class="hide-on-mobile">Download my </span>CV
//         </rbs.Nav.Link>

//         <rbs.Nav.Link eventKey="link-1">
//           <FaGithub style={navIconStyle} />
//         </rbs.Nav.Link>

//         <rbs.Nav.Link eventKey="link-2">
//           <FaLinkedin style={navIconStyle} />
//         </rbs.Nav.Link>
//       </rbs.Nav>
//     </rbs.Navbar>
//   </>
// );

Header.propTypes = {
  // user: PropTypes.shape({}),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  // user: null,
};
