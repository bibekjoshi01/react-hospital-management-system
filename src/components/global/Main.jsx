import React from "react";
import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import InventoryDashboard from "../dashboard/InventoryDashboard";
import ClinicDashboard from "../dashboard/ClinicDashboard";
import CoreSetupDashboard from "../dashboard/CoreSetupDashboard";
import LabDashboard from "../dashboard/LabDashboard";
import Home from "../dashboard/Home";

function Main(props) {
  const { active } = props;
  return (
    <Box>
      <Routes>
        {active === "Home" ? (
          <Route path="/" element={<Home />} />
        ) : active === "Inventory" ? (
          <Route path="/inventory" element={<InventoryDashboard />} />
        ) : active === "Clinic" ? (
          <Route path="/clinic" element={<ClinicDashboard />} />
        ) : active === "Lab" ? (
          <Route path="/lab" element={<LabDashboard />} />
        ) : active === "CoreSetup" ? (
          <Route path="/core-setup" element={<CoreSetupDashboard />} />
        ) : null}
      </Routes>
    </Box>
  );
}

export default Main;
