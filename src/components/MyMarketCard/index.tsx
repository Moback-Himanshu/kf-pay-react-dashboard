import { useState } from "react";
import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import {
  Card,
  CardHeader,
  Grid,
  Divider,
  Avatar,
  MenuItem,
  CardContent,
  Typography,
} from "@mui/material";
import HelpIcon from "../../assets/images/help.svg";
import UploadIcon from "../../assets/images/upload.svg";
import NetworkIcon from "../../assets/images/network.svg";
import ComparatioIcon from "../../assets/images/compa-ratio.svg";
import GlobalSwitchButton from "../SwitchButton/Index";
import GlobalDropdown from "../Dropdown";
// import CircularChart from "./CircularProgress";
import ProgressData from "./ProgressData";
import { useSelector } from "react-redux";

interface IMyMarketCardProps {
  countriesWithCompRatio: [];
  firstCountry:string;
}

const MyMarketCard = (props: IMyMarketCardProps): JSX.Element => {
  const {  countriesWithCompRatio, firstCountry } = props;
  console.log(countriesWithCompRatio);
  const [loading, setLoading] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(1);
  const [circularValue, setCircularValue] = useState(0);

const countriesWithCompRatioList = countriesWithCompRatio?.slice(1);
console.log(countriesWithCompRatioList);


  const onChange = () => {
    setLoading(!loading);
  };

  const handleChange = (event: any) => {
    setDropdownValue(event.target.value);
  };
  return (
    <Card sx={{ p: 2 }}>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={12} sm={4}>
          <CardHeader
            titleTypographyProps={{ variant: "body1" }}
            title="MY MARKETS"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <GlobalSwitchButton
              loading={loading}
              onChange={onChange}
              label="Show all compa-ratios"
            />
            <Avatar
              sx={{ height: "15px", width: "15px" }}
              src={HelpIcon}
              variant="square"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <GlobalDropdown
            onChange={handleChange}
            dropdownValue={dropdownValue}
            fullWidth={true}
          >
            <MenuItem value={1}>Markets</MenuItem>
            <MenuItem value={2}>Reports By Type</MenuItem>
          </GlobalDropdown>
        </Grid>
      </Grid>
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12} sm={5}>
            <Stack spacing={2}>
              <ProgressData key={224} comparatiopercent={72}/>
            </Stack>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 0,
                height: 0,
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderRight: "10px solid #f1f3f4",
              }}
            />
          </Divider>
          <Grid item xs={12} sm={5}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "left" }}>
                <Stack spacing={1}>
                  <Typography variant="body1" color="#2890d0">
                    {firstCountry}
                  </Typography>
                  <br />
                  <Typography variant="body1" display="block">
                    Overall compa-ratio:
                  </Typography>
                  <Typography variant="body2" display="block">
                    This compa-ratio represents an overall comparison between
                    your organisation and the market. The compa-ratio is
                    calculated by dividing the sum of your individual salaries
                    by the sum of the market 50th percentile values.
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Please note: Your permissions may affect which parts of your
                    organisation and the market you are allowed to view.
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{ height: "15px", width: "15px", ml: 1 }}
                      src={UploadIcon}
                      variant="square"
                    />
                    <Typography variant="body1" color="#2890d0" sx={{ ml: 1 }}>
                      Level & Function
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{ height: "15px", width: "15px", ml: 1 }}
                      src={UploadIcon}
                      variant="square"
                    />
                    <Typography variant="body1" color="#2890d0" sx={{ ml: 1 }}>
                      Model Job Match & Level
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />

        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-evenly"
        >

{countriesWithCompRatioList?.map((country:any, index:any) => (
<>
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack spacing={1} alignItems="center">
                  <Typography variant="body1" color="#2890d0">
                    {country.name}
                  </Typography>
                  <br />
                  {/* <ProgressData /> */}
                  <ProgressData key={country.id} comparatiopercent={country?.compratiopercent || 0} />
                  {/* // <ProgressData comparatiopercent={country.compratiopercent}/> */}
                
                  <Typography variant="body2">Overall Compa -ratio</Typography>
                  <br />
                </Stack>
              </Box>
            </Stack>
            
          </Grid>
          {/* {index !== countryList.length - 2 && ( */}
            <Divider orientation="vertical" flexItem sx={{ position: "relative" }} />
          {/* )} */}
          <Divider/>
          
        </>
          ))}
        </Grid>
      </CardContent>

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={12} sm={11}>
          <Card
            sx={{
              display: "flex",
              backgroundColor: "#289650",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar
                  sx={{ height: "25px", width: "20px", alignItems: "left" }}
                  src={NetworkIcon}
                  variant="square"
                />
                <Typography variant="body2" color="#ffffff">
                  <b>MORE DATA, MORE VALUE</b>
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ position: "relative" }}
                />
                <Typography variant="caption" color="#ffffff">
                  Over 23 million employees & over 150 countries | across 27000
                  organisations
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};
export default MyMarketCard;
