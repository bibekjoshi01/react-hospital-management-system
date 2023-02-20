import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InventoryDashboard from "./components/dashboard/InventoryDashboard";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {useMode } from "./theme";

function App() {
  const theme = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <Topbar setIsSidebar={setIsSidebar}/>
        </div>
      </ThemeProvider>
  );
}

export default App;