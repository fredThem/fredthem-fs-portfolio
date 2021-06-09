import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";
// import "../../stylesheets/App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
      // main: "#23036A",
    },
    secondary: {
      main: orange[500],
    },
  },
});

export default theme;
