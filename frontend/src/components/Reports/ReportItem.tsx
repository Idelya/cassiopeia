import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  useTheme,
  TextField
} from "@mui/material";
import React from "react";
import { ReportDefinition } from "../../types/types";
//@ts-expect-error
import Placeholder from "../../images/placeholder.png";

interface ReportItemProps {
  reportDefinition: ReportDefinition;
}

const ReportItem = ({ reportDefinition } : ReportItemProps) => {
  const theme = useTheme();

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
                label="Początek"
                type="date"
                defaultValue="2023-11-06"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="date"
                label="Koniec"
                type="date"
                defaultValue="2023-11-07"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Button variant="contained">Generuj</Button>

          </Box>
        </Box>
        {/* <Box sx={{ p: 1, pl: 0, pr: 0 }}>
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
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default ReportItem;
