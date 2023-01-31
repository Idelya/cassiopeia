import { Grid, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { ExtendOffer } from "../../types/types";
import OfferDescriptionEdit from "./OfferDescriptionEdit";
import OfferGalleryEdit from "./OfferGalleryEdit";
import OfferMainDetailsEdit from "./OfferMainDetailsEdit";
import DeleteOfferModal from "./DeleteOfferModal";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { photos } from "../../static/mockUpData";

const OnSaveOffer = async (offer: ExtendOffer) => {
  await axios.post("http://localhost:5084/api/offer/edit", {
    id: offer.id,
    name: offer.name,
    description: offer.description,
    price: offer.price,
    deliveryTypeIds: offer.newDeliveryTypes,
    headers: { userToken: sessionStorage.getItem("token")}
  })
}

const OfferSectionEdit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  let { offerId } = useParams();

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<ExtendOffer>({
    id: -1,
    name: "",
    price: 10,
    displayAmount: 1,
    deliveryTypes: [],
    description: "",
    photos: photos,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5084/api/offer/" + offerId)
      .then((response) => setOffer(response.data));
  }, [offerId]);

  return (
    <>
      <Grid container spacing={2} sx={{ width: "100%", p: 7 }}>
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
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => OnSaveOffer(offer)}
          >
            {t("offer.saveChanges")}
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 2 }}
            onClick={() => navigate("/myoffers")}
          >
            {t("back")}
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => setDeleteModal(true)}
            color="error"
          >
            {t("offer.deleteOffer")}
          </Button>
        </Grid>
      </Grid>
      <DeleteOfferModal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        offerId={offerId || ""}
      />
    </>
  );
};

export default OfferSectionEdit;
