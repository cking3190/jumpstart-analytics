import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./chart.component";

const Dashboard = () => {
  return (
    <div>
      <div className="charts">
        <Chart
          height="600px"
          width="800px"
          chartId="63640706-fe58-4822-8c75-dd9a83bb5771"
        />
      </div>
    </div>
  );
};

export default Dashboard;
