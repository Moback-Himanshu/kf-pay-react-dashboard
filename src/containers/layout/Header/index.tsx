import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as KfLogoWhiteIcon } from "../../../assets/images/group-logo.svg";
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

const settings = ["Profile", "Logout"];

const Header = () => {

  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state: any) => state.userInfo.userInfo);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      const responseData = await editData(process.env.REACT_APP_DOMAIN_URL + "/v1/actions/logout",{})
      console.log('response----',responseData)
      dispatch(logout(responseData.data));
      await persistor.flush();
      localStorage.removeItem('authToken'); 
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
    handleCloseUserMenu(); 
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          display: { xs: "none", sm: "flex", md: "flex" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container alignItems="center">
              <Grid item xs={6} sm={3}>
                <KfLogoWhiteIcon />
              </Grid>
              <Grid item xs={6} sm={6} sx={{ textAlign: "center" }}>
                <KfPay />
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
                  Hi, {userInfo.firstName}
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
                    {/* {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))} */}
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
      </AppBar>
      <Divider variant="middle" />
      {/* <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              <KfLogoWhiteIcon />

              <KfPay />

              <Typography variant="body1">Hi, Himanshu</Typography>
              <Box display="flex" alignItems="center">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu} disableRipple sx={{ p: 0 }}>
                      <Avatar
                        alt="Himanshu"
                        src={AvatarIcon}
                        sx={{
                          height: "22px",
                          width: "22px",
                          marginLeft: "20px",
                        }}
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
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Avatar
                  alt="Avatar 2"
                  src={SettingIcon}
                  sx={{ height: "22px", width: "22px", marginLeft: "20px" }}
                />
				<IconButton disableRipple >
                <Avatar
                  alt="Avatar 3"
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginLeft: "20px",
                    position: "relative",  
					backgroundColor:'white'
                  }}
                >
                <Avatar
                    alt="Avatar 3"
                    src={ReactangleIcon}
					 variant="square"
                    sx={{
                      height: "16px",
                      width: "16px",
                      position: "absolute",
                    }}
                />
                </Avatar>
				</IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}
    </>
  );
};
export default Header;
