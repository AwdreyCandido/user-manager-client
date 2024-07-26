import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../../components/layout/Layout";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AddUserModal from "../../../components/modals/AddUserModal";
import UpdateUserModal from "../../../components/modals/UpdateUserModal";
import DeleteUserModal from "../../../components/modals/DeleteUserModal";
import { UsersContext } from "../../../context/UsersContext";
import { getAllUsersRequest } from "../../../services/http/users";
import { localeDateConfig } from "../../../data/utils";

const users = [
  {
    id: 1,
    name: "Ana Costa",
    email: "ana.costa@example.com",
    gender: "F",
    birthDate: "1991-03-29T03:00:00.000Z",
    createdAt: "2024-01-05T12:15:00.000Z",
    updatedAt: "2024-01-05T12:15:00.000Z",
  },
  {
    id: 2,
    name: "Rafael Martins",
    email: "rafael.martins@example.com",
    gender: "O",
    birthDate: "1987-12-05T02:00:00.000Z",
    createdAt: "2024-01-10T12:30:00.000Z",
    updatedAt: "2024-01-10T12:30:00.000Z",
  },
  {
    id: 3,
    name: "Felipe Andrade",
    email: "felipe.andrade@example.com",
    gender: "M",
    birthDate: "1996-10-14T02:00:00.000Z",
    createdAt: "2024-01-15T13:30:00.000Z",
    updatedAt: "2024-01-15T13:30:00.000Z",
  },
  {
    id: 4,
    name: "Mariana Costa",
    email: "mariana.costa@example.com",
    gender: "F",
    birthDate: "1994-07-23T03:00:00.000Z",
    createdAt: "2024-01-20T12:45:00.000Z",
    updatedAt: "2024-01-20T12:45:00.000Z",
  },
  {
    id: 5,
    name: "João Silva",
    email: "joao.silva@example.com",
    gender: "M",
    birthDate: "1988-05-14T03:00:00.000Z",
    createdAt: "2024-01-25T13:00:00.000Z",
    updatedAt: "2024-01-25T13:00:00.000Z",
  },
  {
    id: 6,
    name: "Alex Ferreira",
    email: "alex.ferreira@example.com",
    gender: "N",
    birthDate: "1990-09-12T03:00:00.000Z",
    createdAt: "2024-01-30T13:15:00.000Z",
    updatedAt: "2024-01-30T13:15:00.000Z",
  },
  {
    id: 7,
    name: "Juliana Campos",
    email: "juliana.campos@example.com",
    gender: "F",
    birthDate: "1993-11-18T02:00:00.000Z",
    createdAt: "2024-02-10T12:45:00.000Z",
    updatedAt: "2024-02-10T12:45:00.000Z",
  },
  {
    id: 8,
    name: "Camila Almeida",
    email: "camila.almeida@example.com",
    gender: "O",
    birthDate: "1990-02-03T02:00:00.000Z",
    createdAt: "2024-02-20T13:15:00.000Z",
    updatedAt: "2024-02-20T13:15:00.000Z",
  },
  {
    id: 9,
    name: "Roberto Silva",
    email: "roberto.silva@example.com",
    gender: "M",
    birthDate: "1984-08-22T03:00:00.000Z",
    createdAt: "2024-02-25T13:00:00.000Z",
    updatedAt: "2024-02-25T13:00:00.000Z",
  },
  {
    id: 10,
    name: "Laura Santos",
    email: "laura.santos@example.com",
    gender: "F",
    birthDate: "1992-11-05T02:00:00.000Z",
    createdAt: "2024-02-15T12:30:00.000Z",
    updatedAt: "2024-02-15T12:30:00.000Z",
  },
];

const HomePage = () => {
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleAddOpen = () => setOpenAddModal(!openAddModal);
  const handleUpdateOpen = () => setOpenUpdateModal(!openUpdateModal);
  const handleDeleteOpen = () => setOpenDeleteModal(!openDeleteModal);

  const { setAllUsers, usersList, selectUser } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllProductsHandler();
  }, []);

  const getAllProductsHandler = async () => {
    setIsLoading(true);
    const res = await getAllUsersRequest();
    console.log(res);
    if (res?.status == 200) {
      setAllUsers(res.data);
      return setIsLoading(false);
    }

    window.alert("Erro ao buscar todos os produtos");
    // setAllUsers(users);
  };

  return (
    <Layout>
      <>
        {isLoading && <div>Carregando boy</div>}
        <Box
          paddingY={3}
          maxHeight={"100vh"}
          height="100vh"
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <>
            <AddUserModal handleClose={handleAddOpen} open={openAddModal} />
            <UpdateUserModal
              handleClose={handleUpdateOpen}
              open={openUpdateModal}
            />
            <DeleteUserModal
              handleClose={handleDeleteOpen}
              open={openDeleteModal}
            />
          </>
          <Typography variant="h3" fontWeight="medium">
            Visão Geral
          </Typography>
          <Box marginTop={4} paddingBottom={4}>
            <TableContainer style={{ borderRadius: 20 }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Completo</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell align="right">Gênero</TableCell>
                    <TableCell align="right">Nascimento</TableCell>
                    <TableCell align="right">Criado em:</TableCell>
                    <TableCell align="right">Atualizado em:</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={handleAddOpen}
                        variant="contained"
                        style={{
                          backgroundColor: "#4339F2",
                          borderRadius: 10,
                          textTransform: "capitalize",
                          fontFamily: "sora",
                          fontSize: 16,
                        }}
                        endIcon={<AddCircleRoundedIcon />}
                      >
                        Adicionar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersList.map((row) => (
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
                        {new Date(row?.createdAt!).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="right">
                        {new Date(row?.updatedAt!).toLocaleDateString(
                          "pt-BR",
                          localeDateConfig
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 20,
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              handleUpdateOpen();
                              selectUser(row.id!);
                            }}
                            style={{
                              width: "35px",
                              height: "35px",
                              backgroundColor: "#DAD7FE",
                            }}
                          >
                            <EditRoundedIcon style={{ color: "#4339F2" }} />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              handleDeleteOpen();
                              selectUser(row.id!);
                            }}
                            style={{
                              width: "35px",
                              height: "35px",
                              backgroundColor: "#FFE5D3",
                            }}
                          >
                            <DeleteRoundedIcon style={{ color: "#FF3A29" }} />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </>
    </Layout>
  );
};

export default HomePage;
