import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {InvSidebarData} from "./InventorySidebar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { MenuItem } from "react-pro-sidebar";


import {
  ListItemText,
} from "@mui/material";

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

function InvSidebar(props) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isExpandable, setIsExpandable] = useState(true);

  const [active, setActive] = useState("")

  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
    </Box> 
  );
}

export default InvSidebar;