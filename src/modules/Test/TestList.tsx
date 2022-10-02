import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
    

  return (
    <ImageList 
        cols={6}
        gap={12}
        sx={{ width: '100%', height: 300, maxHeight: '100%', overflow: 'auto' }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
            sx={{width: 150, textAlign: 'center'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.cgames.de/images/gamestar/212/15150-pc-packshot_6187059.jpg',
    title: 'Destroy All Humans! 2 - Reprobed',
  },
  {
    img: 'https://images.cgames.de/images/gamestar/212/15347-pc-packshot_6187061.jpg',
    title: 'F1 Manager 2022',
  },
  {
    img: 'https://images.cgames.de/images/gamestar/212/15570-pc-packshot_6186133.jpg',
    title: 'Immortality',
  },
  {
    img: 'https://images.cgames.de/images/gamestar/212/15630-pc-packshot_6191280.jpg',
    title: 'ORX',
  },
  {
    img: 'https://images.cgames.de/images/gamestar/212/15631-pc-packshot_6191307.jpg',
    title: 'Call of the Wild: The Angler',
  },
  {
    img: 'https://images.cgames.de/images/gamestar/212/15590-pc-packshot_6187390.jpg',
    title: 'Scathe',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
