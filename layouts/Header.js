import React from 'react';
import NextLink from "next/link";
import {
    AppBar,
    Link,
    Toolbar,
    Typography,
} from "@material-ui/core";

import useStyles from "../utils/styles";

const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>V-Market</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default Header;
