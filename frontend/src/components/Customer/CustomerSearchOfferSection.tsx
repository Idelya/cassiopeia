import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
} from "@mui/material";
import OffersList from "../OffersList";
import OfferItem from "./OfferItem";
import { DeliveryStatus, ExtendOffer } from "../../types/types";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from "react-router";

const offersMockUp: ExtendOffer[] = [
  {
    id: 1,
    name: "Nazwa Produktu",
    price: 40.38,
    status: DeliveryStatus.SEND,
    displaysAmount: 30,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 2,
    name: "Nazwa Produktu 2",
    price: 40.38,
    displaysAmount: 12,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 3,
    name: "Nazwa Produktu 3",
    price: 40.38,
    status: DeliveryStatus.SOLD,
    displaysAmount: 40,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 4,
    name: "Nazwa Produktu 4",
    price: 40.38,
    displaysAmount: 132,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 5,
    name: "Nazwa Produktu 5",
    price: 40.38,
    displaysAmount: 132,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
];
const CustomerSearchOfferSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", m: 1, mb: 4, mr: 4 }}
      >
        <Autocomplete
          freeSolo
          id="search-offer"
          options={[]}
          fullWidth
          sx={{
            minWidth: 240,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wyszukaj..."
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Button sx={{ml: 3, p: 2}} startIcon={<ShoppingBasketIcon/>} variant="outlined" onClick={() => navigate("/basket")}>Koszyk</Button>
      </Box>
      <OffersList>
        {offersMockUp.map((offer) => (
          <OfferItem offer={offer} />
        ))}
      </OffersList>
    </Box>
  );
};

export default CustomerSearchOfferSection;
