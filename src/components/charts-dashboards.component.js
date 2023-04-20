import React from "react";

// Material UI
import { Container, Grid, Paper } from "@mui/material";

// Custom Components
import Chart from "./chart.component";

const DashboardContainer = () => {
  return (
    <Container sx={{ height: "80vh" }}>
      <Grid
        container
        spacing={3}
        direction="column"
        align="center"
        justify="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={6}>
            <Paper elevation={2}>Area 1</Paper>
          </Grid>
          <Grid xs={6}>
            <Paper elevation={2}>
              {" "}
              <Chart
                height="600px"
                width="800px"
                chartId="63640706-fe58-4822-8c75-dd9a83bb5771"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Paper elevation={2}>
            <Chart
              height="600px"
              width="800px"
              chartId="63640706-fe58-4822-8c75-dd9a83bb5771"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContainer;
