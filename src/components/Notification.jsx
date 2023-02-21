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
  // Define state to keep track of whether the notification panel is open or not
  const [anchorEl, setAnchorEl] = useState(null);
  // const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);


  // const unreadMessages = notifications.filter(
  //   (notification) => !notification.read
  // );
  // const unreadMessagesLength = unreadMessages.length;

  // Define an event handler to open the notification panel when the notification icon is clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setUnreadMessagesCount(0);
  };

  // Define an event handler to close the notification panel
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Define some dummy data for the notifications
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
      </IconButton>
      {notificationPanel}
    </>
  );
};

export default NotificationPanel;
