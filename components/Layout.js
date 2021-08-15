import React from 'react';
import Head from 'next/head';
import {
    Container
} from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

import useStyles from '../utils/styles';

const Layout = ({ title, description, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - V-Market` : `V-Market`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header />
      <Container className={classes.main}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
