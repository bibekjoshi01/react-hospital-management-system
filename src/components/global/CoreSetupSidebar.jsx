import React from "react";
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


function CoreSetupSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");
  const [active, setActive] = useState("")

  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
     
    </Box> 
  );
}

export default CoreSetupSidebar;
