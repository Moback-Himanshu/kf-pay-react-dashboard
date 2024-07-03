import React, { useCallback, useEffect} from "react";
import QuickToolsCard from "../../../components/QuickToolCard";
import MyMarketCard from "../../../components/MyMarketCard";
import GlobalPayLandscape from "../../../components/GlobalPayLandscape";
import SingleJobCard from "../../../components/SingleJobCard";
import IndustryNews from "../../../components/IndustryNews";
import ListenCard from "../../../components/ListenCard";
import { Box, Grid, Link, Typography } from "@mui/material";
import useAppDispatch from "../../../hooks/use-app-dispatch";
import { AppDispatch } from "../../../redux/store";
import { setActionUserInfo } from "../../../redux/slices/userInfoSlice";
import { getData } from "../../../services/apiService";
import { useSelector } from "react-redux";
import {
  setCompaRatio,
} from "../../../redux/slices/compaRatioSlice";


const Dashboard = (props: any) => {
  const user = useSelector((state: any) => state.authentication);
  const userInfo = useSelector((state: any) => state.userInfo.userInfo);
  const compaRatioList = useSelector((state: any) => state.compaRatio.compaRatio);
  const dispatch: AppDispatch = useAppDispatch();

  const firstCountryName = compaRatioList && compaRatioList.length > 0 ? compaRatioList[0].countryName : "";
  const firstCountryCompaRatio = compaRatioList && compaRatioList.length > 0 ? compaRatioList[0].compratiopercent : "";

  const getUserData = useCallback(async () => {
    try {
      const responseData = await getData(
        process.env.REACT_APP_DOMAIN_URL + `/v1/users/${user.loginInfo.userId}`
      );
      dispatch(setActionUserInfo(responseData.data));
    } catch (error) {
      console.error("Error during login:", error);
    }
  }, [dispatch, user]);

  const getProgressData = useCallback(async () => {
    try {
      const responseData = await getData(
        process.env.REACT_APP_DOMAIN_URL +
          `/v1/hrms/payhub/compratios?userId=${user.loginInfo.userId}&clientId=${userInfo.companyId}`
      );
      dispatch(setCompaRatio(responseData.data.getClientCompList));
    } catch (error) {
      console.error("Error during login:", error);
    }
  }, [dispatch, user.loginInfo.userId,userInfo.companyId]);


  useEffect(() => {
    if (user.authToken) {
      getUserData();
      getProgressData();
    }
  }, [user.authToken, getUserData, getProgressData ]);


  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
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
          </Grid>
          <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
            <Typography color="#fff" variant="body2">
              {userInfo?.companyName} Company | 2 Markets
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <QuickToolsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <SingleJobCard
              title="SINGLE JOB PRICING"
              paragraph="The Single Job Pricing app allows you to market price by job, function, sub-function and/or grade."
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {compaRatioList && compaRatioList.length > 0 ? (
              <MyMarketCard
                firstCountry={firstCountryName}
                firstCountryCompaRatio={firstCountryCompaRatio}
                countriesWithCompRatio={compaRatioList}
              />
            ) : (
              <p>Loading...</p>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12} sx={{ marginBottom: "20px" }}>
              <GlobalPayLandscape
                title="GLOBAL PAY LANDSCAPES"
                paragraph="The reports formerly published in the 'Landscape' section of PayNet are now available in KF Pay! Click below to download the global versions of these reports."
              />
            </Grid>
            <Grid item xs={12} spacing={1} sx={{ marginBottom: "20px" }}>
              <IndustryNews
                title="INDUSTRY NEWS"
                paragraph="The reports formerly published in the 'Landscape' section of PayNet are now available in KF Pay! Click below to download the global versions of these reports."
              />
            </Grid>
            <Grid item xs={12} spacing={1}>
              <ListenCard
                title="GLOBAL PAY LANDSCAPES"
                paragraph="The reports formerly published in the 'Landscape' section of PayNet are now available in KF Pay! Click below to download the global versions of these reports."
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Dashboard;