import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ExtendOffer } from "../../types/types";

interface OfferDescriptionEditProps {
  offer: ExtendOffer;
  onChange: (offer: ExtendOffer) => void;
}

const OfferDescriptionEdit = ({
  offer,
  onChange,
}: OfferDescriptionEditProps) => {
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
      <TextField
        id="description"
        multiline
        maxRows={10}
        minRows={5}
        fullWidth
        value={offer.description}
        onChange={(e) => onChange({ ...offer, description: e.target.value })}
      />
    </Box>
  );
};

export default OfferDescriptionEdit;
