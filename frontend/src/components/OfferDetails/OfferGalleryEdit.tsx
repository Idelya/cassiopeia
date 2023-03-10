import { styled } from '@mui/system';
import { Box, Checkbox, FormControlLabel, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { photos } from "../../static/mockUpData";
import { ExtendOffer } from "../../types/types";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTranslation } from 'react-i18next';

interface OfferGalleryEditProps {
  offer: ExtendOffer;
  onChange: (offer: ExtendOffer) => void;
}

const StyledImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
});
const OfferGalleryEdit = ({ offer, onChange }: OfferGalleryEditProps) => {
  const { t } = useTranslation();
  const [currentPhoto, setCurrentPhoto] = useState<undefined | number>(0);

  return (
    <Box>
      <Box sx={{ width: "600px", height: "300px" }}>
        {currentPhoto === undefined ? (
          <Typography>{ t("offer.missingPictures") }</Typography>
        ) : (
          <Carousel
            autoPlay={false}
            animation="slide"
            navButtonsAlwaysVisible={true}
            indicators={false}
            next={(next) => setCurrentPhoto(next)}
            prev={(prev) => setCurrentPhoto(prev)}
          >
            {photos?.map(
              (
                { src } //change to offer.photo
              ) => (
                <Box sx={{ width: "600px", height: "300px" }}>
                  <StyledImg src={src} />
                </Box>
              )
            )}
          </Carousel>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton color="primary" aria-label="delete image" size="large">
            <DeleteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add image" size="large">
            <AddCircleIcon />
          </IconButton>
        </Box>
        <FormControlLabel
          control={<Checkbox />}
          label={t("offer.setAsMainPicture")}
        />
      </Box>
    </Box>
  );
};

export default OfferGalleryEdit;
