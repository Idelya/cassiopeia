import { styled } from "@mui/system";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ExtendOffer } from "../../types/types";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTranslation } from "react-i18next";

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
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const onDelete = () => {
    if (!!offer.photos) {
      console.log(currentPhoto);
      const idToDelete = offer.photos[currentPhoto].id;
      console.log(idToDelete);
      const newPhotosList = offer.photos.filter(
        (elem) => elem.id !== idToDelete
      );
      onChange({ ...offer, photos: newPhotosList });
      if (currentPhoto === newPhotosList.length) {
        setCurrentPhoto(0);
      }
    }
  };

  const onAdd = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const img = e.target.files[0];

    const newPhotosList = offer.photos || [];
    newPhotosList.push({
      id: Math.floor(Math.random() * 100000),
      src: URL.createObjectURL(img),
      mainImage: false,
    });

    setCurrentPhoto(newPhotosList.length - 1);
    onChange({ ...offer, photos: newPhotosList });
  };

  const onChangeMain = (setValue: boolean) => {
    if (setValue && !!offer.photos) {
      const idToSet = offer.photos[currentPhoto].id;
      const newPhotosList = offer.photos.map((elem) =>
        elem.id === idToSet
          ? { ...elem, mainImage: true }
          : { ...elem, mainImage: false }
      );
      onChange({ ...offer, photos: newPhotosList });
    }
    if (!setValue && !!offer.photos) {
      const newPhotosList = offer.photos.map((elem) => ({
        ...elem,
        mainImage: false,
      }));
      onChange({ ...offer, photos: newPhotosList });
    }
  };

  return (
    <Box>
      <Box sx={{ width: "600px", height: "300px" }}>
        {!offer.photos?.length ? (
          <Typography>{t("offer.missingPictures")}</Typography>
        ) : (
          <Carousel
            autoPlay={false}
            animation="slide"
            navButtonsAlwaysVisible={true}
            indicators={false}
            index={currentPhoto}
            next={(next) => setCurrentPhoto(next || 0)}
            prev={(prev) => setCurrentPhoto(prev || 0)}
          >
            {offer.photos?.map(({ src }) => (
              <Box sx={{ width: "600px", height: "300px" }}>
                <StyledImg src={src} />
              </Box>
            ))}
          </Carousel>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton
            color="primary"
            aria-label="delete image"
            size="large"
            onClick={() => onDelete()}
            disabled={!offer.photos?.length}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add image"
            size="large"
            component="label"
          >
            <AddCircleIcon />
            <input
              type="file"
              accept=".jpg"
              hidden
              onChange={(e) => onAdd(e)}
            />
          </IconButton>
        </Box>
        <FormControlLabel
          disabled={!offer.photos?.length}
          control={
            <Checkbox
              checked={
                !!offer.photos &&
                !!offer.photos.length &&
                offer.photos[currentPhoto].mainImage
              }
              onChange={(e) => onChangeMain(e.target.checked)}
            />
          }
          label={t("offer.setAsMainPicture")}
        />
      </Box>
    </Box>
  );
};

export default OfferGalleryEdit;
