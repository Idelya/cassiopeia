import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReportDefinition } from "../../types/types";

interface ReportItemProps {
  reportDefinition: ReportDefinition;
}

const ReportItem = ({ reportDefinition } : ReportItemProps) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ height: 250, width: 1000, display: "flex", p: 1, m: 3 }}>
      <CardContent>
        <Typography variant="h5">{reportDefinition.name}</Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, m: 2 }}>
          <Typography
            variant="body2"
            sx={{
              maxHeight: 200,
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
            }}
          >
            {reportDefinition.description}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, m: 2 }}>
              <TextField
                id="date"
                label={ t("start") }
                type="date"
                defaultValue="2023-11-06"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="date"
                label={ t("end") }
                type="date"
                defaultValue="2023-11-07"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Button variant="contained">{ t("generate") }</Button>

          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReportItem;
