import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface DeleteOfferModalProps {
  open: boolean;
  onClose: () => void;
  offerId: string;
}

const OnDeleteOffer = async (offerId: string) => {

  await axios.delete("http://localhost:5084/api/offer/"+offerId, { headers: { userToken: sessionStorage.getItem("token")} });
}

const DeleteOfferModal = ({
  open,
  onClose,
  offerId,
}: DeleteOfferModalProps) => {
  const { t } = useTranslation();
  
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{ t("offer.deleteConfirm") }</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
          { t("cancel") }
          </Button>
          <Button type="submit" variant="contained" onClick={() => {OnDeleteOffer(offerId); onClose();}}>
          { t("delete") }
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default DeleteOfferModal;
