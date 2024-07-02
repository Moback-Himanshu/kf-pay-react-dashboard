import React, { useState } from "react";
import {
  Grid,
  Link,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import Logo from "../../../assets/images/login/logo_new_dark.svg";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../../hooks/use-app-dispatch";
import { AppDispatch } from "../../../redux/store";
import { login } from "../../../redux/slices/authenticationSlice";
import { postData } from "../../../services/apiService";
import GlobalTextField from "../../../components/TextField";
import GlobalButton from "../../../components/Button";
import { CheckAccount } from "../../../common/types/auth-types";

interface State {
  username: string;
  password: string;
}

const initialState: State = {
  username: "",
  password: "",
};

const Login = () => {
  // const [showLoader, setShowLoader] = useState(true);
  const [state, setState] = useState<State>(initialState);

  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const userData: CheckAccount = {
      username: state.username,
      password: state.password,
    };

    try {
      const responseData = await postData(
        process.env.REACT_APP_DOMAIN_URL + "/v1/actions/login",
        {
          ...userData,
        }
      );
      localStorage.setItem("authToken", responseData.data.authToken);
      dispatch(login(responseData.data));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={8} md={7}></Grid>
        <Grid item xs={4} md={5}>
          <Box component="header" sx={{ pt: 2 }}>
            <Container
              sx={{
                maxWidth: {
                  xs: 350,
                  lg: 400,
                },
                px: {
                  xs: 0,
                },
              }}
            >
              <Link>
                <Box component="img" src={Logo} alt="KF Digital Logo" />
              </Link>
            </Container>
          </Box>
          <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 2, color: "text.primary", textAlign: "center" }}
            >
              Login to your account !!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={8}>
                  <GlobalTextField
                    name="username"
                    type="text"
                    placeholder="Enter the Email or UserName"
                    value={state.username}
                    onChange={handleChange}
                    label="Username"
                    fullWidth ={true}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <GlobalTextField
                    name="password"
                    type="password"
                    placeholder="Enter the Password"
                    value={state.password}
                    onChange={handleChange}
                    label="Password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <GlobalButton
                    color="primary"
                    variant="contained"
                    disabled={false}
                    size="medium"
                    buttonText="Login"
                    onClick={handleSubmit}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
        </Grid>
      </Grid>
      {/* Circular progress */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <CircularProgress size={60} />
      </Box>
    </>
  );
};

export default Login;
