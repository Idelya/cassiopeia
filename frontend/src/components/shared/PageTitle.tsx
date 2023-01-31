import React from "react";
import { Typography } from "@mui/material";

const PageTitle = (props: any) => {
  return (
    <Typography
        variant="h4"
        component="h2"
      >
        {props.titleText}
      </Typography>
  );
};

export default PageTitle;
