import React, { Fragment } from "react";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { Box, Typography } from "@mui/material";
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

function ClinicSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");
  const { query } = props;
  return (
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
      <Item
        title="Dashboard"
        to="/clinic"
        query={query}
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Billing"
        to="/invoices"
        query={query}
        icon={<HomeRepairServiceIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Appointment"
        to="/team"
        query={query}
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Patient Registeration"
        to="/team"
        query={query}
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Financial Reports"
        to="/invoices"
        query={query}
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="IRD Reports"
        to="/invoices"
        query={query}
        icon={<AssessmentIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
}

export default ClinicSidebar;
