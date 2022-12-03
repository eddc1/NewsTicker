import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../../components/Typography';
import DayNewsList from './DayNewsList';
import AdNewsTicker from '../AdNewsList/AdNewsTicker';

const box = {
    flexGrow: 1,
    width: '100%',
    overflow: 'hidden',
    p: 2,
    margin: 'auto',
    maxWidth: '100%',
    justifyContent: 'center',
    justifyItem: 'center',
        button: {
        width: 'auto',
        height: 'auto',
        objectFit: 'cover',
        },
}


const container = {
    margin: 0,
    display: 'flex',
    position: 'relative',
    paddingBottom: 4,
}

const grid = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    direction: 'row',
        box: {
        display: 'block'
        }
}

const header = {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    fontWeight: 600,
    fontSize: '.9rem',
    lineHeight: 1.375,
    order: 2,
}

const release = {
    paddingTop: 2,
    flex: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 0,
    marginBoottom: 0,
}

const gridimg = {
    backgroundColor: 'rgba(white)', // farbe = 0,0,0,.1
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
    position: 'absolute',
    zIndex: 'tooltip',
    left: '66%',
}

const daynewslist = {
    backgroundColor: 'rgba(white)',
}



function NewsTicker() {
  return (
    <Box
      component="section"
      sx={box}>
        <Container sx={container}>
          <Grid container>
            <Grid item sx={{ mb: 2 }} xs={12}>
                <Typography variant='subtitle1'>Aktuelle Videos</Typography>
            </Grid>
            {itemData.map((item) => (
                <Grid sx={grid} sm={12} md={3} spacing={5}>
                        <Grid item xs={12}>
                            <Box
                            component="img"
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            sx={box.button}
                            /> {/* width=446px und height=251px */}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={header} variant="body1" pt={2}>
                            {`${item.title}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={release}>                
                            {`${item.date}`}
                            </Typography>
                        </Grid>
                </Grid>
            ))}
          </Grid>
        </Container>
        <Grid item xs={12} container>
            <Grid item container direction="row" spacing={0}>
                {/* Damit DayNewsList auf komplette app angezeigt wird im SM Modus wird bei der Grid sm={12} gesetzt
                    und AdNewsTicker wird auf display xs: none verschwinden um platz zu schaffen.
                */}
                <Grid item sx={daynewslist} sm={12} md={8}>
                    <DayNewsList/>
                </Grid>
                <Grid item sx={gridimg} xs={4}>
                    <Box sx={{flex: 1, display: { xs: 'none', md: 'flex' }}}>
                      <AdNewsTicker/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}


const itemData = [
    /*!-- 
      img: 'https://images.cgames.de/images/gamestar/210/gs-steam-most-wanted_6146235.jpg',
      title: 'Steam Wunschliste: Die aktuell meistgewünschten PC-Spiele',
      text: 'Steam Most Wanted: Welche kommenden PC-Spiele werden am heißesten erwartet? Wir haben für euch die Top 15 der am meisten gewünschten Steam-Spiele zusammengefasst.',
    }, 
    --!*/
    {
      img: 'https://images.cgames.de/images/gamestar/256/vali-…en-erkunden-unsere-relax-games-teil-3_6196967.jpg',
      title: 'Endlich kann Vali den Wilden Westen ohne Zeitdruck erkunden - Unsere Relax Games Teil 3',
      date: '27.09.2022'
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/koste…-vier-weitere-spiele-neu-gratis-games_6197025.jpg',
      title: 'Kostenlos Dragon Ball & vier weitere Spiele - Neu & Gratis-Games',
      date: '27.09.2022'
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/logit…ce-now-und-co-unterwegs-genie%C3%9Fen_6196962.jpg',
      title: 'Logitech G Cloud: Handheld lässt euch Game Pass, Geforce Now und Co. unterwegs genießen',
      date: '27.09.2022'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/cod-m…en-invasion-modus-f%C3%BCr-40-spieler_6196935.jpg',
        title: 'CoD MW2 Beta-Gameplay: GameEye im neuen Invasion-Modus für 40 Spieler',
        date: '27.09.2022'
      },
  ];

  

export default NewsTicker;
