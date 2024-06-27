import * as React from "react";
import KeyIcon from "../../assets/images/keyIcon.svg";
// import UploadIcon from "../../assets/images/upload.svg";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,Typography
} from "@mui/material";

const SingleJobCard = (props: any) => {
  return (
    
    <Card sx={{ maxWidth: 450,p:1 }}>
      <CardHeader
        avatar={<Avatar sx={{ height: "13px", width: "25px" }} variant="square" src={KeyIcon}></Avatar>}
        title={props.title}
        titleTypographyProps={{variant:'body1' }}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2">
          {props.paragraph}
        </Typography>
      </CardContent>
       <CardActions>
        <Typography color="#2890d0">
          Click here to access our Single Job Pricing App
        </Typography>
     </CardActions> 
    </Card>
  );
};
export default SingleJobCard;
