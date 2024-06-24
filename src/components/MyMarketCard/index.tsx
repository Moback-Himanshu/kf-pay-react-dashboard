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
  CircularProgress,
} from "@mui/material";
import HelpIcon from "../../assets/images/help.svg";
import UploadIcon from "../../assets/images/upload.svg";
import GlobalSwitchButton from "../SwitchButton/Index";
import GlobalDropdown from "../Dropdown";

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
    <Card>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={12} sm={3}>
          <CardHeader title="MY MARKETS" />
        </Grid>
        <Grid item xs={12} sm={3}>
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
          <GlobalDropdown onChange={handleChange} dropdownValue={dropdownValue}>
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
            <Box sx={{ display: "flex", justifyContent: "right" }}>
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
      </CardContent>
    </Card>
  );
};
export default MyMarketCard;
