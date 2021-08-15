import React from 'react';
import Head from 'next/head';
import {
    Typography,
    Container
} from '@material-ui/core';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import useStyles from '../utils/styles';

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>
                    V-Market
                </title>
            </Head>
            <Header />
            <Container className={classes.main}>
                {children}
            </Container>
            <Footer />
        </div>
    );
}

export default Layout;
