import * as React from 'react';
import { Card, CardContent,  CardMedia, Typography, CardActionArea } from '@mui/material';

export default function Header() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}