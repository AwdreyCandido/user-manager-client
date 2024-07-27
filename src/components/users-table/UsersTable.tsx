import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddUserModal from "../modals/AddUserModal";
import DeleteUserModal from "../modals/DeleteUserModal";
import UpdateUserModal from "../modals/UpdateUserModal";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import emptyLogo from "./../../assets/empty.png";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { IUser } from "../../models/IUser";
import { localeDateConfig } from "../../data/utils";
import { UsersContext } from "../../context/UsersContext";

const UsersTable: React.FC<{ usersList: IUser[] }> = ({ usersList }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleAddOpen = () => setOpenAddModal(!openAddModal);
  const handleUpdateOpen = () => setOpenUpdateModal(!openUpdateModal);
  const handleDeleteOpen = () => setOpenDeleteModal(!openDeleteModal);

  const { selectUser } = useContext(UsersContext);

  if (usersList.length == 0) {
    return (
      <Box
        width="100%"
        height="100%"
        mt={10}
        borderRadius={5}
        padding={3}
        bgcolor="#e0e0e0"
      >
        <Typography id="modal-modal-title" variant="h4" fontWeight="medium">
          Nenhum registro encontrado
        </Typography>
        <Box display="flex" justifyContent="center" mt={3}>
          <img style={{width: "400px"}} src={emptyLogo} />
        </Box>
      </Box>
    );
  }

  return (
    <Box marginTop={4} paddingBottom={4}>
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
  );
};

export default UsersTable;
