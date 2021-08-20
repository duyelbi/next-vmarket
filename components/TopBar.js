import React from "react";
import Image from "next/image";

import { Box, Button, Container, Hidden, } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/mail";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useRouter } from "next/router";


import logo from "../public/images/logo.svg";

import useStyles from "../utils/styles/topbar";

export default function TopBar() {
  const classes = useStyles();

  const router = useRouter();

  const changeLang = (lang) => {
    router.push("/", "/", { locale: lang });
  };

  return (
    <div className={classes.topbar}>
      <Container className={classes.topbarContainer}>
        <Box display="flex" alignItems="center" className={classes.topbarLeft}>
          <Hidden mdUp>
            <div className={classes.logoTopBar} topbarItem>
              <Image display="block" src={logo} alt="logo" height={28}></Image>
            </div>
          </Hidden>
          <Hidden smDown>
            <Box display="flex" alignItems="center" className={classes.boxLeft}>
              <PhoneIcon fontSize="small" />
              <span className={classes.title}>+84379838974</span>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              className={classes.boxRight}
            >
              <MailIcon fontSize="small" />
              <span className={classes.title}>duylanh1818@gmail.com</span>
            </Box>
          </Hidden>
        </Box>
        <Box display="flex" alignItems="center" className={classes.topbarLeft}>
          <Button className={classes.button} onClick={() => changeLang("en")}>
            <span>EN</span>
            <ExpandMoreIcon fontSize="inherit" />
          </Button>
          <Button className={classes.button} onClick={() => changeLang("vi")}>
            <span>VN</span>
            <ExpandMoreIcon fontSize="inherit" />
          </Button>
        </Box>
      </Container>
    </div>
  );
}

// export const getStaticProps = async ({ locale }) => 
// {
//     const res = await fetch(`https//your-api.xyz`, { locale })
//     return { props }
// }
