import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-material-ui-carousel";
import { photos } from "../../static/mockUpData";
import { ExtendOffer } from "../../types/types";


interface OfferGalleryEditProps {
  offer: ExtendOffer;
}

const StyledImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
});
const OfferGallery = ({ offer }: OfferGalleryEditProps) => {
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
    </Box>
  );
};

export default OfferGallery;

