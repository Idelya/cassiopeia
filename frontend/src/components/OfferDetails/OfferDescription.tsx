import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ExtendOffer } from "../../types/types";

interface OfferDescriptionProps {
  offer: ExtendOffer;
}

const OfferDescription = ({
  offer
}: OfferDescriptionProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
      { t("offer.description") + ":" }
      </Typography>
      <Typography>
        {offer.description}
      </Typography>
    </Box>
  );
};

export default OfferDescription;
