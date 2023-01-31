import { Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ExtendOffer } from "../../types/types";
import OfferDescription from "./OfferDescription";
import OfferGallery from "./OfferGallery";
import OfferMainDetails from "./OfferMainDetails";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useTranslation } from "react-i18next";
import axios from "axios";

const OfferSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  let { offerId } = useParams();

  const [offer, setOffer] = useState<ExtendOffer>({
    id: -1,
    name: "",
    price: 10,
    displayAmount: 1,
    deliveryTypes: [],
    newDeliveryTypes: [],
    description: "",
    photos: []
  });

  useEffect(() => {
    axios
      .get("http://localhost:5084/api/offer/" + offerId)
      .then((response) => setOffer(response.data));
  }, [offerId]);
  
  return  <Grid container spacing={2} sx={{ width: "100%", p: 7 }}>
  <Grid item xs={12} sx={{ display: "flex", justifyContent: "right" }}>
    <Button variant="contained" sx={{mr: 3}} onClick={() => navigate("/offers")}>{ t("basket.backToSearch") }</Button>
    <Button startIcon={<ShoppingBasketIcon/>} variant="outlined" onClick={() => navigate("/basket")}>{ t("back") }</Button>
  </Grid>
    <Grid item xs={6} sx={{ display: "flex", justifyContent: "left" }}>
      <OfferGallery
        offer={offer}
      />
    </Grid>
    <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>
      <OfferMainDetails
        offer={offer}
      />
    </Grid>
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <OfferDescription
        offer={offer}
      />
    </Grid>
  </Grid>;
};

export default OfferSection;
