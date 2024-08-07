import * as React from "react";
import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import PeerGroup from "../../assets/images/peer-groups.svg";
import CustomGrade from "../../assets/images/custom-grades.svg";
import SavedQueries from "../../assets/images/saved-queries-icon.svg";

const QuickToolsCard = (props: any): JSX.Element => {
  return (
    
    <Card>
      <CardHeader titleTypographyProps={{variant:'body1' }} title="QUICK TOOLS" sx={{marginLeft:'15px'}}/>
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{display: "flex", justifyContent: "center" }}>
                <Avatar src={PeerGroup} variant="square" sx={{width:'18px', height:'18px'}}/>
              </Box>
              <Stack spacing={1}>
                <Typography align="center" variant="body1" color="#2890d0">
                  My Peer groups
                </Typography>
                <Typography align="center" variant="body2">
                  Manage your organization’s peer group(s).
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar src={CustomGrade} variant="square" sx={{width:'22px', height:'18px'}}/>
              </Box>
              <Stack spacing={1}>
                <Typography align="center" variant="body1" color="#2890d0">
                  My Custom Grades
                </Typography>
                <Typography align="center" variant="body2">
                  Manage your custom grade queries.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar src={SavedQueries} variant="square"  sx={{width:'22px', height:'18px'}}/>
              </Box>
              <Stack spacing={1}>
                <Typography align="center" variant="body1" color="#2890d0">
                  My Saved Queries
                </Typography>
                <Typography align="center" variant="body2">
                  Manage your saved queries.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default QuickToolsCard