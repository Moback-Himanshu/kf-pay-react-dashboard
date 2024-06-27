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
  IconButton,
  CircularProgress,
} from "@mui/material";
import HelpIcon from "../../assets/images/help.svg";
import UploadIcon from "../../assets/images/upload.svg";
import NetworkIcon from "../../assets/images/network.svg";
import ComparatioIcon from "../../assets/images/compa-ratio.svg";
import GlobalSwitchButton from "../SwitchButton/Index";
import GlobalDropdown from "../Dropdown";
import CircularChart from "./CircularProgress";

export const data = [
  {name:"Mark", value: 90},
  {name:"Robert", value: 12},
]

const MyMarketCard = (props: any): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(1);

  const onChange = () => {
    setLoading(!loading);
  };

  const handleChange = (event: any) => {
    setDropdownValue(event.target.value);
  };
  return (
    <Card sx={{p:2}}>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={12} sm={4} >
          <CardHeader titleTypographyProps={{variant:'body1' }} title="MY MARKETS" />
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
          <GlobalDropdown onChange={handleChange} dropdownValue={dropdownValue} fullWidth={true}>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularChart data={data} width={250} height={250}/>
                {/* <CircularProgress
                  variant="determinate"
                  sx={{
                    color: "#06C0B3",
                    position: "absolute",
                  }}
                  size={180}
                  thickness={4}
                  {...props}
                  value={"90"}
                />
                <IconButton onClick={() => alert("Hiii")}>
                  <Avatar
                    sx={{ height: "27px", width: "76px" }}
                    src={ComparatioIcon}
                    variant="square"
                  />
                </IconButton> */}
              </Box>
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
                    Australia
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
        <Divider />
        <br />
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack spacing={1} alignItems="center">
                  <Typography variant="body1" color="#2890d0">
                    United States of America
                  </Typography>
                  <br />
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: "#06C0B3",
                    }}
                    size={180}
                    thickness={4}
                    {...props}
                    value={90}
                  />
                  <br />
                  <Typography variant="body2">Overall Compa -ratio</Typography>
                  <br />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ position: "relative" }}
          />
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack spacing={1} alignItems="center">
                  <Typography variant="body1" color="#2890d0">
                    Canada
                  </Typography>
                  <br />
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: "#06C0B3",
                    }}
                    size={180}
                    thickness={4}
                    {...props}
                    value={90}
                  />
                  <br />
                  <Typography variant="body2">Overall Compa -ratio</Typography>
                  <br />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ position: "relative" }}
          />
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack spacing={1} alignItems="center">
                  <Typography variant="body1" color="#2890d0">
                    Spain
                  </Typography>
                  <br />
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: "#06C0B3",
                    }}
                    size={180}
                    thickness={4}
                    {...props}
                    value={90}
                  />
                  <br />
                  <Typography variant="body2">Overall Compa -ratio</Typography>
                  <br />
                </Stack>
              </Box>
            </Stack>
          </Grid>
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
                <Typography variant="body2" color="#ffffff" >
                  <b>MORE DATA, MORE VALUE</b>
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ position: "relative" }}
                />
                <Typography variant="caption" color="#ffffff" >
                  Over 23 million employees & over 150 countries | across
                  27000 organisations
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
