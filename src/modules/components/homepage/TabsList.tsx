import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '../theme/Typography';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxHeight: '100%', maxWidth: '100%', bgcolor: 'background.paper', paddingBottom: '2rem',  }}>
        <Typography
         sx={{ textAlign: 'center', color: '#303f9f' }} variant="h5" pb={1} >KOMMENDE SPIELE
        </Typography>
        <Box sx={{borderBottom: '1px solid #303f9f', marginLeft: 4.5, marginRight: 4.5}}/>
        <Tabs
            sx={{ paddingTop: 2 }}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
          {itemData.map((item) => (
          <Tab
                wrapped
                sx={{ width: 210, transformBox: "fill-box", flexDirection: "row",  }}
                 icon={ <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                /> } />
                
          ))}
        </Tabs>
    </Box>
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
      img: 'https://images.cgames.de/images/gamestar/212/15667-pc-packshot_6193448.jpg',
      title: 'LEGO Brawls',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/212/15668-pc-packshot_6193458.jpg',
      title: 'Made in Abyss: Binary Star Falling into Darkness',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/212/15636-pc-packshot_6191840.jpg',
      title: 'Train Sim World 3',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/212/14101-pc-packshot_6193478.jpg',
      title: 'Monstrum 2',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/212/15369-pc-packshot_6193483.jpg',
      title: 'Trail Out',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/212/14452-pc-packshot_6103224.jpg',
      title: 'Metal: Hellsinger',
    },
  ];
  