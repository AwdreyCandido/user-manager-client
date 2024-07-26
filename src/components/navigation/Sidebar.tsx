import { HomeRounded } from "@mui/icons-material";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  CssBaseline
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <CssBaseline/>
      <Drawer
        variant="permanent"
        
        sx={{
          width: 180,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            display: "flex",
            gap: "20px",
            width: 180,
            boxSizing: "border-box",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            paddingY: "20px",
          },
        }}
      >
        <Box paddingX="20px">
          <Typography variant="h4">Logo</Typography>
        </Box>
        <Box>
          <List
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <NavLink
              to="/dashboard/home"
              style={({ isActive }) => {
                return isActive ? {color: "#333"} : {color: "#8f8f8f"};
              }}
            >
              <ListItem style={{ gap: 10 }}>
                <HomeRounded />
                <Typography>Home</Typography>
              </ListItem>
            </NavLink>
            <NavLink
              to="/dashboard/insights"
              style={({ isActive }) => {
                return isActive ? {color: "#333"} : {color: "#8f8f8f"};
              }}
            >
              <ListItem style={{ gap: 10 }}>
                <PieChartRoundedIcon />
                <Typography>Insights</Typography>
              </ListItem>
            </NavLink>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
