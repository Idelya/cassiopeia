import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { ExtendOffer } from "../../types/types";
import { useNavigate } from "react-router";
import OfferGalleryEdit from "./OfferGalleryEdit";
import OfferMainDetailsEdit from "./OfferMainDetailsEdit";
import OfferDescriptionEdit from "./OfferDescriptionEdit";
import { useTranslation } from "react-i18next";
import axios from "axios";



const OnSaveOffer = async (offer: ExtendOffer) => {

  let config = {
    headers: {
      userToken: sessionStorage.getItem("token"),
    }
  }

  await axios.post("http://localhost:5084/api/offer/create", {
    name: offer.name,
    description: offer.description,
    price: offer.price,
    deliveryIds: offer.newDeliveryTypes,
  }, config);
};

const NewOfferSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [newOffer, setNewOffer] = useState<ExtendOffer>({
    id: -1,
    name: "",
    price: 10,
    displayAmount: 1,
    deliveryTypes: [],
    newDeliveryTypes: [],
    description: "",
    mainImage: "",
    photos: [],
  });

  return (
    <Grid container spacing={2} sx={{ width: "100%", p: 7 }}>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "left" }}>
        <OfferGalleryEdit
          offer={newOffer}
          onChange={(updatedOffer: ExtendOffer) => setNewOffer(updatedOffer)}
        />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>
        <OfferMainDetailsEdit
          offer={newOffer}
          onChange={(updatedOffer: ExtendOffer) => setNewOffer(updatedOffer)}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <OfferDescriptionEdit
          offer={newOffer}
          onChange={(updatedOffer: ExtendOffer) => setNewOffer(updatedOffer)}
        />
      </Grid> 
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {OnSaveOffer(newOffer); navigate("/myoffers")}}
        >
          {t("add")}
        </Button>
        <Button
          variant="outlined"
          sx={{ m: 2 }}
          onClick={() => navigate("/myoffers")}
        >
          {t("back")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewOfferSection;
