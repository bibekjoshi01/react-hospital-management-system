import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, IconButton, Typography } from "@mui/material";
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


function LabSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
      <Item
        title="Dashboard"
        to="/"  
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Lab Management"
        to="/contacts"
        icon={<InventoryIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Test Setup"
        to="/testSetup"
        icon={<HomeRepairServiceIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box> 
  );
}

export default LabSidebar;
