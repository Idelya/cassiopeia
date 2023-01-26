import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import PageTitle from "../../components/shared/PageTitle";
import ReportItem from "../../components/Reports/ReportItem";
import { ReportDefinition } from "../../types/types";
import { useNavigate } from "react-router";
const ReportsPage = () => {
  const navigate = useNavigate();

  const reportsDefinitions: ReportDefinition[] = [
    {
      id: 1, name: "Sprzedane produkty", 
      description: "Raport listujący sprzedane produkty z podziałem na miasta z danego okresu czasu. Można z niego odczytać nazwę produktu, miasto adresu wysyłki, metodę dostawy, cene produktu i koszt dostawy."
    },
    {
      id: 1, name: "Najpopularniejsze metody dostawy", 
      description: "Raport najchętniej wybieranych metod dostawy wraz zagregowanymi wartościami sprzedanych produktów w każdym mieście. Można z niego odczytać miasto adresu wysyłki, metodę dostawy i sumaryczną ilość i wartość produktów dla danego miasta i metody dostawy."
    }
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        m: 3
        // backgroundColor: "primary.main",
      }}
    >
      <Sidebar>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, maxWidth: 250, m: 2 }}>
          <PageTitle titleText={"Analityka"} />
          <Button variant="contained" onClick={() => navigate("/myofferts")}>Wróć</Button>
        </Box>

        
        {reportsDefinitions.map((reportDefinition) => (
            <ReportItem reportDefinition={reportDefinition} />
          ))}
      </Sidebar>
    </Box>
  );
};

export default ReportsPage;
