import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ManRoundedIcon from "@mui/icons-material/ManRounded";
import WomanRoundedIcon from "@mui/icons-material/WomanRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { useState, useEffect } from "react";
import {
  getRegistersPerMonthByGender,
  getRegistersQuantity,
} from "../../services/http/insights";
import { months } from "../../data/months";

const InformativeCards = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [registerPerGender, setRegisterPerGender] = useState<number[]>([
    0, 0, 0, 0,
  ]);

  useEffect(() => {
    if (selectedMonth === 0) {
      getRegistersQuantityHandler();
    } else {
      getRegistersPerMonthByGenderHandler();
    }
  }, [selectedMonth]);

  const getRegistersPerMonthByGenderHandler = async () => {
    const res = await getRegistersPerMonthByGender(selectedMonth);
    if (res?.status == 200) {
      extractRegistersQuantity(res?.data);
    }
  };

  const getRegistersQuantityHandler = async () => {
    const res = await getRegistersQuantity();
    if (res?.status == 200) {
      extractRegistersQuantity(res?.data);
    }
  };

  const extractRegistersQuantity = (
    data: { gender: string; quantity: number }[]
  ) => {
    const list: number[] = [0, 0, 0, 0];

    data.forEach((item) => {
      if (item.gender == "M") return (list[0] = item.quantity);
      if (item.gender == "F") return (list[1] = item.quantity);
      if (item.gender == "N") return (list[2] = item.quantity);
      if (item.gender == "O") return (list[3] = item.quantity);
    });

    setRegisterPerGender(() => list);
  };

  const selectMonthHandler = (event: SelectChangeEvent<number>) => {
    const month = +event.target.value;
    setSelectedMonth(() => month);
  };

  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%", mt: 4 }}>
      <FormControl
        style={{
          display: "flex",
          width: "100%",
          borderRadius: 10,
        }}
      >
        <InputLabel
          style={{ backgroundColor: "#fff", padding: "0 2px" }}
          id="demo-simple-select-label"
        >
          Selecione um Mês
        </InputLabel>
        <Select
          style={{
            height: "50px",
            width: 250,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={selectedMonth}
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
      <Box display="flex" gap={1} sx={{ width: "100%", mt: 2 }}>
        <Grid width={"100%"} justifyContent="space-between" container columns={10} spacing={2}>
          <Grid item>
            <Card
              style={{ borderRadius: 15, minWidth: "fit-content" }}
              variant="outlined"
            >
              <CardContent>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18 }}
                  color="text.secondary"
                >
                  Total de Registros
                </Typography>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  alignItems="start"
                  gap={1}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "end",
                      color: "#84cc16",
                      gap: 10,
                    }}
                  >
                    <PeopleRoundedIcon sx={{ fontSize: 60 }} />
                    <Typography
                      variant="h2"
                      lineHeight="90%"
                      fontWeight="medium"
                    >
                      {registerPerGender.reduce((total, curr) => {
                        return (total += curr);
                      })}
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ borderRadius: 15 }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18 }}
                  color="text.secondary"
                >
                  Sexo Masculino
                </Typography>
                <Box display="flex" alignItems="end" gap={1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      color: "#4339F2",
                    }}
                  >
                    <ManRoundedIcon sx={{ fontSize: 60 }} />
                    <Typography
                      variant="h2"
                      lineHeight="90%"
                      fontWeight="medium"
                    >
                      {registerPerGender[0]}
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary">
                    Registros
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ borderRadius: 15 }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18 }}
                  color="text.secondary"
                >
                  Sexo Feminino
                </Typography>
                <Box display="flex" alignItems="end" gap={1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      color: "#FF007F",
                    }}
                  >
                    <WomanRoundedIcon sx={{ fontSize: 60 }} />
                    <Typography
                      variant="h2"
                      lineHeight="90%"
                      fontWeight="medium"
                    >
                      {registerPerGender[1]}
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary">
                    Registros
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ borderRadius: 15 }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18 }}
                  color="text.secondary"
                >
                  Não Informado
                </Typography>
                <Box display="flex" alignItems="end" gap={1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      color: "#e6e600 ",
                    }}
                  >
                    <WcRoundedIcon sx={{ fontSize: 60 }} />
                    <Typography
                      variant="h2"
                      lineHeight="90%"
                      fontWeight="medium"
                    >
                      {registerPerGender[2]}
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary">
                    Registros
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ borderRadius: 15 }} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18 }}
                  color="text.secondary"
                >
                  Outros
                </Typography>
                <Box display="flex" alignItems="end" gap={1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      color: "#333 ",
                    }}
                  >
                    <TransgenderRoundedIcon sx={{ fontSize: 60 }} />
                    <Typography
                      variant="h2"
                      lineHeight="90%"
                      fontWeight="medium"
                    >
                      {registerPerGender[3]}
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary">
                    Registros
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InformativeCards;
