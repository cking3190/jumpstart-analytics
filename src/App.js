import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardContainer from "./components/charts-dashboards.component";
import ResponsiveAppBar from "./components/navbar.component";
import { BrowserRouter as Router } from "react-router-dom";

import {
  Grid,
  CircularProgress,
  useTheme,
  Typography,
  AppBar,
} from "@mui/material";
import PageRouter from "./components/page-router.component";

function App() {
  return (
    <div
      className="App"
      // style={{ backgroundColor: theme.palette.background.default }}
    >
      <Router>
        <ResponsiveAppBar />
        <CssBaseline />
        <Grid
          style={{
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
            style={{ marginTop: "20px" }}
          >
            <PageRouter></PageRouter>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
