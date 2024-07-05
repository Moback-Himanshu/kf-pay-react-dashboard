import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./ListenCard.module.scss";

const ListenCard = (props: any) => {
  return (
    <Card
      sx={{
        position: "relative",
        padding: 0,
        backgroundColor: "#ffffff",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: 3,
        background: props.color,
      }}
    >
      <CardContent>
        <div className={styles.triangle}>
          <div className={styles.innerContent}> +</div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Stack spacing={2} sx={{padding:0}}>
              <Box sx={{ ml: 1 ,marginTop:'10px',padding:0}}>
                <img
                  src={props.icon}
                  alt="Surround Icon"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Stack>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{marginTop:3}}/>
          <Grid item xs={6} sm={8}>
            <Stack spacing={2}>
              <Box className={styles.contentContainer}>
                <Stack spacing={1}>
                  <Typography variant="body1" color="#fff" >
                    {props.title}
                  </Typography>
                  <Typography variant="caption" color="#fff">
                    {props.paragraph}
                  </Typography>
                  <Typography variant="body1" gutterBottom color="#fff">
                    Learn More
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default ListenCard;
