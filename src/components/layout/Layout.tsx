import { Box } from "@mui/material";
import Sidebar from "../navigation/Sidebar";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100vw", backgroundColor: "#f5f5f5" }}>
      <Sidebar />
      <Box
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
        }}
        paddingX={4}
        paddingBottom={6}
        paddingY={3}
        sx={{overflowY: 'scroll'}}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
