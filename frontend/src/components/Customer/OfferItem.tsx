import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { ExtendOffer } from "../../types/types";
//@ts-expect-error
import Placeholder from "../../images/placeholder.png";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

interface OfferItemProps {
  offer: ExtendOffer;
}
const OfferItem = ({ offer }: OfferItemProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const onAdd = () => {
    const basketAsString = localStorage.getItem("basket");
    const items = basketAsString ? JSON.parse(basketAsString) || [] : [];
    items.push({ ...offer, chosenDelivery: offer.deliveryTypes[0].id });
    localStorage.setItem("basket", JSON.stringify(items));
  };

  return (
    <Card sx={{ height: 250, width: 600, display: "flex", p: 1 }}>
      <CardActionArea
        onClick={() => navigate("/offer/" + offer.id)}
        sx={{ height: 250, width: 600, display: "flex", p: 1 }}
      >
        <CardMedia
          sx={{ height: "100%", minWidth: 250 }}
          image={Placeholder}
          title="no image"
        />
        <CardContent>
          <Typography variant="h5">{offer.name}</Typography>
          <Divider />
          <Box sx={{ p: 1, pl: 0, pr: 0 }}>
            <Typography
              variant="body2"
              sx={{
                maxHeight: 200,
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
              }}
            >
              {offer.description}
            </Typography>
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <Button
              variant="contained"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                onAdd();
              }}
            >
              {t("add")}
            </Button>
            <Typography variant="h5">{offer.price} PLN</Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OfferItem;
