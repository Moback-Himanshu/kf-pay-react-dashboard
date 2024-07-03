import * as React from "react";
import SurroundIcon from "../../assets/images/surround-icon.svg";
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
        padding: 2,
        backgroundColor: "#ffffff",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: 3,
        background: "#618f11",
      }}
    >
      <CardContent>
        <div className={styles.triangle}>
          <div className={styles.innerContent}> +</div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Stack spacing={2}>
              <Box sx={{ ml: 1 }}>
                <img
                  src={SurroundIcon}
                  alt="Surround Icon"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Stack>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={6} sm={8}>
            <Stack spacing={2}>
              <Box className={styles.contentContainer}>
                <Stack spacing={1}>
                  <Typography variant="body1" color="#fff">
                    LISTEN
                  </Typography>
                  <Typography variant="caption"  color="#fff">
                    A framework for employee effectiveness that leads to better
                    business performance.
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
