import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ExtendOffer } from "../../types/types";
import BasketList from "./BasketList";
import BuyProductsModal from "./BuyProductsModal";

const BasketSection = () => {
  const [selectedProducts, setSelectedProducts] = useState<null | ExtendOffer[]>(null);

    const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1, mb: 5, mt: 3 }}>
        <Typography variant="h3" component="h1" sx={{ color: "primary" }}>
          Koszyk
        </Typography>
        <Button variant="contained" onClick={() => navigate("/offers")}>Wróć do wyszukiwarki</Button>
      </Box>
      <BasketList/>
      <Box sx={{pt: 5, pb: 5, display:"flex",justifyContent: "space-between" }}>
        <Typography variant="h4">{`Suma: ${44.32} zł`}</Typography>
        <Button color="error">Wyszyść koszyk</Button>
      </Box>
      <Button variant="contained" size="large" onClick={() => setSelectedProducts([])}>Kontynuuj</Button>
      <BuyProductsModal
        open={!!selectedProducts}
        selectedProducts={selectedProducts}
        onClose={() => setSelectedProducts(null)}
      />
    </Box>
  );
};

export default BasketSection;
