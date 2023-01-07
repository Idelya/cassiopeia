import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import LoginForm from "../../components/Login/LoginForm";
import Sidebar from "../../components/layout/Sidebar";
import PageTitle from "../../components/shared/PageTitle";
const ReportsPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "primary.main",
      }}
    >
      <Sidebar>
      </Sidebar>
      <PageTitle titleText={"Reports"} />
    </Box>
  );
};

export default ReportsPage;
