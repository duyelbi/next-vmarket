import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from "../utils/styles";

const Footer = () => {
    const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <Typography>All rights resered . V-Market</Typography>
      </footer>
    );
}

export default Footer;
