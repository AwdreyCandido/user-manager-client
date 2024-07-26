import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ArrowBack } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { UsersContext } from "../../context/UsersContext";
import {
  createUserRequest,
  updateUserRequest,
} from "../../services/http/users";
import { IUser } from "../../models/IUser";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  right: "0",
  transform: "translate(0, -50%)",
  width: "40vw",
  bgcolor: "background.paper",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
  boxShadow: 24,
  height: "100vh",
  p: 4,
};

const UpdateUserModal: React.FC<{
  handleClose: () => void;
  open: boolean;
}> = ({ handleClose, open }) => {
  const { selectedUserId, usersList, updateUser } = useContext(UsersContext);
  const selectedUser = usersList.find((user) => user.id == selectedUserId);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
  });

  useEffect(() => {
    if (selectedUser) {
      console.log(selectedUser);
      setFormValues({
        name: selectedUser.name,
        email: selectedUser.email,
        phone: selectedUser.phone!,
        gender: selectedUser.gender,
        birthDate: formatDate(selectedUser.birthDate),
      });
    }
  }, [selectedUser]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const updateUserHandler = async () => {
    console.log("id", selectedUserId, formValues);
    const res = await updateUserRequest(selectedUserId!, formValues);
    console.log(res);
    if (res?.status == 200 || res?.status == 201) {
      updateUser({
        ...formValues,
        id: selectedUserId!,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toISOString(),
      });
      return handleClose();
    }

    window.alert("Falha ao criar novo usuário.");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" alignItems="center" gap={2}>
            <div style={{ cursor: "pointer" }} onClick={handleClose}>
              <ArrowBack style={{ fontSize: 40 }} />
            </div>
            <Typography id="modal-modal-title" variant="h4" fontWeight="medium">
              Editar Usuário
            </Typography>
          </Box>

          <Typography
            variant="h6"
            onChange={handleChange}
            fontWeight="medium"
            marginTop={4}
            marginBottom={2}
          >
            Informações Principais
          </Typography>

          <Box display="flex" flexDirection="column" gap={3}>
            <TextField
              name="name"
              label="Nome"
              variant="outlined"
              onChange={handleChange}
              value={formValues.name}
              size="small"
              style={{ width: "100%" }}
            />
            <Box width="100%" display="flex" gap={2}>
              <TextField
                name="email"
                label="E-mail"
                variant="outlined"
                onChange={handleChange}
                value={formValues.email}
                size="small"
                style={{ width: "100%" }}
              />
              <TextField
                name="phone"
                label="Telefone"
                variant="outlined"
                onChange={handleChange}
                value={formValues.phone}
                size="small"
                style={{ width: "100%" }}
              />
            </Box>
            <Box width="100%" display="flex" gap={2}>
              <TextField
                name="birthDate"
                label="Data de Nascimento"
                variant="outlined"
                onChange={handleChange}
                value={new Date(formValues.birthDate).toDateString()}
                size="small"
                type="date"
                style={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel id="gender-label">Gênero</InputLabel>
                <Select
                  name="gender"
                  label="Gênero"
                  labelId="gender-label"
                  onChange={handleChange}
                  value={formValues.gender}
                >
                  <MenuItem value="N">Não informado</MenuItem>
                  <MenuItem value="M">Masculino</MenuItem>
                  <MenuItem value="F">Feminino</MenuItem>
                  <MenuItem value="O">Outros</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            mt={10}
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{
                borderColor: "#FF3A29",
                color: "#FF3A29",
                borderRadius: 8,
                textTransform: "capitalize",
                fontFamily: "sora",
                fontSize: 16,
              }}
              endIcon={<ClearRoundedIcon />}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={updateUserHandler}
              style={{
                backgroundColor: "#4339F2",
                borderRadius: 8,
                textTransform: "capitalize",
                fontFamily: "sora",
                fontSize: 16,
              }}
              endIcon={<AddRoundedIcon />}
            >
              Confirmar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
