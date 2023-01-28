import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { offersMockUp } from "../../static/mockUpData";


const BasketList = () => {
  const { t } = useTranslation();
  
  return (
    <List>
        {offersMockUp.map((offer, index) => <ListItem
          key={index}
          disableGutters
          sx={{border: "1px solid black", p: 3, mb:1}}
        >
          <ListItemText primary={offer.name} />
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <ListItemText primary={`${offer.price} zł`} sx={{mr: 5}} />
          <Button aria-label="comment" sx={{ml: 5}}>
              { t("delete") }
            </Button></Box>
        </ListItem>)}
    </List>
  );
};

export default BasketList;
