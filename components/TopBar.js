import React from "react";
import Image from "next/image";

import {
  Box,
  Container,
  Hidden,
  Grid,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/mail";


import { useRouter } from "next/router";


import logo from "../public/images/logo.svg";

import useStyles from "../utils/styles/topbar";


export default function TopBar() {
  const classes = useStyles();

  const router = useRouter();

  const changLang = (lang) => {
    router.push("/", "/", { locale: lang});
  }

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
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <FormControl color="#fff" fullWidth margin="normal">
                <Select displayEmpty name="plan">
                  <MenuItem
                    onClick={() => changLang("vi")}
                    color="#fff"
                    value="vi"
                  >
                    VN
                  </MenuItem>
                  <MenuItem
                    onClick={() => changLang("en")}
                    color="#fff"
                    value="en"
                  >
                    EN
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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
