import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardContainer from "./components/charts-dashboards.component";

import { Grid, CircularProgress, useTheme } from "@mui/material";

function App() {
  return (
    <div
      className="App"
      // style={{ backgroundColor: theme.palette.background.default }}
    >
      <CssBaseline />
      <Grid
        style={{
          height: "100vh",
          width: "100%",
          marginLeft: "0px",
        }}
        container
        spacing={2}
      >
        <Grid
          item
          container
          xs
          sm
          direction="column"
          spacing={2}
          justifyContent="space-between"
          style={{ marginLeft: "0px" }}
        >
          <Grid item container>
            <Grid item sm={12}>
              {/* <Header /> */}
              Header
            </Grid>
          </Grid>
          <Grid item container>
            <DashboardContainer></DashboardContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
