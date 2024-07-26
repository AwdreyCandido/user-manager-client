import BarChart from "../../../components/charts/BarChart";
import PieChart from "../../../components/charts/PieChart";
import InformativeCards from "../../../components/informative-cards/InformativeCards";
import Layout from "../../../components/layout/Layout";
import { Typography, Box, Card, CardContent } from "@mui/material";

const InsightsPage = () => {
  return (
    <Layout>
      <Box style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" fontWeight="medium" component="h3">
          Informações
        </Typography>

        <InformativeCards />
        <Box display="flex" gap={2} mt={4}>
          <Card
            style={{ width: "100%", borderRadius: 15, padding: "20px 30px", flex: 2 }}
            variant="outlined"
          >
            <BarChart />
          </Card>
          <Card
            style={{ width: "400px", borderRadius: 15, padding: "20px 30px", flex: 1 }}
            variant="outlined"
          >
            <PieChart />
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default InsightsPage;
