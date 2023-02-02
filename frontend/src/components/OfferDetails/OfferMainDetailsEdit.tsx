import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeliveryType, ExtendOffer } from "../../types/types";

interface OfferMainDetailsEditProps {
  offer: ExtendOffer;
  onChange: (offer: ExtendOffer) => void;
}

const OfferMainDetailsEdit = ({
  offer,
  onChange,
}: OfferMainDetailsEditProps) => {
  const { t } = useTranslation();

  const [deliveryTypes, setDeliveryTypes] = useState<DeliveryType[]>([]);
  useEffect(() => 
  {axios.get("http://localhost:5084/api/offer/delivery", { headers: { userToken: sessionStorage.getItem("token")} })
        .then((response) => setDeliveryTypes(response.data))}, []);
  
  
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">{ t("offer.productName") }:</Typography>
      <TextField
        required
        margin="dense"
        id="name"
        fullWidth
        variant="outlined"
        value={offer.name}
        onChange={(e) => onChange({ ...offer, name: e.target.value })}
      />
      <Box sx={{ justifyContent: "space-between", display: "flex", mt: 2 }}>
        <Box
          sx={{
            width: "60%",
            mr: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">{ t("offer.deliveryMethods") }</Typography>
          <Select
            sx={{ mt: 1, mb: 0.5 }}
            id="deliveryTypes"
            multiple
            value={offer.newDeliveryTypes}
            onChange={(e) =>
              onChange({
                ...offer,
                newDeliveryTypes: (typeof e.target.value === "string"
                  ? e.target.value.split(",")
                  : e.target.value
                ).map((elem) => Number(elem)),
              })
            }
            input={<OutlinedInput />}
          >
            {deliveryTypes.map(({ id, name, price }) => (
              <MenuItem key={name} value={id}>
                {`${name} - ${price} zł`}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box
          sx={{
            width: "40%",
            ml: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">{ t("price") }</Typography>
          <TextField
            required
            margin="dense"
            fullWidth
            type="number"
            id="name"
            variant="outlined"
            value={offer.price}
            onChange={(e) =>
              onChange({ ...offer, price: Number(e.target.value) })
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OfferMainDetailsEdit;
