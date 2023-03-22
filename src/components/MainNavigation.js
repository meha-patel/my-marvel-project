import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { toggleTheme } from "../store/actions/theme-actions";
import { useDispatch } from "react-redux";
import { logout, auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function MainNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [user] = useAuthState(auth);
  let pages = [];
  let settings = [];
  if (!user) {
    settings = [
      { id: 1, name: "Login" },
      { id: 2, name: "Register" },
    ];
  } else {
    settings = [{ id: 1, name: "Logout" }];
    pages = [
      { title: "Marvel Characters", link: "/marvel/characters/list" },
      { title: "Favourite Characters", link: "marvel/fav/chars/list" },
    ];
  }

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleThemeChange = () => {
    dispatch(toggleTheme(theme.palette.mode === "dark" ? "light" : "dark"));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settingHandler = (setting) => {
    handleCloseUserMenu();
    if (setting === "Logout") {
      logout();
      navigate("/login");
    } else if (setting === "Login") {
      navigate("/login");
    } else if (setting === "Register") {
      navigate("/register");
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MY MARVElS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              {pages &&
                pages.map((page) => (
                  <MenuItem
                    containerelement={
                      <NavLink
                        to={page.link}
                        key={page.title}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        {page.title}
                      </NavLink>
                    }
                    component={Link}
                    href={page.link}
                    key={page.title}
                  >
                    <Button textalign="center">{page.title}</Button>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MY MARVELS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={page.link}
                key={page.title}
                style={{ textDecoration: "none", display: "block" }}
              >
                <Button
                  key={page.title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Theme">
              <IconButton onClick={handleThemeChange} sx={{ p: 0, mr: 4 }}>
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{user && user.displayName[0]}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.id}
                  onClick={() => {
                    settingHandler(setting.name);
                  }}
                >
                  <Typography textalign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainNavigation;
