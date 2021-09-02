/* eslint-disable no-dupe-keys */
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#ffffff",
    "& a": {
      color: "#121212",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  navbarButton: {
    color: "#121212",
    textTransform: "initial",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: "1rem" },
  // search
  searchSection: {
    display: "none",
    position: "relative",
    webkitFlex: "1 1 0",
    msFlex: "1 1 0",
    flex: "1 1 0",
    maxWidth: 670,
    marginLeft: "auto",
    marginright: "auto",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  searchForm: {
    border: "1px solid #f5f5f5",
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: "#000000",
    "& ::placeholder": {
      color: "#606060",
    },
  },
  iconButton: {
    backgroundColor: "#E7B944",
    padding: 5,
    borderRadius: "0 5px 5px 0",
    "& span": {
      color: "#000000",
    },
  },
  sort: {
    marginRight: 5,
  },
  headerMidle: {
    display: "-webkit-box",
    msFlexPack: "center",
    msFlex: "1 1 0",
    flex: "1 1 0",
    display: "-webkit-flex",
    display: "-ms-flexbox",
    webkitBoxPack: "center",
    webkitJustifyContent: "center",
    justifyContent: "center",
    webkitFlex: "1 1 0",
  },
  formControl: {
    display: "-webkit-inline-box",
    display: "-webkit-inline-flex",
    display: "-ms-inline-flexbox",
    display: "inline-flex",
    webkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    width: "100%",
  },
}));
export default useStyles;
