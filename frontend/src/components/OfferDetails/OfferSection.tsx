import { Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ExtendOffert } from "../../types/types";
import OfferDescription from "./OfferDescription";
import OfferGallery from "./OfferGallery";
import OfferMainDetails from "./OfferMainDetails";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const OfferSection = () => {

  const navigate = useNavigate();
  let { offerId } = useParams();

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<ExtendOffert>({
    id: -1,
    name: "Nazwa produktu",
    price: 10,
    displaysAmount: 1,
    deliveryTypes: [],
    description: "",
    mainImage: "",
    photos: [],
  });

  return  <Grid container spacing={2} sx={{ width: "100%", p: 7 }}>
  <Grid item xs={12} sx={{ display: "flex", justifyContent: "right" }}>
    <Button variant="contained" sx={{mr: 3}} onClick={() => navigate("/offerts")}>Wróć do wyszukiwarki</Button>
    <Button startIcon={<ShoppingBasketIcon/>} variant="outlined">Koszyk</Button>
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
