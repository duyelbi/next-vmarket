import React, { useState } from "react";
import Image from "next/image";

import {
  Box,
  Container,
  Hidden,
  MenuItem,
  Button,
  Select,
  Popover,
  Paper,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/mail";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useRouter } from "next/router";

import logo from "../public/images/logo.svg";

import useStyles from "../utils/styles/topbar";

export default function TopBar() {
  const classes = useStyles();

  const router = useRouter();

  const [locale, setLocale] = useState("VN");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setLocale(event.target.value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changLang = (lang) => {
    router.push("/", "/", { locale: lang });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Box display="flex" alignItems="center" className={classes.topbarRight}>
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            {locale}
            <ArrowDropDownIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            // transformOrigin={{
            //   vertical: "top",
            //   horizontal: "center",
            // }}
          >
            <Paper variant="outlined">
              <Select
                displayEmpty
                labelId="controlled-open-select-label"
                id="controlled-open-select"
                open={open}
                onClose={handleClose}
                onChange={handleChange}
              >
                <MenuItem onClick={() => changLang("vi")} value="VN">
                  VN
                </MenuItem>
                <MenuItem onClick={() => changLang("en")} value="EN">
                  EN
                </MenuItem>
              </Select>
            </Paper>
          </Popover>
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
