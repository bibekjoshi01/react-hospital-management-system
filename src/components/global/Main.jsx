import React from "react";
import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import InventoryDashboard from "../dashboard/InventoryDashboard";
import ClinicDashboard from "../dashboard/ClinicDashboard";
import CoreSetupDashboard from "../dashboard/CoreSetupDashboard";
import LabDashboard from "../dashboard/LabDashboard";


function Main(props) {
  const { active } = props;
  return (
    <Box>
      <Routes>
        {active === "Inventory" ? (
          <Route path="/" element={<InventoryDashboard />} />
        ) : active === "Clinic" ? (
          <Route path="/" element={<ClinicDashboard />} />
        ) : active === "Lab" ? (
          <Route path="/" element={<LabDashboard />} />
        ) : active === "CoreSetup" ? (
          <Route path="/" element={<CoreSetupDashboard />} />
        ) : null}
      </Routes>
    </Box>
  );
}

export default Main;
