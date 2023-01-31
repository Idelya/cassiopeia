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
import axios from "axios";

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
      streetNumber: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:5084/api/order/buy", {
        address: {
          street: values.street,
          city: values.city,
          streetNumber: values.streetNumber,
        },
        purchases: selectedProducts?.map<any>((p) => ({
          offerId: p.id,
          deliveryId: p.chosenDelivery,
        })),
        headers: { userToken: sessionStorage.getItem("token") },
      });

      onClose();
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{t("basket.buyProducts")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("basket.deliveryAdressText")}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="city"
            label={t("basket.city")}
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="street"
            label={t("basket.street")}
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="streetNumber"
            label={t("basket.streetNumber")}
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.streetNumber}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
            {t("cancel")}
          </Button>
          <Button type="submit" variant="contained">
            {t("basket.buy")}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BuyProductsModal;
