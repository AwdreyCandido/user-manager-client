import { Typography, Box, Card, CardContent } from "@mui/material";
import ManRoundedIcon from "@mui/icons-material/ManRounded";
import WomanRoundedIcon from "@mui/icons-material/WomanRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

const InformativeCards = () => {
  return (
    <Box display="flex" gap={2} sx={{ width: "fit-content", mt: 4 }}>
      <Card style={{ borderRadius: 15 }} variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
            Total de Registros
          </Typography>
          <Box display="flex" alignItems="end" gap={1}>
            <div
              style={{ display: "flex", alignItems: "end", color: "#84cc16", gap: 10 }}
            >
              <PeopleRoundedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h2" lineHeight="90%" fontWeight="medium">
                20
              </Typography>
            </div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Registros
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card style={{ borderRadius: 15 }} variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
            Sexo Masculino
          </Typography>
          <Box display="flex" alignItems="end" gap={1}>
            <div
              style={{ display: "flex", alignItems: "end", color: "#4339F2" }}
            >
              <ManRoundedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h2" lineHeight="90%" fontWeight="medium">
                5
              </Typography>
            </div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Registros
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card style={{ borderRadius: 15 }} variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
            Sexo Feminino
          </Typography>
          <Box display="flex" alignItems="end" gap={1}>
            <div
              style={{ display: "flex", alignItems: "end", color: "#FF007F" }}
            >
              <WomanRoundedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h2" lineHeight="90%" fontWeight="medium">
                5
              </Typography>
            </div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Registros
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card style={{ borderRadius: 15 }} variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
            Não Informado
          </Typography>
          <Box display="flex" alignItems="end" gap={1}>
            <div
              style={{ display: "flex", alignItems: "end", color: "#e6e600 " }}
            >
              <WcRoundedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h2" lineHeight="90%" fontWeight="medium">
                5
              </Typography>
            </div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Registros
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card style={{ borderRadius: 15 }} variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.secondary">
            Outros
          </Typography>
          <Box display="flex" alignItems="end" gap={1}>
            <div style={{ display: "flex", alignItems: "end", color: "#333 " }}>
              <TransgenderRoundedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h2" lineHeight="90%" fontWeight="medium">
                5
              </Typography>
            </div>
            <Typography sx={{ fontSize: 18 }} color="text.secondary">
              Registros
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InformativeCards;
