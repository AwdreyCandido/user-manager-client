import InformativeCards from "../../../components/informative-cards/InformativeCards";
import Layout from "../../../components/layout/Layout";
import { Typography, Box } from "@mui/material";

const InsightsPage = () => {
  return (
    <Layout>
      <Box style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" fontWeight="medium" component="h3">
          Informações
        </Typography>

        <InformativeCards />
      </Box>
    </Layout>
  );
};

export default InsightsPage;
