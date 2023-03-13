import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../theme/Typography';

const mainContainer = {
    display: 'flex, block',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
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
        articles: {
          borderBottom: '1px solid #303f9f',
          paddingBottom: 1,
        }
}



const grid = {
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'row',
      box: {
        display: 'block'
      }
  }



function TechToday() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
                <Grid sx={{ pb: 4 }} xs={12}>
                    <Typography variant='subtitle1' sx={box}>Aktuell</Typography>
                </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                pb={6}>
                    <Grid 
                            sx={box.articles}
                            container
                            direction="row"
                            justifyContent="center"
                            spacing={2}>
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
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
            </Grid>
        </Box>
    </Container>
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
      img: 'https://images.cgames.de/images/gamestar/256/balkonkraftwerk-aufbau-teaser_6199976.jpg',
      title: 'Balkonkraftwerk installieren - So gehts in nur 8 Schritten',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/google-samsung-smartthings_6199905.jpg',
      title: 'Schluss mit Smarthome-Inseln: Samsung und Google arbeiten dank Matter bald zusammen',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/netflix-basisabomitwerbung-teaserbild_6199906.jpg',
      title: 'Neues Netflix-Abo: Günstigstes Bezahl-Modell bis jetzt und doch bezahlt ihr teuer',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/one-ui-5-teaser_6199900.jpg',
      title: 'Samsung One UI 5: Update kommt mit cleveren Funktionen, die ihr auch von Apple kennt',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/xbox-cloud-gaming-test-teaser_6199629.jpg',
      title: 'Xbox Cloud Gaming ausprobiert: Wie gut laufen Spiele-Hits über den Browser?',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/besten-webcams-teaser_6190711.jpg',
      title: 'Die besten Webcams für PC-Spieler und Streamer - Kaufberatung',
    },
  ];

  

export default TechToday;
