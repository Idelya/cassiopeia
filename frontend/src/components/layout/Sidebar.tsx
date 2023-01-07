import React from "react";
import { Box, Container, Drawer, IconButton, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const theme = useTheme();

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
      </Drawer>
      <Container maxWidth="xl" sx={{ flexGrow: 1, overflowY: "auto" }}>
        {children}
      </Container>
    </Box>
  );
};

export default Sidebar;
