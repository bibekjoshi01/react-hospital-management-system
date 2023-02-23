import React, { useState } from "react";
import "../css/Notification.css";
import {
  Box,
  IconButton,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NotificationPanel = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setUnreadMessagesCount(0);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notifications = [
    {
      id: 1,
      avatar: "https://picsum.photos/200",
      title: "John Smith",
      content: "Liked your post ",
      read: false,
    },
    {
      id: 2,
      avatar: "https://picsum.photos/200",
      title: "Jane Doe",
      content: "Commented on your post",
      read: false,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: false,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: false,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/200",
      title: "Bob Johnson",
      content: "Sent you a friend request",
      read: true,
    },
  ];

  const BoxStyle = {
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    paddingTop: "10px",
    width: "320px",
    cursor: "pointer",
  };

  const countStyle = {
    position: "absolute",
    top: "5px", // adjust the positioning as per your requirement
    right: "10px",
    backgroundColor: "red",
    borderRadius: "50%",
    width: "10px",
    height: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold",
    color: "white",
  };

  // Define the content of the notification panel
  const notificationPanel = (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box sx={BoxStyle} className="notification-box">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#37729b",
              padding: "10px",
            }}
          >
            Notifications
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: "#6296ba",
              padding: "10px",
            }}
          >
            See All
          </Typography>
        </Box>

        <Box sx={{ maxHeight: "600px", overflowY: "auto", marginTop: "-20px" }}>
          <List sx={{ width: "100%" }}>
            {notifications.map((notification) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: "15px",
                }}
                className="notification"
              >
                <ListItem key={notification.id}>
                  <ListItemAvatar>
                    <Avatar src={notification.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.title}
                    secondary={notification.content}
                  />
                </ListItem>
                <MoreHorizIcon
                  sx={{ marginBottom: "20px", color: "#97afc1" }}
                />
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Popover>
  );

  return (
    <>
      <IconButton onClick={handleClick}>
        <NotificationsOutlinedIcon
          sx={{
            color: "white",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        />
        {true && (
        <Box sx={countStyle}></Box>
        )}
      </IconButton>
      {notificationPanel}
    </>
  );
};

export default NotificationPanel;
