import {
  Box,
  Container,
  createTheme,
  Drawer,
  ThemeProvider,
} from "@mui/material";
import Sidebar from "../navigation/Sidebar";



const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
      <Container>
        <Sidebar />
        <section>{children}</section>
      </Container>
  );
};

export default Layout;
