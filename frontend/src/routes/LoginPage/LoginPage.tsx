import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import LoginForm from "../../components/Login/LoginForm";
import i18n from "../../i18n";
const LoginPage = () => {
  const theme = useTheme();

  const lngs = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polski' }
  };
  
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ color: theme.palette.primary.contrastText, p: 5 }}
      >
        Cassiopeia
      </Typography>

      <Box sx={{ display: "inline" }}>
          {Object.keys(lngs).map((lng) => (
            <Button variant="contained" onClick={() => i18n.changeLanguage(lng)}>
              {lng === "en" ? lngs.en.nativeName : lngs.pl.nativeName}
            </Button>
          ))}
        </Box>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
