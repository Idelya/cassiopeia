import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import LoginForm from "../../Login/LoginForm";
const LoginPage = () => {
  const theme = useTheme();

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
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
