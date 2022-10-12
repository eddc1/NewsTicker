import { Box, ButtonBase, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import VideosToday from '../components/Videos/VideosToday';
import VideosHead from '../components/Videos/VideosHead';
import AdVideosToday from '../components/Videos/AdVideosToday';

const mainContainer = {
    display: 'flex, block',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: '4rem',
    fontFamily: 'Arial',
    maxWidth: '105ch',
    position: 'relative' 
}

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
        height: 'auto',
        objectFit: 'cover',
        },
}


const gridimg = {
    backgroundColor: 'rgba(white)', // farbe = 0,0,0,.1
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
}

const daynewslist = {
    backgroundColor: 'rgba(white)',
}


function Videos() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
            <Box>
                <VideosHead/>
            </Box>
                <Grid item xs={12} container>
                    <Grid item container direction="row" spacing={0}>
                        <Grid item sx={daynewslist} xs={8}>
                            <VideosToday/>
                        </Grid>
                        <Grid item sx={gridimg} xs={4}>
                            <AdVideosToday/>
                        </Grid>
                    </Grid>
                </Grid>
        </Box>
    </Container>
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

  

export default Videos;
