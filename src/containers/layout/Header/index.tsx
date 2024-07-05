import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as KfLogoWhiteIcon } from "../../../assets/images/group-logo.svg";
import { ReactComponent as KfMobileLogo } from "../../../assets/images/kf-mobile-logo.svg";
import AvatarIcon from "../../../assets/images/avatar.svg";
import SettingIcon from "../../../assets/images/setting.svg";
import ReactangleIcon from "../../../assets/images/rectangle.svg";
import { ReactComponent as KfPay } from "../../../assets/images/kf-pay.svg";
import { useSelector } from "react-redux";
import { editData } from "../../../services/apiService";
import useAppDispatch from "../../../hooks/use-app-dispatch";
import { AppDispatch, persistor } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/authenticationSlice";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const settings = ["Profile", "Logout"];

const Header = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state: any) => state.userInfo.userInfo);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    try {
      const responseData = await editData(
        process.env.REACT_APP_DOMAIN_URL + "/v1/actions/logout",
        {}
      );
      dispatch(logout(responseData.data));
      await persistor.flush();
      localStorage.removeItem("authToken");
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
    handleCloseUserMenu();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            background: isScrolled
              ? "linear-gradient(to right, rgb(30, 106, 58), rgb(50, 181, 97))"
              : "transparent",
            boxShadow: isScrolled ? "0 2px 4px #00000080" : "none",
            display: { xs: "none", sm: "flex", md: "flex" },
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Grid container alignItems="center">
                <Grid item xs={6} sm={3}>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    {isScrolled ? (
                      <>
                        <KfMobileLogo /> :
                        <Typography
                          variant="h5"
                          sx={{
                            display: {
                              xs: "none",
                              sm: "block",
                            },
                          }}
                        >
                          P A Y
                        </Typography>
                      </>
                    ) : (
                      <KfLogoWhiteIcon />
                    )}
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} sx={{ textAlign: "center" }}>
                  {isScrolled ? (
                    <Link
                      href="#"
                      sx={{
                        typography: "body1",
                        color: "#fff",
                      }}
                      color="inherit"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <KfPay />
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    {isScrolled ? null : `Hi, ${userInfo.firstName}`}
                  </Typography>

                  <Box display="flex" alignItems="center">
                    <Tooltip title="Profile">
                      <IconButton
                        onClick={handleOpenUserMenu}
                        disableRipple
                        sx={{ p: 0, ml: 1 }}
                      >
                        <Avatar
                          alt="Himanshu"
                          src={AvatarIcon}
                          sx={{ height: "22px", width: "22px" }}
                        />
                      </IconButton>
                    </Tooltip>

                    <Menu
                      sx={{ mt: "30px" }}
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
                          key={setting}
                          onClick={
                            setting === "Logout"
                              ? handleLogout
                              : handleCloseUserMenu
                          }
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>

                    <IconButton disableRipple sx={{ ml: 1 }}>
                      <Avatar
                        alt="Setting"
                        src={SettingIcon}
                        sx={{ height: "22px", width: "22px" }}
                      />
                    </IconButton>

                    <Tooltip title="Menu">
                      <IconButton disableRipple sx={{ ml: 1 }}>
                        <Avatar
                          alt="Rectangle"
                          sx={{
                            height: "40px",
                            width: "40px",
                            backgroundColor: "white",
                            position: "relative",
                          }}
                        >
                          <Avatar
                            alt="Rectangle"
                            src={ReactangleIcon}
                            variant="square"
                            sx={{
                              height: "16px",
                              width: "16px",
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          />
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
          {isScrolled ? "" : <Divider variant="middle" />}
        </AppBar>
      </ElevationScroll>
    </>
  );
};
export default Header;
