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
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #1e5b87",
  borderRadius: 2 ,
  boxShadow: 24,
  p: 4,
};

const Topbar = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <Link to="/">
                  <Button
                    onClick={() => {
                      setActive("Home");
                    }}
                    className={`${active === "Home" ? "active" : ""}`}
                    sx={{
                      backgroundColor: "#1e5b87",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "5px 20px",
                    }}
                  >
                    Home
                  </Button>
                </Link>
              </Box>
              <Box mr={2}>
                <Link to="/inventory">
                  <Button
                    onClick={() => {
                      setActive("Inventory");
                    }}
                    className={`${active === "Inventory" ? "active" : ""}`}
                    sx={{
                      backgroundColor: "#1e5b87",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "5px 20px",
                    }}
                  >
                    Inventory
                  </Button>
                </Link>
              </Box>
              <Box mr={2}>
                <Link to="/clinic">
                  <Button
                    onClick={() => {
                      setActive("Clinic");
                    }}
                    className={`${active === "Clinic" ? "active" : ""}`}
                    sx={{
                      backgroundColor: "#1e5b87",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "5px 20px",
                    }}
                  >
                    Clinic
                  </Button>
                </Link>
              </Box>
              <Box mr={2}>
                <Link to="/lab">
                  <Button
                    onClick={() => {
                      setActive("Lab");
                    }}
                    className={`${active === "Lab" ? "active" : ""}`}
                    sx={{
                      backgroundColor: "#1e5b87",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "5px 20px",
                    }}
                  >
                    Lab
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to="/core-setup">
                  <Button
                    onClick={() => {
                      setActive("CoreSetup");
                    }}
                    className={`${active === "CoreSetup" ? "active" : ""}`}
                    sx={{
                      backgroundColor: "#1e5b87",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "5px 20px",
                    }}
                  >
                    Core Setup
                  </Button>
                </Link>
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
                <InfoIcon onClick={handleOpen} />
              </IconButton>
              {/* <IconButton>
                <SettingsOutlinedIcon />
              </IconButton> */}
              <IconButton>
                <PersonOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Main active={active} />
          <Footer />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </main>
      </div>
    </>
  );
};

export default Topbar;
