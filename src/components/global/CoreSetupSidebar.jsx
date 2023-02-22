import React, { Fragment } from "react";
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

function CoreSetupSidebar(props) {
  const [selected, setSelected] = useState("Dashboard");
  const [active, setActive] = useState("");
  const { query } = props;

  return <Box paddingLeft={props.isCollapsed ? undefined : "0%"}></Box>;
}

export default CoreSetupSidebar;
