import React, { useCallback, useEffect} from "react";
import QuickToolsCard from "../../../components/QuickToolCard";
import MyMarketCard from "../../../components/MyMarketCard";
import GlobalPayLandscape from "../../../components/GlobalPayLandscape";
import SingleJobCard from "../../../components/SingleJobCard";
import IndustryNews from "../../../components/IndustryNews";
import { Box, Grid, Link, Typography } from "@mui/material";
import useAppDispatch from "../../../hooks/use-app-dispatch";
import { AppDispatch } from "../../../redux/store";
import { setActionUserInfo } from "../../../redux/slices/userInfoSlice";
import { getData } from "../../../services/apiService";
import { useSelector } from "react-redux";
import { setCountryList } from "../../../redux/slices/countryListSlice";
import {
  setCompaRatio,
} from "../../../redux/slices/compaRatioSlice";

let countriesWithCompRatio: any;

const Dashboard = (props: any) => {
  const user = useSelector((state: any) => state.authentication);
  const userInfo = useSelector((state: any) => state.userInfo.userInfo);
  const countryList = useSelector((state: any) => state.countryList.countryList);
  const compaRatioList = useSelector((state: any) => state.compaRatio.compaRatio);
  const dispatch: AppDispatch = useAppDispatch();

  const firstCountry = countryList && countryList.length > 0 ? countryList[0].name : "";
  console.log("countryList----", firstCountry);
  console.log(countryList);

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
      console.log("responseData Progress:", responseData);
      dispatch(setCompaRatio(responseData.data.getClientCompList));
    } catch (error) {
      console.error("Error during login:", error);
    }
  }, [dispatch, user.loginInfo.userId,userInfo.companyId]);

  const getCountries = useCallback(async () => {
    try {
      const responseData = await getData(
        process.env.REACT_APP_DOMAIN_URL +
          `/v1/hrms/payhub/actions/useraccesscountry`
      );
      console.log(responseData);
      dispatch(setCountryList(responseData.data.countries));
    } catch (error) {
      console.error("Error during login:", error);
    }
  }, []);


  const getCompRatioForCountry = useCallback((countryId: any) => {
    const compRatioObject = compaRatioList.find(
      (item: any) => item.countryId === countryId.toString()
    );
    // console.log(compRatioObject);
    return compRatioObject ? compRatioObject.compratiopercent : 0;
  }, [compaRatioList]);


  const getCompRatioList = useCallback(async () => {
    const updatedCountriesWithCompRatio = await Promise.all(
      countryList.map(async (country: any) => ({
        ...country,
        compratiopercent: await getCompRatioForCountry(country.id),
      }))
    );
    countriesWithCompRatio = updatedCountriesWithCompRatio;
  }, [countryList, getCompRatioForCountry]);

  useEffect(() => {
    if (user.authToken) {
      // console.log("hello");
      getUserData();
      getCountries();
      getProgressData();
    }
  }, [user.authToken, getUserData, getCountries, getProgressData]);

  useEffect(() => {
    if (countryList.length > 0) {
      getCompRatioList();
    }
  }, [countryList, getCompRatioList]);

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
            {countryList && countryList.length > 0 ? (
              <MyMarketCard
                firstCountry={firstCountry}
                countriesWithCompRatio={countriesWithCompRatio}
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
            <Grid item xs={12} spacing={1}>
              <IndustryNews
                title="INDUSTRY NEWS"
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
