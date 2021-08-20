import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import useStyles from "../utils/styles/main";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";

import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string("Enter your name")
    .min(2, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your password")
    .oneOf([yup.ref("password")], "Password's not match")
    .required("Required!"),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const classes = useStyles();

  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar();
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: "error" });
      return;
    }
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", data);
      router.push(redirect || "/");
    } catch (err) {
      enqueueSnackbar(
        err.response.data ? err.response.data.message : err.message,
        { variant: "error" }
      );
    }
  };
  return (
    <Layout title="Register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <form className={classes.form} onSubmit={props.handleSubmit}>
            <Typography component="h1" variant="h1">
              Register
            </Typography>
            <List>
              <ListItem>
                <TextField
                  type="text"
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  error={props.touched.name && Boolean(props.errors.name)}
                  helperText={props.touched.name && props.errors.name}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  error={props.touched.email && Boolean(props.errors.email)}
                  helperText={props.touched.email && props.errors.email}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  error={
                    props.touched.password && Boolean(props.errors.password)
                  }
                  helperText={props.touched.password && props.errors.password}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.confirmPassword}
                  error={
                    props.touched.confirmPassword &&
                    Boolean(props.errors.confirmPassword)
                  }
                  helperText={
                    props.touched.confirmPassword &&
                    props.errors.confirmPassword
                  }
                ></TextField>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  color="primary"
                >
                  Register
                </Button>
              </ListItem>
              <ListItem>
                Already have an account? &nbsp;
                <NextLink href={`/login?redirect=${redirect || "/"}`} passHref>
                  <Link>Login</Link>
                </NextLink>
              </ListItem>
            </List>
          </form>
        )}
      </Formik>
    </Layout>
  );
}
