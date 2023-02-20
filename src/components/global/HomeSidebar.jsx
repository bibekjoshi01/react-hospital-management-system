import React from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuItem } from "react-pro-sidebar";


const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: "white",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


function HomeSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
      <Item
        title="Admin Setup"
        to="/admin-setup"  
        icon={<AdminPanelSettingsIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box> 
  );
}

export default HomeSidebar;
