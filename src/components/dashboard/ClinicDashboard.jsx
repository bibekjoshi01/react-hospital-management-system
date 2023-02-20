import { Box, Button} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import '../../css/Dashboard.css'


const ClinicDashboard = () => {

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
            <DashboardIcon sx={{ m: "0px 10px 0px 0px" }} />
            Clinic Dashboard
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          borderRadius="5px"
          boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
          justifyContent="center"
        ></Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          borderRadius="5px"
          boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
          justifyContent="center"
        ></Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          borderRadius="5px"
          boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
          justifyContent="center"
        ></Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          borderRadius="5px"
          boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
          justifyContent="center"
        ></Box>
      </Box>
    </Box>
  );
};

export default ClinicDashboard;


