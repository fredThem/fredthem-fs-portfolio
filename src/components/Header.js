import React from "react";
// import PropTypes from "prop-types";
import BrandLogoType from "./BrandLogo";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
  Link,
} from "@material-ui/core/";

// styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Header.module.css";

// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  logoButton: {
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
  logo: {
    height: "199px",
    width: "auto",
    marginLeft: "100px",
  }
}));

export default function Header() {
  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.logoButton}
            color="inherit"
            aria-label="menu"
            className="mr-auto"
          >
            <BrandLogoType className={classes.logo} />
          </IconButton>
          <Link
            component="a"
            href="../assets/files/CV_FredericDesmarais_FullStackDev_ENG.pdf"
            download
            className="mx-3"
            variant="body2"
            color="inherit"
            onClick={() => {
              console.info("Downloading my CV");
            }}
          >
            <span className={styles.hideOnMobile}>Download my</span> CV
          </Link>

          <ButtonGroup
            variant="text"
            // variant="contained"
            color="secondary"
            size="large"
            // aria-label="text primary button group"
          >
            <Button
              color="inherit"
              component="a"
              href="https://github.com/fredThem"
              target="_blank"
              // variant="contained"
            >
              <GitHubIcon color="inherit" />
            </Button>
            <Button
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/fredericDesmarais/"
              target="_blank"
              // variant="contained"
            >
              <LinkedInIcon color="inherit" />
            </Button>

          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// const navIconStyle = {
//   width: "auto",
//   height: "100%",
//   maxHeight: "1.8em",
//   marginLeft: "1em",
// };

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
