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
import { useNavigate } from "react-router";

interface BasketAddModalProps {
  open: boolean;
  onClose: () => void;
}

const BasketAddModal = ({
  open,
  onClose,
}: BasketAddModalProps) => {
  const { t } = useTranslation();
  
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{ t("basket.basketInfo") }</DialogTitle>
        <DialogActions sx={{ p: 3 }}>
          <Button type="submit" variant="contained" onClick={(event) => {event.stopPropagation();
                event.preventDefault(); onClose();}}>
          OK
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default BasketAddModal;
