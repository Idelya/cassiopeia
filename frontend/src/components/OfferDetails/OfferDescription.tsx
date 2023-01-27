import { Box, Typography } from "@mui/material";
import React from "react";
import { ExtendOffert } from "../../types/types";

interface OfferDescriptionProps {
  offer: ExtendOffert;
}

const OfferDescription = ({
  offer
}: OfferDescriptionProps) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Opis:
      </Typography>
      <Typography>
        {offer.description}
      </Typography>
    </Box>
  );
};

export default OfferDescription;
