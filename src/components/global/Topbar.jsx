import { Box, IconButton, Button, CssBaseline } from "@mui/material";
import "../../css/Topbar.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

const Topbar = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [active, setActive] = useState("Inventory");

  return (
    <>
      <CssBaseline />
      <div className="app">
        <Sidebar active={active} />
        <main className="content">
          <Box
            display="flex"
            backgroundColor="#1e5b87"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            {/* BOXES AND BUTTONS */}
            <Box
              display="flex"
              alignItems="center"
              flex="1"
              className="topbar-buttons"
            >
              <Box mr={2}>
                <Button
                  onClick={() => {
                    setActive("Inventory");
                  }}
                  className={`${active === "Inventory" ? "active" : ""}`}
                  sx={{
                    backgroundColor: "white",
                    color: "#1e5b87",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "5px 20px",
                  }}
                >
                  Inventory
                </Button>
              </Box>
              <Box mr={2}>
                <Button
                  onClick={() => {
                    setActive("Clinic");
                  }}
                  className={`${active === "Clinic" ? "active" : ""}`}
                  sx={{
                    backgroundColor: "white",
                    color: "#1e5b87",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "5px 20px",
                  }}
                >
                  Clinic
                </Button>
              </Box>
              <Box mr={2}>
                <Button
                  onClick={() => {
                    setActive("Lab");
                  }}
                  className={`${active === "Lab" ? "active" : ""}`}
                  sx={{
                    backgroundColor: "white",
                    color: "#1e5b87",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "5px 20px",
                  }}
                >
                  Lab
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => {
                    setActive("CoreSetup");
                  }}
                  className={`${active === "CoreSetup" ? "active" : ""}`}
                  sx={{
                    backgroundColor: "white",
                    color: "#1e5b87",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "5px 20px",
                  }}
                >
                  Core Setup
                </Button>
              </Box>
            </Box>
            {/* ICONS */}
            <Box display="flex" className="icon-buttons" alignItems="center">
              <IconButton
                onClick={() => {
                  if (fullScreen) {
                    document.exitFullscreen();
                  } else {
                    document.documentElement.requestFullscreen();
                  }
                  setFullScreen(!fullScreen);
                }}
              >
                {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon />
              </IconButton>
              <IconButton>
                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton>
                <PersonOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        <Main active={active}/>
        <Footer />
        </main>
      </div>
    </>
  );
};

export default Topbar;
