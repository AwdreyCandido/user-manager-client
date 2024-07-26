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
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { ArrowBack } from "@mui/icons-material";
import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { createUserRequest } from "../../services/http/users";
import {
  notifyError,
  notifySuccess,
} from "../../services/notifications/toasts";
import { formatDate } from "../../data/months";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  right: "0",
  transform: "translate(0, -50%)",
  width: { xs: "40%", sm: "40%", md: "40%" },
  bgcolor: "background.paper",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
  boxShadow: 24,
  height: "100vh",
  paddingTop: 4,
  paddingX: 3,
};

const AddUserModal: React.FC<{
  handleClose: () => void;
  open: boolean;
}> = ({ handleClose, open }) => {
  const { addUser } = useContext(UsersContext);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addNewUserHandler = async () => {
    const res = await createUserRequest(formValues);

    if (res?.status == 200 || res?.status == 201) {
      const id = res.data.insertId;
      addUser({
        ...formValues,
        id: id,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toISOString(),
      });
      handleClose();
      return notifySuccess("Usuário cadastrado com sucesso.");
    }

    notifyError("Falha ao criar novo usuário.");
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
              Novo Usuário
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
                value={formatDate(
                  new Date(formValues.birthDate).toUTCString()
                )}
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
              onClick={addNewUserHandler}
              style={{
                backgroundColor: "#4339F2",
                borderRadius: 8,
                textTransform: "capitalize",
                fontFamily: "sora",
                fontSize: 16,
              }}
              endIcon={<AddRoundedIcon />}
            >
              Adicionar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUserModal;
