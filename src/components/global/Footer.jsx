import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      bottom="20px"
      right="30px"
      ml="15px"
    >
      <Typography variant="h5" color="#1e5b87">
        Copyright ©2023 Bibek Joshi
      </Typography>
    </Box>
  );
}

export default Footer;
