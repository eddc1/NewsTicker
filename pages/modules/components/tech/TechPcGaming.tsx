import { Box, ButtonBase, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../theme/Typography';
import Link from 'next/link';

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

const btn = {
    backgroundColor: 'primary.dark',
    fontSize: 20,
    flexGrow: 1,
    '&:hover': {
      backgroundColor: 'blue'
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
  



function TechPcGaming() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
            <Grid sx={{ pb: 4 }} xs={12}>
              <Typography variant='subtitle1' sx={box}>Pc Gaming</Typography>
            </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                pb={6}>
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



const topHeaderData = [
    {
      img: 'https://images.cgames.de/images/gamestar/210/xbox-cloud-gaming-test-teaser_6199629.jpg',
      title: 'Xbox Cloud Gaming ausprobiert: Wie gut laufen Spiele-Hits über den Browser?',
      text: 'Grafisch anspruchsvolle Titel im Browser zocken? Xbox Cloud Gaming verspricht flüssiges Spielevergnügen selbst auf schwächeren Systemen. Wir haben den Service für euch ausprobiert.',
    },
  ];
  

const itemData = [
    /*!-- 
     <Typography variant='subtitle1' sx={box.headline}>Freitag, 30.09.2022</Typography>
      img: 'https://images.cgames.de/images/gamestar/210/gs-steam-most-wanted_6146235.jpg',
      title: 'Steam Wunschliste: Die aktuell meistgewünschten PC-Spiele',
      text: 'Steam Most Wanted: Welche kommenden PC-Spiele werden am heißesten erwartet? Wir haben für euch die Top 15 der am meisten gewünschten Steam-Spiele zusammengefasst.',
    }, 
    --!*/
    {
      img: 'https://images.cgames.de/images/gamestar/256/asus-rog-gv301qc-k6003t-gaming-notebook_6199659.jpg',
      title: 'Selten saß ich so gut, aber das hat seinen Preis: Secret Lab Titan Evo 2022 im Test',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/amd-radeon-rx-7000-zweiter_6199682.jpg',
      title: 'Stößt AMD Nvidia dieses Jahr vom Grafikkarten-Thron? Nicht, wenn es nach diesem Leaker geht',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/asus-…f-gaming-a15-cyberport-deal-gro%C3%9F_6199591.jpg',
      title: 'Gaming Laptop mit RTX 3060, Ryzen 7 und 165 Hz zum neuen Bestpreis kaufen',
    },
  ];

  

export default TechPcGaming;
