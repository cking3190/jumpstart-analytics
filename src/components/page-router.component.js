import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardContainer from "./charts-dashboards.component";
import ServiceReport from "./service-report.component";
import HouseholdUsage from "./household-usage.component";

const PageRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ServiceReport />} />
      <Route exact path="/outage-report" element={<DashboardContainer />} />
      <Route exact path="/household-usage" element={<HouseholdUsage />} />
    </Routes>
  );
};

export default PageRouter;
