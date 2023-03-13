import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../theme/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import Link from 'next/link';

const box = {
  flexGrow: 1,
  width: '100%',
  overflow: 'hidden',
  margin: 'auto',
  maxWidth: '100%',
  justifyContent: 'center',
  justifyItem: 'center',
    button: {
      width: '100%',
      height: 'auto'
    }
}

const btn = {
  backgroundColor: 'primary.dark',
  fontSize: 20,
  marginTop: 3,
  flexGrow: 1,
  '&:hover': {
    backgroundColor: 'blue'
  }
}

const container = {
  margin: 2,
  display: 'flex',
  position: 'relative'
}

const grid = {
  paddingBottom: 2,
  alignItems: 'center',
  justifyContent: 'center',
  direction: 'row',
    box: {
      display: 'block'
    }
}

const typography = {
  display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  color: 'rgba(33,33,33,.75)'
}

const btnbase = {
  width: 'auto',
  height: 'auto'
}


function Gridhead() {
  return (
    <Box
      component="section"
      sx={box}>
          <Container sx={container}>
            {topHeaderData.map((item) => (
              <Grid
                sx={grid}
                container
                spacing={6}>
                <Grid item sm={12} md={8}>
                  <ButtonBase sx={btnbase}>
                  <Box 
                    component="img"
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt="suitcase"
                    sx={box.button}
                  />
                  </ButtonBase>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Box sx={grid.box}>
                    <Typography variant="subtitle1">
                      {`${item.title}`}
                    </Typography>
                    <Typography sx={typography}>
                      {`${item.text}`}
                    </Typography>
                    <Button 
                      component={Link} href="/News"
                      sx={btn}
                      onClick={() => console.log('Go to News')}
                      type="submit"
                      color="secondary"
                      variant="contained"
                      title="Mehr"
                      >MEHR
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ))}
        </Container>
        <Container sx={container}>
          <Grid 
                container
                direction="row"
                justifyContent="center"
                pb={6}
                spacing={3}>
            {itemData.map((item) => (
            <Grid item sx={grid} sm={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  sx={box.button}
                /> {/* width=446px und height=251px */}
                <Typography variant="subtitle2" pt={2}>
                  {`${item.title}`}
                </Typography>
                <Typography sx={typography}>                
                  {`${item.text}`}
                </Typography>
              </Box>
            </Grid>
            ))}
          </Grid>
        </Container>
    </Box>
  );
}

const topHeaderData = [
  {
    img: 'https://images.cgames.de/images/gamestar/210/gs-steam-most-wanted_6146235.jpg',
    title: 'Steam Wunschliste: Die aktuell meistgewünschten PC-Spiele',
    text: 'Steam Most Wanted: Welche kommenden PC-Spiele werden am heißesten erwartet? Wir haben für euch die Top 15 der am meisten gewünschten Steam-Spiele zusammengefasst.',
  },
];


const itemData = [
    /*!-- 
      img: 'https://images.cgames.de/images/gamestar/210/gs-steam-most-wanted_6146235.jpg',
      title: 'Steam Wunschliste: Die aktuell meistgewünschten PC-Spiele',
      text: 'Steam Most Wanted: Welche kommenden PC-Spiele werden am heißesten erwartet? Wir haben für euch die Top 15 der am meisten gewünschten Steam-Spiele zusammengefasst.',
    }, 
    --!*/
    {
      img: 'https://images.cgames.de/images/gamestar/256/desktopia-_6190825.jpg',
      title: 'Desktopia: Dieses Mittelalter-Aufbauspiel ergibt keinen Sinn',
      text: 'Ein Mittelalterdorf am Bildschirmrand hochziehen, während wir Filme schauen oder im Netz surfen? Klingt spaßig, hat aber ein riesiges Problem.',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/raft_6188337.jpg',
      title: 'Ein neues Herr-der-Ringe-Spiel kommt von einem spannenden Studio',
      text: 'Der Publisher Private Division kündigt an, dass ein Spiel in Tolkiens Welt geplant ist. Und das könnte sogar schon nächstes Jahr erscheinen.',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/two-point-campus-anzeige-titel01_6187955.jpg',
      title: 'Die besten Mittelalter-Spiele: 22 historische Meilensteine',
      text: 'Von Aufbauspielen über Echtzeitstrategie bis hin zu Multiplayer-Action: Das Mittelalter hat einige unserer liebsten Spiele hervorgebracht.',
    },
  ];
  

export default Gridhead;
