import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // -----------------------------------------------------------
  // styles off header
  navbar: {
    backgroundColor: "#ffffff",
    '& a': {
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
  // end styles off header
  // -----------------------------------------------------------

  main: {
    minHeight: "80vh",
  },

  // -----------------------------------------------------------
  // styles off footer
  footer: {
    textAlign: "center",
  },
  // end styles off footer
  // -----------------------------------------------------------
});

export default useStyles;