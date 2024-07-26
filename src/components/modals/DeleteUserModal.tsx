import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { deleteUserRequest } from "../../services/http/users";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 4,
  border: "2px solid #FF3A29",
  boxShadow: 24,
  p: 3,
};

const DeleteUserModal: React.FC<{
  handleClose: () => void;
  open: boolean;
}> = ({ handleClose, open }) => {
  const { selectedUserId, deleteUser } = useContext(UsersContext);
  
  const deleteUserHandler = async () => {
    if (!selectedUserId) return window.alert("Falha ao excluir produto.");

    const res = await deleteUserRequest(+selectedUserId!);

    if (res?.status == 200) {
      deleteUser(selectedUserId);
      return handleClose();
    }

    window.alert("Falha ao excluir usuário.");
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
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight="medium"
            component="h5"
          >
            Excluir Usuário
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Tem certeza que deseja excluir esse produto? Essa ação é
            irreversível.
          </Typography>

          <Box
            width="100%"
            display="flex"
            mt={2}
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              onClick={deleteUserHandler}
              style={{
                backgroundColor: "#FF3A29",
                color: "white",
                borderRadius: 8,
                textTransform: "capitalize",
                fontFamily: "sora",
                fontSize: 16,
              }}
              endIcon={<ClearRoundedIcon style={{ fontSize: 25 }} />}
            >
              Quero Excluir
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteUserModal;
