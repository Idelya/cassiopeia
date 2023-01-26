import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import OffertsList from "../OffertsList";
import OffertItem from "./OffertItem";
import { DeliveryStatus, ExtendOffert } from "../../types/types";
import { useNavigate } from "react-router";

const offertsMockUp: ExtendOffert[] = [
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
const MyOffertsSection = () => {
  const [seeOnlyActual, setSeeOnlyActual] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", m: 1, mb: 4 }}
      >
        <Typography variant="h3" component="h1" sx={{ color: "primary" }}>
          Twoje Oferty
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Button variant="contained" onClick={() => navigate("/newoffer")}>
            Dodaj ofertę
          </Button>
          <Button
            variant="outlined"
            sx={{ maxWidth: 200 }}
            onClick={() => navigate("/reports")}
          >
            Zobacz raporty sprzedaży
          </Button>
        </Box>
        <FormControlLabel
          sx={{
            maxWidth: 180,
            "& .MuiTypography-body1": {
              fontFamily: "Book Antiqua, Arial",
            },
          }}
          label="Zobacz tylko aktualne oferty"
          control={
            <Checkbox
              checked={seeOnlyActual}
              onChange={() => setSeeOnlyActual(!seeOnlyActual)}
            />
          }
        />
        <Autocomplete
          freeSolo
          id="search-offert"
          options={[]}
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
      </Box>
      <OffertsList>
        {offertsMockUp.map((offert) => (
          <OffertItem offert={offert} />
        ))}
      </OffertsList>
    </Box>
  );
};

export default MyOffertsSection;
