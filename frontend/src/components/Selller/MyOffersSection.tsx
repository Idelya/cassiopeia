import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import OffersList from "../OffersList";
import { DeliveryStatus, ExtendOffer } from "../../types/types";
import { useNavigate } from "react-router";
import OfferItem from "./OfferItem";
import { useTranslation } from "react-i18next";
import axios from "axios";

const MyOffersSection = () => {
  const { t } = useTranslation();
  const [seeOnlyActual, setSeeOnlyActual] = useState(false);
  const navigate = useNavigate();

  const [offers, setOffers] = useState<ExtendOffer[]>([]);
  useEffect(() => {
  axios.get("http://localhost:5084/api/offer/user/"+sessionStorage.getItem("userId"), { headers: { userToken: sessionStorage.getItem("token")} })
        .then((response) => setOffers(response.data)) }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", m: 1, mb: 4 }}
      >
        <Typography variant="h3" component="h1" sx={{ color: "primary" }}>
          { t("seller.myoffers") }
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Button variant="contained" onClick={() => navigate("/newoffer")}>
            { t("seller.addOffer") }
          </Button>
          <Button
            variant="outlined"
            sx={{ maxWidth: 200 }}
            onClick={() => navigate("/reports")}
          >
            { t("seller.seeReports") }
          </Button>
        </Box>
        <FormControlLabel
          sx={{
            maxWidth: 180,
            "& .MuiTypography-body1": {
              fontFamily: "Book Antiqua, Arial",
            },
          }}
          label={ t("seller.onlyActualOffers") }
          control={
            <Checkbox
              checked={seeOnlyActual}
              onChange={() => setSeeOnlyActual(!seeOnlyActual)}
            />
          }
        />
        <Autocomplete
          freeSolo
          id="search-offer"
          options={[]}
          sx={{
            minWidth: 240,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={ t("search") + "..." }
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Box>
      <OffersList>
        {offers.map((offer) => (
          <OfferItem offer={offer} />
        ))}
      </OffersList>
    </Box>
  );
};

export default MyOffersSection;
