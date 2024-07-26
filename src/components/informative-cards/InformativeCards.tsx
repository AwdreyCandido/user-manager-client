import { Typography, Box, Card, CardContent, Grid } from "@mui/material";
import ManRoundedIcon from "@mui/icons-material/ManRounded";
import WomanRoundedIcon from "@mui/icons-material/WomanRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { useState, useEffect } from "react";
import {
  getRegistersPerMonthByGender,
  getRegistersQuantity,
} from "../../services/insights";

const InformativeCards = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [registerPerGender, setRegisterPerGender] = useState<number[]>([
    0, 0, 0, 0,
  ]);

  useEffect(() => {
    getRegistersQuantityHandler();
  }, [selectedMonth]);

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

  return (
    <Box display="flex" gap={2} sx={{ width: "100%", mt: 4 }}>
      <Grid width={"100%"} container columns={10} spacing={2}>
        <Grid item xs={1.5}>
          <Card style={{ borderRadius: 15, minWidth: "fit-content" }} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
                Total de Registros
              </Typography>
              <Box
                display="flex"
                flexDirection={"column"}
                alignItems="start"
                gap={2}
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
                  <Typography variant="h2" lineHeight="90%" fontWeight="medium">
                    {registerPerGender.reduce((total, curr) => {
                      return (total += curr);
                    })}
                  </Typography>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card style={{ borderRadius: 15 }} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
                Sexo Masculino
              </Typography>
              <Box display="flex" alignItems="end" gap={2}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    color: "#4339F2",
                  }}
                >
                  <ManRoundedIcon sx={{ fontSize: 60 }} />
                  <Typography variant="h2" lineHeight="90%" fontWeight="medium">
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
        <Grid item xs={2}>
          <Card style={{ borderRadius: 15 }} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
                Sexo Feminino
              </Typography>
              <Box display="flex" alignItems="end" gap={2}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    color: "#FF007F",
                  }}
                >
                  <WomanRoundedIcon sx={{ fontSize: 60 }} />
                  <Typography variant="h2" lineHeight="90%" fontWeight="medium">
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
        <Grid item xs={2}>
          <Card style={{ borderRadius: 15 }} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
                Não Informado
              </Typography>
              <Box display="flex" alignItems="end" gap={2}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    color: "#e6e600 ",
                  }}
                >
                  <WcRoundedIcon sx={{ fontSize: 60 }} />
                  <Typography variant="h2" lineHeight="90%" fontWeight="medium">
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
        <Grid item xs={2}>
          <Card style={{ borderRadius: 15 }} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
                Outros
              </Typography>
              <Box display="flex" alignItems="end" gap={2}>
                <div
                  style={{ display: "flex", alignItems: "end", color: "#333 " }}
                >
                  <TransgenderRoundedIcon sx={{ fontSize: 60 }} />
                  <Typography variant="h2" lineHeight="90%" fontWeight="medium">
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
  );
};

export default InformativeCards;
