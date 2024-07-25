import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
          <Typography id="modal-modal-title" variant="h4" fontWeight="medium" component="h2">
            Adicionar Novo Usuário
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUserModal;
