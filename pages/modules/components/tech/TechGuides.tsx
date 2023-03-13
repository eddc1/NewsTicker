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



function TechGuides() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
                <Grid sx={{ pb: 4 }} xs={12}>
                    <Typography variant='subtitle1' sx={box}>Guides</Typography>
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
      img: 'https://images.cgames.de/images/gamestar/256/iphone-notification-teaser_6199656.jpg',
      title: 'iOS 16 Benachrichtigungen: Was ihr am Sperrbildschirm ändern könnt - und was nicht',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/alexa-app-und-echo_6199479.jpg',
      title: 'Alexa umbenennen: So ändert ihr den Namen eures Echo-Gerätes',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/iphone-screenshot-teaser_6198930.jpg',
      title: 'Apple iOS 16: Screenshots auf dem iPhone sind nützlicher, als ihr vielleicht denkt - Hier sind fünf Tipps',
    }
  ];

  

export default TechGuides;
