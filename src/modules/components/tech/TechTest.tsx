import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography';

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



function TechTest() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
                <Grid sx={{ pb: 4 }} xs={12}>
                    <Typography variant='subtitle1' sx={box}>Test</Typography>
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
      img: 'https://images.cgames.de/images/gamestar/256/thinkbook-plus-3-test-teaser_6199700.jpg',
      title: 'Lenovo ThinkBook Plus Gen 3 im Test: Luxus dank mehr Bildfläche',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/secret-lab-titan-evo-2022-test-teaserbild_6199329.jpg',
      title: 'Selten saß ich so gut, aber das hat seinen Preis: Secret Lab Titan Evo 2022 im Test',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/rtx-4090-gigabyte-gaming-oc-teaser_6199443.jpg',
      title: 'RTX 4090 Gaming OC im Test: Die schnellste Grafikkarte, die GameStar je getestet hat',
    }
  ];

  

export default TechTest;
