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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  right: "0",
  transform: "translate(0, -50%)",
  width: { xs: "90%", sm: "70%", md: "80%" },
  bgcolor: "background.paper",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
  boxShadow: 24,
  height: "100vh",
  paddingTop: 4,
  paddingX: 3
};

const AddUserModal: React.FC<{
  handleClose: () => void;
  open: boolean;
}> = ({ handleClose, open }) => {
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
            <ArrowBack style={{fontSize: 40}}/>
          <Typography id="modal-modal-title" variant="h4" fontWeight="medium">
            Novo Usuário
          </Typography>
          </Box>

          <Typography
            variant="h6"
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
              size="small"
              style={{ width: "100%" }}
            />
            <Box width="100%" display="flex" gap={2}>
              <TextField
                name="email"
                label="E-mail"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
              <TextField
                name="phone"
                label="Telefone"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </Box>
            <Box width="100%" display="flex" gap={2}>
              <TextField
                name="birthDate"
                label="Data de Nascimento"
                variant="outlined"
                size="small"
                type="date"
                style={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl fullWidth size="small" variant="outlined">
                <InputLabel id="gender-label">Gênero</InputLabel>
                <Select labelId="gender-label" name="gender" label="Gênero">
                  <MenuItem value="N">Não informado</MenuItem>
                  <MenuItem value="M">Masculino</MenuItem>
                  <MenuItem value="F">Feminino</MenuItem>
                  <MenuItem value="O">Outros</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUserModal;
