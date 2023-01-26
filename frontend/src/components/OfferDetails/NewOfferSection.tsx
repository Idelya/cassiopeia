import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { DeliveryStatus, ExtendOffert } from "../../types/types";
import { useNavigate } from "react-router";
import OfferGalleryEdit from "./OfferGalleryEdit";
import OfferMainDetailsEdit from "./OfferMainDetailsEdit";
import OfferDescription from "./OfferDescription";
import OfferDescriptionEdit from "./OfferDescriptionEdit";

const offertsMockUp: ExtendOffert[] = [
  {
    name: "Nazwa Produktu",
    price: 40.38,
    status: DeliveryStatus.SEND,
    displaysAmount: 30,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    name: "Nazwa Produktu 2",
    price: 40.38,
    displaysAmount: 12,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
];
const NewOfferSection = () => {
  const navigate = useNavigate();
  const [newOffer, setNewOffer] = useState<ExtendOffert>({
    name: "",
    price: 10,
    displaysAmount: 1,
    deliveryTypes: [],
    description: "",
    mainImage: "",
    photos: [],
  });

  return (
    <Grid container spacing={2} sx={{ width: "100%", p: 3 }}>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
        <OfferGalleryEdit />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
        <OfferMainDetailsEdit
          offer={newOffer}
          onChange={(updatedOffer: ExtendOffert) => setNewOffer(updatedOffer)}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <OfferDescriptionEdit />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" sx={{ m: 2 }}>
          Dodaj
        </Button>
        <Button
          variant="outlined"
          sx={{ m: 2 }}
          onClick={() => navigate("/myofferts")}
        >
          Cofnij
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewOfferSection;
