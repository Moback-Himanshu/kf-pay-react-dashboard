import React, { useCallback, useEffect, useState } from "react";
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
import { setCompaRatio } from "../../../redux/slices/compaRatioSlice";
import SurroundIcon from "../../../assets/images/surround-icon.svg";
import PMIcon from "../../../assets/images/pm-icon.svg";

const Dashboard = (props: any) => {
  const user = useSelector((state: any) => state.authentication);
  const userInfo = useSelector((state: any) => state.userInfo.userInfo);
  const compaRatioList = useSelector(
    (state: any) => state.compaRatio.compaRatio
  );
  const [isLoading, setIsLoading] = useState(true);
  const dispatch: AppDispatch = useAppDispatch();

  const firstCountryName =
    compaRatioList && compaRatioList.length > 0
      ? compaRatioList[0].countryName
      : "";
  const firstCountryCompaRatio =
    compaRatioList && compaRatioList.length > 0
      ? compaRatioList[0].compratiopercent
      : "";
  const firstCountryId =
    compaRatioList && compaRatioList.length > 0
      ? compaRatioList[0].countryId
      : "";

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
      if (userInfo.companyId) {
        const responseData = await getData(
          process.env.REACT_APP_DOMAIN_URL +
            `/v1/hrms/payhub/compratios?userId=${user.loginInfo.userId}&clientId=${userInfo.companyId}`
        );
        dispatch(setCompaRatio(responseData.data.getClientCompList));
      } else {
        console.error("userInfo.companyId is undefined or null.");
      }
    } catch (error) {
      console.error("Error fetching progress data:", error);
    }
  }, [dispatch, user.loginInfo.userId, userInfo.companyId]);

  useEffect(() => {
    if (user.authToken) {
      getUserData();
    }
  }, [user.authToken, getUserData]);

  useEffect(() => {
    if (userInfo.companyId !== undefined) {
      getProgressData();
      setIsLoading(false);
    }
  }, [userInfo.companyId, getProgressData]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box sx={{ flexGrow: 1, p: 5 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ textAlign: "center", marginTop: 5 }}
            >
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
                  firstCountryId={firstCountryId}
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
              <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                <IndustryNews
                  title="INDUSTRY NEWS"
                  paragraph="The reports formerly published in the 'Landscape' section of PayNet are now available in KF Pay! Click below to download the global versions of these reports."
                />
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                <ListenCard
                  icon={PMIcon}
                  color="#45569b"
                  title="TALENT HUB"
                  paragraph="Manage you Success Profiles and Job Descriptions."
                />
              </Grid>
              <Grid item xs={12}>
                <ListenCard
                  color="#618f11"
                  title="LISTEN"
                  paragraph="A framework for employee effectiveness that leads to better
                    business performance."
                  icon={SurroundIcon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};
export default Dashboard;
