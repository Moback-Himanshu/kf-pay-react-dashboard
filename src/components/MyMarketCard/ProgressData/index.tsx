import React, { useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import {  Paper } from "@mui/material";
interface ICompaRatioProps {
  comparatiopercent: any;
  width: string | number;
  height: string | number;
  size: number;
}

const CircularProgressWithLabelLocal = (props: {
  value: number;
  size: number;
  width: string | number;
  height: string | number;
}): JSX.Element => {
  const { value, width, height, size } = props;
  const progressValue = Math.min(Math.max(value, 0), 100);
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
  <Paper
    sx={{
      width: width,
      height: height,
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative", 
    }}
  >
    {value === 0 || null? (
      <>
       <CircularProgress
       variant="determinate"
       size={size === 188 ? (size-37) :(size- 16)} 
       value={100} 
       sx={{ color: '#ecf0f0', position: "absolute" }}
     />
      <Typography variant="body2" >No data to<br/>&nbsp; display</Typography></>
    ) : (
      <>
        {value < 100 ? (
          // Single CircularProgress if value is less than 100
          <CircularProgress
            variant="determinate"
            size={size}
            value={progressValue}
            sx={{ color: '#06c0b3' }}
          />
        ) : (
          // Nested CircularProgress for values greater than 100
          <>
            <CircularProgress
              variant="determinate"
              size={size}
              value={100}
              sx={{ color: '#06c0b3', position: "absolute" }}
            />
            <CircularProgress
              variant="determinate"
              size={size === 188 ? (size-37) :(size- 32)} 
              value={100} 
              sx={{ color: '#06c0b3', position: "absolute" }}
            />
          </>
        )}
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
          <Typography variant="h4" >
            {value}%
          </Typography>
        </Box>
      </>
    )}
  </Paper>
</Box>
  );
};

const ProgressData = (props: ICompaRatioProps) => {
  const { comparatiopercent, width, height, size } = props;
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(comparatiopercent);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgressWithLabelLocal
          value={progress}
          size={size}
          width={width}
          height={height}
        />
      </Box>
    </Box>
  );
};

export default ProgressData;
