import * as React from "react";
import WifiIcon from "../../assets/images/wifi.svg";
import UploadIcon from "../../assets/images/upload.svg";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const IndustryNews = (props: any) => {
  return (
    <Card sx={{ maxWidth: 450,p:1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ height: "25px", width: "25px" }}
            variant="square"
            src={WifiIcon}
          ></Avatar>
        }
        title={<span style={{ fontWeight: "bold" }}>{props.title}</span>}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          The Gender Pay Gap...
          <span
            style={{
              color: "#2890d0",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <b>Read More</b>
          </span>
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          Employing Agile Reward Strategies for a Volatile World...
          <span
            style={{
              color: "#2890d0",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <b>Read More</b>
          </span>
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          Healthcare Boards and COVID-19...
          <span
            style={{
              color: "#2890d0",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <b>Read More</b>
          </span>
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          NavigatingHealthcare Executive Compensation during the COVID-19
          Pandemic...
          <span
            style={{
              color: "#2890d0",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <b>Read More</b>
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default IndustryNews;
