import React from "react";
import { Box, Button, Container, Drawer, IconButton, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import i18n from "../../i18n";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const theme = useTheme();

  const lngs = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polski' }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          minWidth: "80px",
          flexShrink: 0,
          display: "flex",
          backgroundColor: "primary",
          "& .MuiDrawer-paper": {
            minWidth: "80px",
            backgroundColor: theme.palette.primary.main,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <IconButton
          sx={{ m: "32px auto", color: "primary.contrastText" }}
          size="large"
        >
          <StarIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {Object.keys(lngs).map((lng) => (
            <Button variant="contained" onClick={() => i18n.changeLanguage(lng)}>
              {lng === "en" ? lngs.en.nativeName : lngs.pl.nativeName}
            </Button>
          ))}
        </Box>
      </Drawer>
      
      <Container maxWidth="xl" sx={{ flexGrow: 1, overflowY: "auto" }}>
        {children}
      </Container>
    </Box>
  );
};

export default Sidebar;
