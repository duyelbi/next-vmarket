import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // -----------------------------------------------------------
  // styles of header
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
  // end styles of header
  // -----------------------------------------------------------



  main: {
    minHeight: "80vh",
  },



  // -----------------------------------------------------------
  // styles of product
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  // end styles of product
  // -----------------------------------------------------------



  // -----------------------------------------------------------
  // styles of footer
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  // end styles of footer
  // -----------------------------------------------------------
});

export default useStyles;