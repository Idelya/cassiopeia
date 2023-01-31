import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
} from "@mui/material";
import OffersList from "../OffersList";
import OfferItem from "./OfferItem";
import { DeliveryStatus, ExtendOffer } from "../../types/types";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import axios from "axios";

const CustomerSearchOfferSection = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [offers, setOffers] = useState<ExtendOffer[]>([]);

  axios.get("http://localhost:5084/api/offer/all", { headers: { userToken: sessionStorage.getItem("token")} })
    .then((response) => setOffers(response.data));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", m: 1, mb: 4, mr: 4 }}
      >
        <Autocomplete
          freeSolo
          id="search-offer"
          options={[]}
          fullWidth
          sx={{
            minWidth: 240,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t("search") + "..."}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Button sx={{ml: 3, p: 2}} startIcon={<ShoppingBasketIcon/>} variant="outlined" onClick={() => navigate("/basket")}>{ t("basket.basket") }</Button>
      </Box>
      <OffersList>
        {offers.map((offer) => (
          <OfferItem offer={offer} />
        ))}
      </OffersList>
    </Box>
  );
};

export default CustomerSearchOfferSection;
