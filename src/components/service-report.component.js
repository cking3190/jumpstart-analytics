import React from "react";

// Material UI
import { Container, Grid, Paper, Typography } from "@mui/material";

// Custom Components
import Chart from "./chart.component";
import RegionSelect from "./select-region.component";
const topStyle = {
  height: "200px",
  width: "500px",
};
const midStyle = {
  height: "500px",
  width: "1250px",
};
const midChartHeight = "500px";
const midChartWidth = "1250px";
const topChartHeight = "200px";
const topChartWidth = "500px";

const ServiceReport = () => {
  const [filter, setFilter] = React.useState("All");

  const handleChange = (region) => {
    setFilter(region);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{ overflowY: "scroll" }}
      direction="row"
      align="center"
      justify="center"
    >
      <Grid item xs={6}>
        <RegionSelect onChange={handleChange} />
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <Paper sx={topStyle} elevation={4}>
          <Chart
            height={topChartHeight}
            width={topChartWidth}
            chartId="64781004-8f75-4812-86f1-7292d88d48b8"
            filter={filter == "All" ? null : { state: filter }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={topStyle} elevation={4}>
          <Chart
            height={topChartHeight}
            width={topChartWidth}
            chartId="64781004-8f75-430f-8942-7292d88d48b4"
            filter={filter == "All" ? null : { state: filter }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={midStyle} elevation={4}>
          <Chart
            height={midChartHeight}
            width={midChartWidth}
            chartId="64781004-8f75-4de9-809a-7292d88d48b2"
            filter={filter == "All" ? null : { state: filter }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={midStyle} elevation={2}>
          <Chart
            height={midChartHeight}
            width={midChartWidth}
            chartId="64781004-8f75-450f-881a-7292d88d48b0"
            filter={filter == "All" ? null : { state: filter }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ServiceReport;
