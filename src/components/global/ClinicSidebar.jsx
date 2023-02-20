import React from "react";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
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


function ClinicSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
      <Item
        title="Dashboard"
        to="/clinic"  
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Billing"
        to="/invoices"
        icon={<HomeRepairServiceIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Appointment"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Patient Registeration"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Financial Reports"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="IRD Reports"
        to="/invoices"
        icon={<AssessmentIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box> 
  );
}

export default ClinicSidebar;
