import React from "react";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import ShowChartIcon from "@mui/icons-material/ShowChart";
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


function InvSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
    <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
      <Item
        title="Dashboard"
        to="/inventory"  
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Inventory Management"
        to="/contacts"
        icon={<InventoryIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Service"
        to="/invoices"
        icon={<HomeRepairServiceIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Customer"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Supplier"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Item Setup"
        to="/contacts"
        icon={<CategoryIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Sale"
        to="/contacts"
        icon={<ShopIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Purchase"
        to="/contacts"
        icon={<ShoppingCartIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Stock Analysis"
        to="/invoices"
        icon={<ShowChartIcon />}
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
    </>
  );
}

export default InvSidebar;
