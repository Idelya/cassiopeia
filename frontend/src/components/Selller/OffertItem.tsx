import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { ExtendOffert } from "../../types/types";
//@ts-expect-error
import Placeholder from "../../images/placeholder.png";

interface OffertItemProps {
  offert: ExtendOffert;
}
const OffertItem = ({ offert }: OffertItemProps) => {
  const theme = useTheme();

  return (
    <Card sx={{ height: 250, width: 600, display: "flex", p: 1 }}>
      <CardMedia
        sx={{ height: "100%", minWidth: 250 }}
        image={Placeholder}
        title="no image"
      />
      <CardContent>
        <Typography variant="h5">{offert.name}</Typography>
        <Divider />
        <Box sx={{ p: 1, pl: 0, pr: 0 }}>
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
            {offert.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.grey[700] }}>
            Wyświetlono: {offert.displaysAmount}
          </Typography>
          <Typography variant="h5">{offert.price} zł</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OffertItem;
