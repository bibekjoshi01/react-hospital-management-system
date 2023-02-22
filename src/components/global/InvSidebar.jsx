import React, { Fragment } from "react";
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

function InvSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");
  const { query } = props;

  return (
    <>
      <Box paddingLeft={props.isCollapsed ? undefined : "0%"}>
        <Item
          title="Dashboard"
          to="/inventory"
          query={query}
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Inventory Management"
          to="/contacts"
          query={query}
          icon={<InventoryIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Service"
          to="/invoices"
          query={query}
          icon={<HomeRepairServiceIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Customer"
          to="/team"
          query={query}
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Supplier"
          to="/team"
          query={query}
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Item Setup"
          to="/contacts"
          query={query}
          icon={<CategoryIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Sale"
          to="/contacts"
          query={query}
          icon={<ShopIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Purchase"
          to="/contacts"
          query={query}
          icon={<ShoppingCartIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Stock Analysis"
          to="/invoices"
          query={query}
          icon={<ShowChartIcon />}
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
    </>
  );
}

export default InvSidebar;
