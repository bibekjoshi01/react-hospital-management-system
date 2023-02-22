import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ClinicSidebar from "./ClinicSidebar";
import InvSidebar from "./InvSidebar";
import LabSidebar from "./LabSidebar";
import CoreSetupSidebar from "./CoreSetupSidebar";
import HomeSidebar from "./HomeSidebar";

const Sidebar = (props) => {
  const { active } = props;
  // console.log(active);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  console.log(query);
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#1e5b87 !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "# !important",
        },
        "& .pro-menu-item.active": {},
        "& .pro-menu": {
          backgroundColor: "grey",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "white",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color="white">
                  HIMS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ color: "white" }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* SEARCH BAR */}
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#426f98"
              borderRadius="3px"
              mx="22px"
              marginBottom="20px"
            >
              <InputBase
                onChange={handleSearch}
                sx={{ ml: 2, flex: 1, color: "white" }}
                placeholder="Search"
              />
              <IconButton type="button" sx={{ p: 1, color: "white" }}>
                <SearchIcon />
              </IconButton>
            </Box>
          )}
          {isCollapsed && (
            <Box display="flex" justifyContent="center">
              <IconButton type="button" sx={{ p: 1, color: "white" }}>
                <SearchIcon onClick={() => setIsCollapsed(!isCollapsed)} />
              </IconButton>
            </Box>
          )}

          {/* Sidebars */}
          {active === "Inventory" ? (
            <InvSidebar
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              query={query}
            />
          ) : active === "Clinic" ? (
            <ClinicSidebar
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              query={query}
            />
          ) : active === "Lab" ? (
            <LabSidebar
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              query={query}
            />
          ) : active === "CoreSetup" ? (
            <CoreSetupSidebar
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              query={query}
            />
          ) : active === "Home" ? (
            <HomeSidebar
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              query={query}
            />
          ) : null}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
