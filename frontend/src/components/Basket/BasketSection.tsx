import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ExtendOffer } from "../../types/types";
import BasketList from "./BasketList";
import BuyProductsModal from "./BuyProductsModal";

const BasketSection = () => {
  const { t } = useTranslation();

  const [openBuyModal, setOpenBuyModal] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<ExtendOffer[]>([]);
  useEffect(() => {
    const basketAsString = localStorage.getItem("basket");
    if (!basketAsString) return;
    const items = JSON.parse(basketAsString) || [];
    setSelectedProducts(items);
  }, []);

  const onSetDeliveryType = (idOffer: number, idDelivery: number) => {
    const updateItems = selectedProducts.map((item) =>
      item.id === idOffer ? { ...item, chosenDelivery: idDelivery } : item
    );
    setSelectedProducts(updateItems);
  };
  const onDelete = (id: number) => {
    const basketAsString = localStorage.getItem("basket");
    const items = basketAsString ? JSON.parse(basketAsString) || [] : [];
    const newItemsList = items.filter((o: ExtendOffer) => o.id !== id);
    localStorage.setItem("basket", JSON.stringify(newItemsList));
    setSelectedProducts(newItemsList);
  };

  const onDeleteAll = () => {
    localStorage.setItem("basket", JSON.stringify([]));
    setSelectedProducts([]);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 1,
          mb: 5,
          mt: 3,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ color: "primary" }}>
          {t("basket.basket")}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/offers")}>
          {t("basket.backToSearch")}
        </Button>
      </Box>
      <BasketList
        offers={selectedProducts}
        onDelete={onDelete}
        onSetDeliveryType={onSetDeliveryType}
      />
      <Box
        sx={{ pt: 5, pb: 5, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h4">{`Suma: ${44.32} zł`}</Typography>
        <Button color="error" onClick={onDeleteAll}>
          {t("basket.clearBasket")}
        </Button>
      </Box>
      <Button
        variant="contained"
        size="large"
        onClick={() => setOpenBuyModal(true)}
      >
        {t("basket.continue")}
      </Button>
      <BuyProductsModal
        open={openBuyModal}
        selectedProducts={selectedProducts}
        onClose={() => setOpenBuyModal(false)}
      />
    </Box>
  );
};

export default BasketSection;
