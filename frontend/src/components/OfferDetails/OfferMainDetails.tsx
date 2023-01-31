import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ExtendOffer } from "../../types/types";

interface OfferMainDetailsProps {
  offer: ExtendOffer;
}

const OfferMainDetails = ({ offer }: OfferMainDetailsProps) => {
  const { t } = useTranslation();

  console.log(offer);

  const onAdd = () => {
    const basketAsString = localStorage.getItem("basket");
    const items = basketAsString ? JSON.parse(basketAsString) || [] : [];
    items.push({ ...offer, chosenDelivery: offer.deliveryTypes[0].id });
    localStorage.setItem("basket", JSON.stringify(items));
  };

  return (
    <Box
      sx={{ width: "100%", flexDirection: "column", display: "flex", mt: 2 }}
    >
      <Typography variant="h4">{offer.name}</Typography>
      <Box
        sx={{
          width: "100%",
          mr: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">{t("offer.deliveryMethods")}:</Typography>
        <Box>
          {offer.deliveryTypes.map(({ id, name, price }) => (
            <Typography key={id}>{`${name} - ${price} zł`}</Typography>
          ))}
        </Box>
      </Box>
      <Typography
        variant="h5"
        sx={{ width: "100%", textAlign: "right", p: 2 }}
      >{`Cena: ${offer.price} zł`}</Typography>
      <Button
        variant="contained"
        sx={{
          width: "100%",
        }}
        onClick={() => onAdd()}
      >
        {t("offer.addToBasket")}
      </Button>
    </Box>
  );
};

export default OfferMainDetails;
