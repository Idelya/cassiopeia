import React from "react";
import { Typography } from "@mui/material";

const PageTitle = (props: any) => {
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
