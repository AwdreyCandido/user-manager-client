import { Box, Card } from "@mui/material";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import { useState } from "react";

const ChartsContainer = () => {
  const [registerPerMonth, setRegisterPerMonth] = useState([12, 24, 7, 2]);

  return (
    <Box display="flex" gap={2} mt={4}>
      <Card
        style={{
          width: "100%",
          borderRadius: 15,
          padding: "20px 30px",
          flex: 2,
        }}
        variant="outlined"
      >
        <BarChart registersPerMonth={registerPerMonth} />
      </Card>
      <Card
        style={{
          width: "400px",
          borderRadius: 15,
          padding: "20px 30px",
          flex: 1,
        }}
        variant="outlined"
      >
        <PieChart registersPerMonth={registerPerMonth} />
      </Card>
    </Box>
  );
};

export default ChartsContainer;
