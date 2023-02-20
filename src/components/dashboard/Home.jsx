import React from "react";
import { Box, Button} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

function home() {
  return (
    <Box m="20px" className="title">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Button
            sx={{
              backgroundColor: "#1e5b87",
              color: "white",
              fontSize: "25px",
              fontWeight: "bold",
              padding: "10px 20px",
              m: "10px 0px 30px 0px ",
            }}
          >
            <HomeIcon sx={{ m: "0px 10px 0px 0px" }} />
            Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default home;
