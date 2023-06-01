import React from "react";

// Material UI
import { Container, Grid, Paper, Typography } from "@mui/material";

// Custom Components
import Chart from "./chart.component";
import AddressAuto from "./address-autocomplete.component";
const topStyle = {
  height: "200px",
  width: "500px",
};
const midStyle = {
  height: "500px",
  width: "1250px",
};

const midMapStyle = {
  height: "300px",
  width: "600px",
};
const midChartHeight = "300px";
const midChartWidth = "600px";

const topChartHeight = "200px";
const topChartWidth = "500px";

const HouseholdUsage = () => {
  const [filter, setFilter] = React.useState("All");

  const handleChange = (address) => {
    setFilter(address);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{ overflowY: "scroll", height: "75vh" }}
      direction="row"
      align="center"
      justify="center"
    >
      <Grid item xs={6}>
        <AddressAuto onChange={handleChange} />
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <Paper sx={topStyle} elevation={4}>
          <Chart
            height={topChartHeight}
            width={topChartWidth}
            chartId="64781004-8f75-49ef-8336-7292d88d48b6"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={topStyle} elevation={4}>
          <Chart
            height={topChartHeight}
            width={topChartWidth}
            chartId="0c7d6841-f4c7-48b4-b31f-d940266449bc"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={midMapStyle} elevation={4}>
          <Chart
            height={midChartHeight}
            width={midChartWidth}
            chartId="64781004-8f75-4594-87de-7292d88d48ba"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={midMapStyle} elevation={4}>
          <Chart
            height={midChartHeight}
            width={midChartWidth}
            chartId="09e12a46-9e04-4bd9-b77f-2e9dc82c08d1"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HouseholdUsage;
