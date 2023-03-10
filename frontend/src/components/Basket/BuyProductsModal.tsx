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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
        <DialogTitle>{ t("basket.buyProducts") }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            { t("basket.deliveryAdressText") }
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="street"
            label={ t("basket.streetAndNumber") }
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
            label={ t("basket.city") }
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
            label={ t("basket.postalCode") }
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
          { t("cancel") }
          </Button>
          <Button type="submit" variant="contained">
          { t("basket.buy") }
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BuyProductsModal;
