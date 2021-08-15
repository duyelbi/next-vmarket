import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>
                    V-Market
                </title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        V-market
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights resered . V-Market
                </Typography>
            </footer>
        </div>
    );
}

export default Layout;
