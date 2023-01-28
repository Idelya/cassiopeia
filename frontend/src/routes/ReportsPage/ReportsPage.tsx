import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import PageTitle from "../../components/shared/PageTitle";
import ReportItem from "../../components/Reports/ReportItem";
import { ReportDefinition } from "../../types/types";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
const ReportsPage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const reportsDefinitions: ReportDefinition[] = [
    {
      id: 1, name: t("reports.reportTitle1"), 
      description: t("reports.reportDesc1")
    },
    {
      id: 1, name: t("reports.reportTitle2"), 
      description: t("reports.reportDesc2")
    }
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        m: 3
      }}
    >
      <Sidebar>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, maxWidth: 250, m: 2 }}>
          <PageTitle titleText={t("reports.title")} />
          <Button variant="contained" onClick={() => navigate("/myoffers")}>{t("back")}</Button>
        </Box>

        
        {reportsDefinitions.map((reportDefinition) => (
            <ReportItem reportDefinition={reportDefinition} />
          ))}
      </Sidebar>
    </Box>
  );
};

export default ReportsPage;
