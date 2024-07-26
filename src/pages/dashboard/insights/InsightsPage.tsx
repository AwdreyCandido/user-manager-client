import ChartsContainer from "../../../components/charts-container/ChartsContainer";
import BarChart from "../../../components/charts/BarChart";
import PieChart from "../../../components/charts/PieChart";
import InformativeCards from "../../../components/informative-cards/InformativeCards";
import Layout from "../../../components/layout/Layout";
import { Typography, Box, Card, CardContent } from "@mui/material";

const InsightsPage = () => {
  return (
    <Layout>
      <Box style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" fontWeight="Bold" component="h4">
          Informações
        </Typography>

        <InformativeCards />
        <ChartsContainer />
      </Box>
    </Layout>
  );
};

export default InsightsPage;
