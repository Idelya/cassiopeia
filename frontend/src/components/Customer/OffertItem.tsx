import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";
import React from "react";
import { ExtendOffert } from "../../types/types";
//@ts-expect-error
import Placeholder from "../../images/placeholder.png";
import { useNavigate } from "react-router";

interface OffertItemProps {
  offert: ExtendOffert;
}
const OffertItem = ({ offert }: OffertItemProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: 250, width: 600, display: "flex", p: 1 }}>
      <CardActionArea onClick={() => navigate("/offer/"+offert.id)} sx={{ height: 250, width: 600, display: "flex", p: 1 }}>
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
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Button variant="contained" 
            onMouseDown={event => event.stopPropagation()}
            onClick={event => {
              event.stopPropagation();
              event.preventDefault();
            }}>Dodaj</Button>
          <Typography variant="h5">{offert.price} zł</Typography>
        </CardActions>
      </CardContent></CardActionArea>
    </Card>
  );
};

export default OffertItem;
