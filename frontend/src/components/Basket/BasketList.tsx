import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { deliveryTypes } from "../../static/mockUpData";
import { ExtendOffer } from "../../types/types";

const BasketList = ({
  offers,
  onDelete,
  onSetDeliveryType,
}: {
  offers: ExtendOffer[];
  onDelete: (id: number) => void;
  onSetDeliveryType: (idOffer: number, idDelivery: number) => void;
}) => {
  const { t } = useTranslation();

  return (
    <List>
      {offers.map((offer, index) => (
        <ListItem
          key={index}
          disableGutters
          sx={{ border: "1px solid black", p: 3, mb: 1 }}
        >
          <ListItemText primary={offer.name} />
          <ListItemText primary={`${offer.price} zł`} sx={{ mr: 5 }} />
          <Select
            sx={{ width: "200px" }}
            id="deliveryTypes"
            value={
              offer.deliveryTypes.find(
                (delivery) => offer.chosenDelivery === delivery.id
              )?.id
            }
            onChange={(e) =>
              onSetDeliveryType(offer.id, Number(e.target.value))
            }
            input={<OutlinedInput />}
          >
            {deliveryTypes.map((delivery) => (
              <MenuItem key={delivery.id} value={delivery.id}>
                {`${delivery.name} - ${delivery.price} zł`}
              </MenuItem>
            ))}
          </Select>
          <Button
            aria-label="comment"
            sx={{ ml: 5 }}
            onClick={() => onDelete(offer.id)}
          >
            {t("delete")}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BasketList;
