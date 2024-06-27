import GlobalButton from "../../../components/Button";
import QuickToolsCard from "../../../components/QuickToolCard";
import GlobalTextField from "../../../components/TextField";
import MyMarketCard from "../../../components/MyMarketCard";
import GlobalPayLandscape from "../../../components/GlobalPayLandscape";
import SingleJobCard from "../../../components/SingleJobCard";
import IndustryNews from "../../../components/IndustryNews";
import { Box, Grid, Link, Typography } from "@mui/material";

const Dashboard = () => {
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
          CLM Test Company 4 Company |  2 Markets
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
                <MyMarketCard />
           </Grid>
          <Grid item xs={12} md={4}  >
            <Grid  item  xs={12} sx={{ marginBottom: '20px' }}>
              <GlobalPayLandscape
                title="GLOBAL PAY LANDSCAPES"
                paragraph="The reports formerly published in the 'Landscape' section of PayNet are now available in KF Pay! Click below to download the global versions of these reports."
              />
            </Grid>
            <Grid  item xs={12} spacing={1}>
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
