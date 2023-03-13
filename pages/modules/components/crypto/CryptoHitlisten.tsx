import { Box, ButtonBase, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../theme/Typography';
import AdCryptoTest from './AdCrypto/AdCryptoTest';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        fontSize: '.875rem',
        },
}


const container = {
    margin: 0,
    display: 'flex',
    position: 'relative',
    paddingBottom: 4,
    paddingTop: 2,
}

const grid = {
    position: 'relative',
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'row',
        box: {
        display: 'block'
        }
}


const gridimg = {
    backgroundColor: 'rgba(white)', // farbe = 0,0,0,.1
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
    zIndex: 'tooltip',
    left: '66%',
}

const daynewslist = {
    backgroundColor: 'rgba(white)',
}

const btnbase = {
    width: 'auto',
    height: 'auto',
    position: 'relative',
    display: 'block',
    
}  

const imgtext = {
    width: '100%',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    height: '100%',
    fontWeight: 'inherit',
        box: {
            position: 'absolute',
            bottom: '30px',
            left: 0,
            width: '90%',
        },
        text: {
            padding: '10px 20px',
            display: 'inline-block',
            textShadow: 'none!important',
            backgroundColor: '#0055b9',
        },
        typography: {
                fontFamily: "Helvetica",
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.25,
                textTransform: 'uppercase,',
        }
}

const topnews = {
    display: 'flex',
    position: 'relative',
    marginBottom: 2,
    overflow: 'hidden',
    zoom: 1,
        grid: {
            direction: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        basebutton: {
            width: '100%',
            height: 'auto',
            backgroundColor: 'rgba(0,0,0,.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '.875rem',
        },
        box: {
            display: 'block',
        },
        header: {
            position: 'relative',
            maxHeight: '4.125em',
            paddingRight: '0.5em',
            fontFamily: "Helvetica",
            fontSize: '1.25rem',
        },
        body: {
            display: 'block',
            marginBlockStart: '0.5em',
            marginInlineStart: '0px',
            marginInlineEnd: 2,
            color: 'rgba(33,33,33,.75)',
            fontFamily: "Helvetica",
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: 1.5
        }
}

function CryptoHitlisten() {
  return (
    <Box
      component="section"
      sx={box}>
        <Grid sx={grid} xs={12} rowSpacing={1} columnSpacing={3} container>
            <Grid item container direction="row" spacing={0}>
                <Grid item sx={daynewslist} sm={12} md={8}>
                    <Container sx={container}>
                        <Grid container>
                            <Grid item sm={12} md={12}>
                                <ButtonBase sx={btnbase}>
                                <Box 
                                    component="img"
                                    src="https://images.cgames.de/images/gamestar/210/besten-headsets-teaser_6191414.jpg"
                                    alt="suitcase"
                                    sx={box.button}
                                    />
                                <Box component="span" sx={imgtext}>
                                    <Box component="span" sx={imgtext.box}>
                                        <Box sx={imgtext.text}>
                                            <Typography variant='body1' sx={imgtext.typography} color="white">Die besten Gaming-Headsets und Kopfhörer für Spieler - Kaufberatung</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Container>
                    <Grid xs={12}>
                    {itemData.map((item) => (
                        <Container sx={topnews}>
                            <Grid
                                container
                                sx={topnews.grid}
                                spacing={2}>
                                <Grid item sm={12} md={5}>
                                    <ButtonBase>
                                        <Box 
                                            component="img"
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            sx={topnews.basebutton}
                                        />
                                    </ButtonBase>
                                </Grid>
                                <Grid item sm={12} md={7}>
                                    <Box sx={topnews.box}>
                                        <Typography sx={topnews.header} variant="body1">
                                        {`${item.title}`}
                                        </Typography>
                                        <Typography sx={topnews.body}>
                                        {`${item.text}`}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={11.5} sx={{ borderBottom: '1px solid #303f9f' }}> 
                                </Grid>
                            </Grid>
                        </Container>
                        ))}
                        <Grid container xs={11.4} direction="row" sx={{ pl: 3 }}>
                            <Button size="small">
                                <Grid item>
                                    <Typography variant='body2'>mehr anzeigen</Typography>
                                </Grid>
                                <Grid item>
                                    <ArrowDropDownIcon/>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={gridimg} xs={4}>
                    <Box sx={{flex: 1, display: { xs: 'none', md: 'flex' }}}>
                        <AdCryptoTest/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}

const itemData = [
    {
        img: 'https://images.cgames.de/images/gamestar/256/gs-kostenlos-am-wochenende_6197970.jpg',
        title: 'Kostenlos bei Steam und Epic: Am langen Wochenende sind 8 Spiele gratis',
        text: 'Diese Woche gibt es besonders viele spannende Gratis-Angebote: Rennspiele, MMOs, Shooter und mehr. Wir haben die Übersicht für euch.'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/koste…-vier-weitere-spiele-neu-gratis-games_6197025.jpg',
        title: 'Disco Elysium: Sorge um Sequel, wichtige Entwickler wohl nicht mehr dabei',
        text: 'Offenbar haben sich mehrere wichtige Entwickler und das Studio ZA/UM getrennt - nicht im Guten, wie ein Gründungsmitglied behauptet. Viele Fans äußern Sorgen.'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/gs-stadia-wird-beendet_6197841.jpg',
        title: 'tadia am Ende: Googles milliardenschwerer Spieledienst wird eingestellt, alle Käufe erstattet',
        text: 'Gerade mal drei Jahre gab es Google Stadia, jetzt wurde verkündet: Der Dienst wird 2023 endgültig beendet.'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/intel-arc-a750-geldkoffer_6197862.jpg',
        title: 'Arc Alchemist: Intel sagt Nvidia und AMD mit seinen Grafikkarten-Preisen den Kampf an',
        text: 'Intels Grafikkarten erscheinen im Oktober. Und mit den jetzt veröffentlichten Preisen macht der Hersteller klar, dass man zumindest im Midrange-Segment ordentlich Staub aufwirbeln möchte.'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/beyond-good-nukem-gs_6197946.jpg',
        title: 'Beyond Good & Evil 2 bricht einen traurigen Rekord, der für die Ewigkeit zu sein schien',
        text: 'Duke Nukem Forever galt als heftigstes Beispiel für Vaporware. Jetzt bricht Beyond Good & Evil 2 den Rekord, den niemand brechen will.'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/gs-geheimtipps-september-2022_6198047.jpg',
        title: 'Steam, Epic und Co.: Die besten Geheimtipps, die ihr im September vielleicht verpasst habt',
        text: 'Wir sammeln spannende PC-Spiele des letzten Monats, die ihr auf keinen Fall übersehen solltet!'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/fallout-ki-bild-misha-vozduh_6197820.jpg',
        title: 'So habt ihr Fallout noch nie gesehen: KI verleiht 25 Jahre alten Figuren neuen Glanz',
        text: 'Stable Diffusion AI generiert aus grobpixeligen Spielfiguren hochdetaillierte Bilder, die den Wunsch nach einem Remake des Rollenspiel-Klassikers wecken.'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/gratis-bei-epic-runbow-drone-racing-league_6197781.jpg',
        title: 'Gratis bei Epic: Für wen lohnen sich die zwei kostenlosen Spiele?',
        text: 'Epic verschenkt mal wieder zwei Spiele. Mit Runbow und The Drone Racing League Simulator sind die Titel zwar diesmal etwas nischig, aber auf jeden Fall einen Blick wert!'
    },
    {
        img: 'https://images.cgames.de/images/gamestar/256/intel-arc-a750-geldkoffer_6197862.jpg',
        title: 'Arc Alchemist: Intel sagt Nvidia und AMD mit seinen Grafikkarten-Preisen den Kampf an',
        text: 'Intels Grafikkarten erscheinen im Oktober. Und mit den jetzt veröffentlichten Preisen macht der Hersteller klar, dass man zumindest im Midrange-Segment ordentlich Staub aufwirbeln möchte.'
    },
  ];

  

export default CryptoHitlisten;
