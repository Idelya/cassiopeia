import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_PL } from "material-react-table/locales/pl";
import BlockIcon from "@mui/icons-material/Block";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";
import { User } from "../types/types";

interface OffertsListProps {
  children: React.ReactNode[];
}
const OffertsList = ({ children }: OffertsListProps) => {
  return (
    <Grid container rowSpacing={7} columnSpacing={7}>
      {children.map((child) => (
        <Grid item xs={6}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

export default OffertsList;
