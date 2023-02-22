import React, {Fragment} from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuItem } from "react-pro-sidebar";

const Item = ({ title, to, icon, selected, setSelected, query }) => {
  const searchCheck = title.toLowerCase().includes(query.toLowerCase());
  return (
    <Fragment>
      {searchCheck && (
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
      )}
    </Fragment>
  );
};

function LabSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");
  const { query } = props;
  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
      <Item
        title="Dashboard"
        to="/"
        query={query}
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Lab Management"
        to="/contacts"
        query={query}
        icon={<InventoryIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Test Setup"
        to="/testSetup"
        query={query}
        icon={<HomeRepairServiceIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
}

export default LabSidebar;
