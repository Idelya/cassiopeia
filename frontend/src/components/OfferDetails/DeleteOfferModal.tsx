import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface DeleteOfferModalProps {
  open: boolean;
  onClose: () => void;
  offerId: string;
}
const DeleteOfferModal = ({
  open,
  onClose,
  offerId,
}: DeleteOfferModalProps) => {

  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Czy na pewno chcesz usunąć tę ofertę?</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
            Anuluj
          </Button>
          <Button type="submit" variant="contained">
            Usuń
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default DeleteOfferModal;
