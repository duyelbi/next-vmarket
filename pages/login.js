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
import { getError } from "../utils/error";

import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string("Enter your email")
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});


export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

   const router = useRouter();
   const { redirect } = router.query; // login?redirect=/shipping
   const { state, dispatch } = useContext(Store);
   const { userInfo } = state;
   useEffect(() => {
     if (userInfo) {
       router.push("/");
     }
   }, []);
  

    const classes = useStyles();
      const submitHandler = async ({ email, password }) => {
        closeSnackbar();
        try {
          const { data } = await axios.post("/api/users/login", {
            email,
            password,
          });
          dispatch({ type: "USER_LOGIN", payload: data });
          Cookies.set("userInfo", data);
          router.push(redirect || "/");
        } catch (err) {
          enqueueSnackbar(getError(err), { variant: "error" });
        }
      };
  return (
    <Layout title="Login">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // await sleep(500);
          // alert(JSON.stringify(values, null, 2));
          await submitHandler(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className={classes.form}>
            <Typography component="h1" variant="h1">
              Login
            </Typography>
            <List>
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
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  color="primary"
                >
                  Login
                </Button>
              </ListItem>
              <ListItem>
                Don&apos;t have an account? &nbsp;
                <NextLink
                  href={`/register?redirect=${redirect || "/"}`}
                  passHref
                >
                  <Link>Register</Link>
                </NextLink>
              </ListItem>
            </List>
          </form>
        )}
      </Formik>
    </Layout>
  );
}
