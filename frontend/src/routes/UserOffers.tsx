import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
const LoginPage = () => {
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        maring: "auto",
      }}
    >
      {t("offer.myoffers")}
    </Box>
  );
};

export default LoginPage;
