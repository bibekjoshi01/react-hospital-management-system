import { useState } from "react";
import { Box, Button } from "@mui/material";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import "../css/Chat.css";

function Chat() {
  const style = {
    border: "2px solid white",
    borderRadius: "50%",
    padding: "5px",
    backgroundColor: "#1e5b87",
    outline: "3px solid #1e5b87",
    outlineOffset: "3px",
  };

  const iconStyle = {
    margin: "10px",
    color: "white",
    fontSize: "30px",
  };

  const countStyle = {
    position: "absolute",
    top: "-5px", // adjust the positioning as per your requirement
    right: "-5px",
    backgroundColor: "red",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        bottom="80px"
        right="80px"
      >
        <Button sx={style} id="chat-btn">
          <PermPhoneMsgIcon sx={iconStyle} />
          <Box sx={countStyle}>2</Box>
        </Button>
      </Box>
    </>
  );
}

export default Chat;
