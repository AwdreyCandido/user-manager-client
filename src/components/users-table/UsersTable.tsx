import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddUserModal from "../modals/AddUserModal";
import DeleteUserModal from "../modals/DeleteUserModal";
import UpdateUserModal from "../modals/UpdateUserModal";
import emptyLogo from "./../../assets/empty.png";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TablePaginationActions from "./TablePaginationActions";
import { Typography, TableHead, Button } from "@mui/material";
import { UsersContext } from "../../context/UsersContext";
import { formatPhoneNumber, localeDateConfig } from "../../data/utils";
import { IUser } from "../../models/IUser";
import { useContext, useState } from "react";

const genderHelper: { M: string; F: string; N: string; O: string } = {
  M: "Masculino",
  F: "Feminino",
  N: "Não informado",
  O: "Outros",
};

const UsersTable: React.FC<{ usersList: IUser[] }> = ({ usersList }) => {
  const { selectUser } = useContext(UsersContext);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleAddOpen = () => setOpenAddModal(!openAddModal);
  const handleUpdateOpen = () => setOpenUpdateModal(!openUpdateModal);
  const handleDeleteOpen = () => setOpenDeleteModal(!openDeleteModal);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    event?.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          <img style={{ width: "400px" }} src={emptyLogo} />
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
              <TableCell>Telefone</TableCell>
              <TableCell align="right">Gênero</TableCell>
              <TableCell align="right">Nascimento</TableCell>
              {/* <TableCell align="right">Criado em:</TableCell> */}
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
            {(rowsPerPage > 0
              ? usersList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : usersList
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{formatPhoneNumber(row.phone)}</TableCell>
                <TableCell align="right">
                  {genderHelper[row.gender as keyof typeof genderHelper]}
                </TableCell>
                <TableCell align="right">
                  {new Date(row.birthDate).toLocaleDateString()}
                </TableCell>
                {/* <TableCell align="right">
                  {new Date(row?.createdAt!).toLocaleDateString()}
                </TableCell> */}
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
          <TableFooter>
            <TableRow>
              <TablePagination
                style={{ backgroundColor: "#e9e9e9" }}
                rowsPerPageOptions={[5, 10, 25, { label: "Tudo", value: -1 }]}
                count={usersList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "Linhas por página",
                    },
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersTable;
