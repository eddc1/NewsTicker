import { Box, ButtonBase, Button, ListItemButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '../../Typography';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const box = {
    flexGrow: 1,
    width: '100%',
    overflow: 'hidden',
    margin: 'auto',
    maxWidth: '100%',
    justifyContent: 'center',
    justifyItem: 'center',
    paddingTop: 2,
        button: {
        width: '100%',
        height: 'auto',
        color: '#303f9f',
        },
        headline: {
            paddingBottom: 1
        },
}

const gridimg = {
    backgroundColor: 'rgba(0,0,0,.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
        bigad: {
            minHeight: '600px',
            alignItems: 'flex-start',
        },
        ad: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'nowrap',
            width: 'auto',
            height: 'auto'
        }
}


const Img = styled('img')({
    display: 'block',
    width: '100%',
    height: 'auto',
})

const container = {
    paddingRight: 0,
}

function AdTechList() {
  return (
    <Box
      component="section"
      sx={box}>
        <Grid container>
            <Grid item xs={11} container spacing={4}>
                <Grid item sx={container} container direction="column">
                    <Grid item sx={gridimg} xs={5}>
                        <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                            <Img alt="Wow" src="https://images.cgames.de/images/gamestar/4/wow-promo-3-klein_6197062.jpg">
                            </Img>
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: 'auto', height: 'auto', backgroundColor: "#f2f7fc", paddingRight: 2, paddingLeft: 2, paddingBottom: 2 }}>
                            <Typography variant="subtitle2" sx={{ pt: 2, pb: 2 }}>Tech-News | GameEye Tech</Typography>
                            <Typography variant="h6" sx={{ fontSize: '0.9rem' }}>Bleib auf dem neuesten Stand im Tech- &amp; Hardware-Bereich: Egal ob neue Produkte, Treiber, Technologien, Softwareupdates oder Apps.
                            </Typography>
                    </Box>
                </Grid>
                {/* <Grid item sx={container} container direction="column">
                    <Grid item sx={gridimg.bigad} xs={5}>
                        <ButtonBase sx={gridimg.ad}>
                            <Img alt="Wow" src="https://images.cgames.de/images/gamestar/4/wow-promo-3-klein_6197062.jpg">
                            </Img>
                        </ButtonBase>
                    </Grid>
                </Grid> */}
                <Grid item sx={container}  >
                    <Grid item sx={container} container direction="row">
                        <Grid item xs={6}>
                                <Typography variant='subtitle1' sx={box.headline}>Top-Artikel</Typography>
                        </Grid>
                        <Grid item xs={6}>
                                <Button sx={box.button}>alle anzeigen</Button>
                        </Grid>
                    </Grid>
                    <Grid item sx={gridimg} xs={12}>
                        <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                            <Img alt="Wow" src="https://images.cgames.de/images/gamestar/210/gs-wonders-of-the-seas_6197538.jpg">
                            </Img>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12}>
                            <Box sx={{ width: 'auto', height: 'auto',  paddingTop: 2, paddingBottom: 2 }}>
                                {contentListTopArtikel.map((item) => (
                                    <Grid item container direction="row" sx={{ }}>
                                        <ListItemButton key={item.text}>
                                            <Grid item sx={{ pr: 2 }}>
                                                <Typography sx={{ color: '#303f9f' }} variant='subtitle1'>{`${item.number}`}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='body2'>{`${item.text}`}</Typography>
                                            </Grid>
                                        </ListItemButton>
                                    </Grid>
                                ))}
                                <Button size="small">
                                    {/* Funktion die durch Klick die restlichen 5 Top Artikel anzeigen */}
                                    <Grid item>
                                        <Typography variant='body2'>mehr anzeigen</Typography>
                                    </Grid>
                                    <Grid item>
                                        <ArrowDropDownIcon/>
                                    </Grid>
                                </Button>
                            </Box>
                    </Grid>
                </Grid>
                <Grid item sx={container} container direction="column">
                    <Grid item sx={gridimg} xs={5}>
                        <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                            <Img alt="Wow" src="https://images.cgames.de/images/gamestar/4/wow-promo-3-klein_6197062.jpg">
                            </Img>
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Grid item sx={container}  >
                    <Grid item sx={container} container direction="row">
                        <Grid item xs={6}>
                                <Typography variant='subtitle1' sx={box.headline}>Top-Video</Typography>
                        </Grid>
                        <Grid item xs={6}>
                                <Button sx={box.button}>alle anzeigen</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                            <Box sx={{ width: 'auto', height: 'auto',  paddingTop: 2, paddingBottom: 2 }}>
                                {contentListTopArtikelVideo.map((item) => (
                                    <Grid item container direction="row">
                                        <ListItemButton key={item.text}>
                                            <Grid item xs={12} sx={{ pr: 2 }}>
                                                <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                                    <Img alt="Wow" src={`${item.image}`}>
                                                    </Img>
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>{`${item.text}`}</Typography>
                                            </Grid>
                                        </ListItemButton>
                                    </Grid>
                                ))}
                                <Button size="small">
                                    {/* Funktion die durch Klick die restlichen 5 Top Artikel anzeigen */}
                                    <Grid item>
                                        <Typography variant='body2'>mehr anzeigen</Typography>
                                    </Grid>
                                    <Grid item>
                                        <ArrowDropDownIcon/>
                                    </Grid>
                                </Button>
                            </Box>
                    </Grid>
                </Grid>
                <Grid item sx={container} container direction="column">
                    <Grid item sx={gridimg} xs={5}>
                        <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                            <Img alt="Wow" src="https://images.cgames.de/images/gamestar/4/wow-promo-3-klein_6197062.jpg">
                            </Img>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}


const contentListTopArtikel = [
    {
        number: '1',
        text: 'Dieses Schiff ist so groß, dass selbst die Titanic darin vier Mal Platz fände',
    },
    {
        number: '2',
        text: 'RTX 4080: Wer soll diese beiden Grafikkarten überhaupt kaufen, Nvidia?',
    },
    {
        number: '3',
        text: 'RTX 4080: Wer soll diese beiden Grafikkarten überhaupt kaufen, Nvidia?',
    },
    {
        number: '4',
        text: 'Prime Gaming verschenkt im Oktober hochwertige Kost für Warhammer- und Mittelerde-Fans',
    },
    {
        number: '5',
        text: 'So habt ihr Fallout noch nie gesehen: KI verleiht 25 Jahre alten Figuren neuen Glanz',
    },
]

const contentListTopArtikelVideo = [
    {
        image: 'https://images.cgames.de/images/gamestar/210/marku…iel-hinterfragt-seine-fahrk%C3%BCnste_6197966.jpg',
        text: 'Markus Geheimtipp-Spiel hinterfragt seine Fahrkünste',
    },
    {
        image: 'https://images.cgames.de/images/gamestar/210/koste…en-deinen-geldbeutel-neu-gratis-games_6197982.jpg',
        text: 'Kostenlose Spiele befreien deinen Geldbeutel! - Neu & Gratis-Games',
    },
    {
        image: 'https://images.cgames.de/images/gamestar/210/bekom…C3%A4mpfe-in-undecember-enth%C3%BCllt_6197969.jpg',
        text: 'Bekommt Diablo 4 schon vor Release Konkurrenz? Bosskämpfe in Undecember enthüllt',
    },
    {
        image: '	https://images.cgames.de/images/gamestar/210/was-i…assiert-krasse-twists-in-videospielen_6197852.jpg',
        text: '14 geniale und manchmal auch fiese Twists in Spielen',
    },
]

  

export default AdTechList;
