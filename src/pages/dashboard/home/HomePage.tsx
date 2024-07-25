import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../../components/layout/Layout";
import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Layout>
      <Box style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" fontWeight="medium" component="h3">
          Visão Geral
        </Typography>
        <Box marginTop={4}>
          <TableContainer style={{ borderRadius: 10 }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome Completo</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell align="right">Gênero</TableCell>
                  <TableCell align="right">Nascimento</TableCell>
                  <TableCell align="right">Criado em:</TableCell>
                  <TableCell align="right">Atualizado em:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">
                      {new Date(row.birthDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">
                      {new Date(row.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">
                      {new Date(row.updatedAt).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default HomePage;

function createUser(
  id: number,
  name: string,
  email: string,
  gender: "M" | "F" | "N",
  birthDate: string,
  createdAt: string,
  updatedAt: string
) {
  return { id, name, email, gender, birthDate, createdAt, updatedAt };
}
const rows = [
  createUser(
    1,
    "João Silva",
    "joao.silva@example.com",
    "M",
    "1990-05-15",
    "2024-07-24T10:00:00",
    "2024-07-24T10:00:00"
  ),
  createUser(
    2,
    "Maria Oliveira",
    "maria.oliveira@example.com",
    "F",
    "1985-09-30",
    "2024-07-24T10:00:00",
    "2024-07-24T10:00:00"
  ),
  createUser(
    3,
    "Alex Santos",
    "alex.santos@example.com",
    "N",
    "2000-01-20",
    "2024-07-24T10:00:00",
    "2024-07-24T10:00:00"
  ),
  createUser(
    4,
    "Pedro Almeida",
    "pedro.almeida@example.com",
    "M",
    "1992-11-02",
    "2024-07-24T10:00:00",
    "2024-07-24T10:00:00"
  ),
  createUser(
    5,
    "Fernanda Souza",
    "fernanda.souza@example.com",
    "F",
    "1988-04-17",
    "2024-07-24T10:00:00",
    "2024-07-24T10:00:00"
  ),
  createUser(
    6,
    "Patrícia Lima",
    "patricia.lima@example.com",
    "F",
    "1995-07-23",
    "2024-07-24T10:00:00",
    "2024-07-24T10:00:00"
  ),
];
