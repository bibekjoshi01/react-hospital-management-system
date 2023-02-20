import { Box, Button, Container, Grid } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "../../css/Dashboard.css";
import DisplayBox from "../DisplayBox";

const InventoryDashboard = () => {
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
              m: "10px 0px 30px 20px ",
            }}
          >
            <DashboardIcon sx={{ m: "0px 10px 0px 0px" }} />
            Inventory Dashboard
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DisplayBox />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DisplayBox />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DisplayBox />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DisplayBox />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InventoryDashboard;
