import ChartsContainer from "../../../components/charts-container/ChartsContainer";
import InformativeCards from "../../../components/informative-cards/InformativeCards";
import Layout from "../../../components/layout/Layout";
import { Typography, Box } from "@mui/material";

const InsightsPage = () => {
  return (
    <Layout>
      <Box maxHeight="100vh" paddingY={3} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" fontWeight="medium">
          Informações
        </Typography>

        <InformativeCards />
        <ChartsContainer />
      </Box>
    </Layout>
  );
};

export default InsightsPage;
