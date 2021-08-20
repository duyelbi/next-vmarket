/* eslint-disable no-dupe-keys */
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // ---------------STYLES HEADER-----------------------
  // start style top bar
  topbar: {
    backgroundColor: "#0f3460",
    color: "#fff",
    height: 40,
    fontSize: 12,
  },

  Container: {
    height: 40,
  },

  title: {
    marginLeft: 10,
  },

  topbarContainer: {
    width: "100%",
    marginLeft: "auto",
    boxsizing: "border-box",
    marginRight: "auto",
    display: "block",
    paddingLeft: 16,
    paddingright: 16,
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "-ms-flexbox",
    display: "flex",
    webkitBoxPack: "justify",
    webkitJustifyCenter: "space-between",
    justifyContent: "space-between",
    webkitAlignItems: "center",
    webkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center",
    height: "100%",
  },

  boxRight: {
    marginLeft: 20,
  },

  button: {
    color: "#fff",
  },

  [theme.breakpoints.up('sm')]: {
    topbarContainer: {
      paddingleft: 24,
      paddingRight: 24,
    },
  },
   
  [theme.breakpoints.up('md')]: {
    topbarContainer: {
      maxwidth: 1200,
    },
  },
  [theme.breakpoints.up('sm')]: {
    topbarContainer: {
      paddingLeft:"1rem",
      paddingRight: "1rem",
    },
  },
}));
export default useStyles;
