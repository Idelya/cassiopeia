import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { deliveryTypes } from "../../static/mockUpData";
import { ExtendOffert } from "../../types/types";

interface OfferMainDetailsProps {
  offer: ExtendOffert;
}

const OfferMainDetails = ({
  offer
}: OfferMainDetailsProps) => {
  return (
    <Box sx={{ width: "100%", flexDirection: "column", display: "flex", mt: 2 }}>
      <Typography variant="h4">{offer.name}</Typography>
        <Box
          sx={{
            width: "100%",
            mr: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">Metody Dostawy:</Typography>
          <Box >{deliveryTypes.map(({ id, name, price }) => (
              <Typography key={id}>
                {`${name} - ${price} zł`}
              </Typography>
            ))}</Box>
        </Box>
        <Typography variant="h5" sx={{width: "100%", textAlign: "right", p: 2}}>{`Cena: ${offer.price} zł`}</Typography>
          <Button 
          variant="contained"
          sx={{
            width: "100%"
          }}>Dodaj do koszyka</Button>
    </Box>
  );
};

export default OfferMainDetails;

