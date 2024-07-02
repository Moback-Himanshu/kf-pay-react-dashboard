import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, Paper } from "@mui/material";
import ComparatioIcon from "../../../assets/images/compa-ratio.svg";

interface ICompaRatioProps{
  comparatiopercent:any;
}

const CircularProgressWithLabelLocal = (props: { value: number; size: number }): JSX.Element => {
  const {value} = props;
  // console.log(props);
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <Paper
        sx={{
          width: "152px",
          height: "153px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="div" >
          {/* {comparatiopercent} */}
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box></Paper>
    </Box>
  );
};

const ProgressData = (props: ICompaRatioProps) => {
  const {comparatiopercent} = props;
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(comparatiopercent);
  // console.log(progress);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgressWithLabelLocal value={progress} size={140} />
      </Box>
    </Box>
  );
};

export default ProgressData;
