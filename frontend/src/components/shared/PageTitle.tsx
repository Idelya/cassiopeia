import React from "react";
import { Typography, useTheme } from "@mui/material";

const PageTitle = (props: any) => {
  const theme = useTheme();

  return (
    <Typography
        variant="h4"
        component="h2"
        // sx={{ color: theme.palette.primary.contrastText, p: 5 }}
      >
        {props.titleText}
      </Typography>
  );
};

export default PageTitle;
