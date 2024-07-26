import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import { useEffect, useState } from "react";
import { getRegistersPerMonthByGender } from "../../services/insights";
import SelectInput, { SelectChangeEvent } from "@mui/material/Select";
import { months } from "../../data/months";

const ChartsContainer = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [registerPerMonth, setRegisterPerMonth] = useState<number[]>([]);

  useEffect(() => {
    getRegistersPerMonthByGenderHandler();
  }, [selectedMonth]);

  const getRegistersPerMonthByGenderHandler = async () => {
    const res = await getRegistersPerMonthByGender(selectedMonth);
    console.log(res?.data);

    if (res?.status == 200) {
      extractRegistersQuantity(res?.data);
    }
  };

  const extractRegistersQuantity = (
    data: { gender: string; quantity: number }[]
  ) => {
    const list: number[] = [];

    data.forEach((item) => {
      if (item.gender == "M") return (list[0] = item.quantity);
      if (item.gender == "F") return (list[1] = item.quantity);
      if (item.gender == "N") return (list[2] = item.quantity);
      if (item.gender == "O") return (list[3] = item.quantity);
    });

    setRegisterPerMonth(() => list);
  };

  const selectMonthHandler = (event: SelectChangeEvent<number>) => {
    const month = +event.target.value;
    setSelectedMonth(() => month);
  };

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
        <div style={{ position: "relative" }}>
          <FormControl
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "200px",
              backgroundColor: "white",
            }}
          >
            <InputLabel
              style={{ backgroundColor: "#fff", padding: "0 2px" }}
              id="demo-simple-select-label"
            >
              Selecione um Mês
            </InputLabel>
            <Select
              style={{ height: "50px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={selectedMonth}
              label="Age"
              onChange={selectMonthHandler}
            >
              {months.map((month) => {
                return (
                  <MenuItem key={month.number} value={month.number}>
                    {month.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <BarChart registersPerMonth={registerPerMonth} />
        </div>
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
