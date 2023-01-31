import React from "react";
import {
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
import { useTranslation } from "react-i18next";
import axios from "axios";

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
  const { t } = useTranslation();
  
  const formik = useFormik({
    initialValues: {
      blockReason: "",
    },
    onSubmit: async (values) => {

      await axios.post("http://localhost:5084/api/user/ban", { userId: blockedUser?.id, reason: values.blockReason,
        headers: { userToken: sessionStorage.getItem("token")} });
      onClose()
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{ t("admin.blockDialog.title") }</DialogTitle>
        <DialogContent>
          <DialogContentText>
          { t("admin.blockDialog.text") } {blockedUser?.fullname}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="blockReason"
            label={ t("admin.blockDialog.reasonText") }
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.blockReason}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
            { t("cancel") }
          </Button>
          <Button type="submit" variant="contained">
            { t("admin.blockDialog.submit") }
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BlockUserModal;
