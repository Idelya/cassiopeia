import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { photos } from "../../static/mockUpData";
import { ExtendOffert } from "../../types/types";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface OfferGalleryEditProps {
  offer: ExtendOffert;
  onChange: (offer: ExtendOffert) => void;
}

const StyledImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
});
const OfferGalleryEdit = ({ offer, onChange }: OfferGalleryEditProps) => {
  const [currentPhoto, setCurrentPhoto] = useState<undefined | number>(0);

  return (
    <Box>
      <Box sx={{ width: "600px", height: "300px" }}>
        {currentPhoto === undefined ? (
          <Typography>Brak zdjęć w galerii</Typography>
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
          label="Oznacz jako główne zdjęcie"
        />
      </Box>
    </Box>
  );
};

export default OfferGalleryEdit;
