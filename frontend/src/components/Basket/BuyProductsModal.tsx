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
import { ExtendOffer } from "../../types/types";
import { useFormik } from "formik";

interface BuyProductsModalProps {
  open: boolean;
  onClose: () => void;
  selectedProducts: ExtendOffer[] | null;
}
const BuyProductsModal = ({
  open,
  onClose,
  selectedProducts,
}: BuyProductsModalProps) => {
  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      postalCode: ""
    },
    onSubmit: (values) => {
      //TODO: tutaj logowanie
      console.log(
        "Złożono zamówienie"
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
            Podaj adres dostawy
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="street"
            label="Ulica i numer"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="city"
            label="Miasto"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="postalCode"
            label="Kod pocztowy"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
            Anuluj
          </Button>
          <Button type="submit" variant="contained">
            Kup
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BuyProductsModal;
