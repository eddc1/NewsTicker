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
  



function TechHead() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
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
      img: 'https://images.cgames.de/images/gamestar/210/rtx-4090-verkaufsstart-teaser_6199408.jpg',
      title: 'Geforce RTX 4090 kaufen: Die Geschichte droht, sich zu wiederholen',
      text: 'Ab heute könnt ihr Nvidias neue Geforce RTX 4090 vorbestellen und kaufen, zumindest    theoretisch. Zum Release gestaltet sich die Verfügbarkeit aber eher schwierig.',
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
      img: 'https://images.cgames.de/images/gamestar/256/secret-lab-titan-evo-2022-test-teaserbild_6199329.jpg',
      title: 'Selten saß ich so gut, aber das hat seinen Preis: Secret Lab Titan Evo 2022 im Test',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/thinkbook-plus-3-test-teaser_6199700.jpg',
      title: 'Lenovo ThinkBook Plus Gen 3 im Test: Luxus dank mehr Bildfläche',
    },
    {
      img: 'https://images.cgames.de/images/gamestar/256/roccat-advertorial-titel-02_6199842.jpg',
      title: 'Lenovo ThinkBook Plus Gen 3 im Test: Luxus dank mehr Bildfläche',
    },
  ];

  

export default TechHead;
