import { useState } from "react";
import Topbar from "./components/global/Topbar";
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