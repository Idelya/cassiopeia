import { Grid, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import React, { useState } from "react";
import { ExtendOffer } from "../../types/types";
import OfferDescriptionEdit from "./OfferDescriptionEdit";
import OfferGalleryEdit from "./OfferGalleryEdit";
import OfferMainDetailsEdit from "./OfferMainDetailsEdit";
import DeleteOfferModal from "./DeleteOfferModal";
import { useTranslation } from "react-i18next";

const OfferSectionEdit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  let { offerId } = useParams();

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<ExtendOffer>({
    id: -1,
    name: "",
    price: 10,
    displaysAmount: 1,
    deliveryTypes: [],
    description: "",
    mainImage: "",
    photos: [],
  });

  return  <><Grid container spacing={2} sx={{ width: "100%", p: 7 }}>
    <Grid item xs={6} sx={{ display: "flex", justifyContent: "left" }}>
      <OfferGalleryEdit
        offer={offer}
        onChange={(updatedOffer: ExtendOffer) => setOffer(updatedOffer)}
      />
    </Grid>
    <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>
      <OfferMainDetailsEdit
        offer={offer}
        onChange={(updatedOffer: ExtendOffer) => setOffer(updatedOffer)}
      />
    </Grid>
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <OfferDescriptionEdit
        offer={offer}
        onChange={(updatedOffer: ExtendOffer) => setOffer(updatedOffer)}
      />
    </Grid>
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant="contained" sx={{ m: 2 }}>
        { t("offer.saveChanges") }
      </Button>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() => navigate("/myoffers")}
      >
        { t("back") }
      </Button>
      <Button variant="contained" sx={{ m: 2 } } onClick={() => setDeleteModal(true)} color="error">
      { t("offer.deleteOffer") }
      </Button>
    </Grid>
  </Grid>
  <DeleteOfferModal open={deleteModal} onClose={() => setDeleteModal(false)} offerId={offerId || ""}/></>;
};

export default OfferSectionEdit;
