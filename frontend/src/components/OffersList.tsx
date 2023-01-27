import { Grid } from "@mui/material";
import React from "react";

interface OffersListProps {
  children: React.ReactNode[];
}
const OffersList = ({ children }: OffersListProps) => {
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

export default OffersList;
