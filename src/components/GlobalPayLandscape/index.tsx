import * as React from "react";
import UploadIcon from "../../assets/images/upload.svg";
import GlobalPayIcon from "../../assets/images/icon_pay-landscape.svg";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const GlobalPayLandscape = (props: any) => {
  return (
    <Card sx={{ maxWidth: 450,p:1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ height: "25px", width: "25px" }}
            variant="square"
            src={GlobalPayIcon}
          ></Avatar>
        }
        title={<span style={{ fontWeight: "bold" }}>{props.title}</span>}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2">{props.paragraph}</Typography>
      </CardContent>
      <Stack spacing={1}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ height: "15px", width: "15px", ml: 1 }}
            src={UploadIcon}
            variant="square"
          />
          <Typography variant="body1" color="#2890d0" sx={{ ml: 1 }}>
            Salary Movement & Forcast
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ height: "15px", width: "15px", ml: 1 }}
            src={UploadIcon}
            variant="square"
          />
          <Typography variant="body1" color="#2890d0" sx={{ ml: 1 }}>
            Economy
          </Typography>
        </Box>
        <br />
      </Stack>
    </Card>
  );
};
export default GlobalPayLandscape;
