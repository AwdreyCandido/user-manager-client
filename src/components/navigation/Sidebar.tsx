import { HomeRounded } from "@mui/icons-material";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import {
  Container,
  Drawer,
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Container>
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
            <ListItem style={{ gap: 10 }}>
              <HomeRounded />
              <Typography>Home</Typography>
            </ListItem>
            <ListItem style={{ gap: 10 }}>
              <PieChartRoundedIcon />
              <Typography>Insights</Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Sidebar;
