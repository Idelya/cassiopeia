import React from "react";
import Typography from "@mui/material/Typography";
import LoginForm from "../Login/LoginForm";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { User } from "../../types/types";
import { useFormik } from "formik";

interface BlockUserModalProps {
  open: boolean;
  onClose: () => void;
  blockedUser: User | null;
}
const BlockUserModal = ({
  open,
  onClose,
  blockedUser,
}: BlockUserModalProps) => {
  const formik = useFormik({
    initialValues: {
      blockReason: "",
    },
    onSubmit: (values) => {
      //TODO: tutaj logowanie
      console.log(
        "Zablokowano użytkownika " +
          blockedUser?.fullname +
          " z powodu " +
          values.blockReason
      );
      onClose();
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Zablokuj użytkownika</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Podaj czytelny dla użytkownika powód blokady. Zostanie on wysłany do
            użytkownika {blockedUser?.fullname}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="blockReason"
            label="Powód blokady"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.blockReason}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Anuluj</Button>
          <Button type="submit">Zablokuj</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BlockUserModal;
