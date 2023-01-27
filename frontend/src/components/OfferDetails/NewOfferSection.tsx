import React, { useState } from "react";
import {
  Button,
  Grid
} from "@mui/material";
import { ExtendOffer } from "../../types/types";
import { useNavigate } from "react-router";
import OfferGalleryEdit from "./OfferGalleryEdit";
import OfferMainDetailsEdit from "./OfferMainDetailsEdit";
import OfferDescriptionEdit from "./OfferDescriptionEdit";


const NewOfferSection = () => {
  const navigate = useNavigate();
  const [newOffer, setNewOffer] = useState<ExtendOffer>({
    id: -1,
    name: "",
    price: 10,
    displaysAmount: 1,
    deliveryTypes: [],
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
        <Button variant="contained" sx={{ m: 2 }}>
          Dodaj
        </Button>
        <Button
          variant="outlined"
          sx={{ m: 2 }}
          onClick={() => navigate("/myoffers")}
        >
          Cofnij
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewOfferSection;
