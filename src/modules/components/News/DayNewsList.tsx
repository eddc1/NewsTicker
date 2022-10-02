import { Box, ListItemButton, ListItemIcon, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import HardwareIcon from '@mui/icons-material/Hardware';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DiamondIcon from '@mui/icons-material/Diamond';
import ImageIcon from '@mui/icons-material/Image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
        },
        headline: {
            borderBottom: '1px solid #303f9f',
            paddingBottom: 1
        },
        iconstyle: {
            color: '#303f9f'
        }
}


function DayNewsList() {
  return (
    <Box
      component="section"
      sx={box}>
            <Grid container>
                <Grid item>
                    <Container>
                        <Grid container xs={12} sx={{ maxWidth: '100%' }}>
                            <Grid item xs={12}>
                                <Typography variant='subtitle1' sx={box.headline}>Freitag, 30.09.2022</Typography>
                            </Grid>
                            {contentListFriday.map((item) => (
                                <Grid item container direction="row" sx={{ borderBottom: '1px solid #303f9f' }}>
                                    <ListItemButton key={item.title}>
                                        <Grid item sx={{ pr: 2 }}>
                                            <Typography variant='body2'>{`${item.time}`}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <ListItemIcon sx={box.iconstyle}>{item.icon}</ListItemIcon>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body2'>{`${item.title}`}</Typography>
                                        </Grid>
                                    </ListItemButton>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container xs={12} sx={{ maxWidth: '100%', paddingTop: 4 }}>
                            <Grid item xs={12}>
                                <Typography variant='subtitle1' sx={box.headline}>Donnerstag, 29.09.2022</Typography>
                            </Grid>
                            {contentListThursday.map((item) => (
                                <Grid item container direction="row" sx={{ borderBottom: '1px solid #303f9f' }}>
                                    <ListItemButton key={item.title}>
                                        <Grid item sx={{ pr: 2 }}>
                                            <Typography  variant='body2'>{`${item.time}`}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <ListItemIcon sx={box.iconstyle}>{item.icon}</ListItemIcon>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='body2'>{`${item.title}`}</Typography>
                                        </Grid>
                                    </ListItemButton>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container direction="row" sx={{ pt: 2 }}>
                            <Button size="small">
                                <Grid item>
                                    <Typography variant='body2'>mehr anzeigen</Typography>
                                </Grid>
                                <Grid item>
                                    <ArrowDropDownIcon/>
                                </Grid>
                            </Button>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>


    </Box>
  );
}

// Tage



// Kontentliste


const contentListFriday = [
    {
        time: '20:44',
        icon: <PlayCircleIcon/>,
        title: 'Endlich kann Vali den Wilden Westen ohne Zeitdruck erkunden - Unsere Relax Games Teil 3'
    },
    {
        time: '20:43',
        icon: <CurrencyBitcoinIcon/>,
        title: 'FIFA 23 - Test: EAs letzter Teil der Reihe ist fast ein Volltreffer'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Arc A770: Trailer zeigt Raytracing und Upscaling-Technologie der Intel-Grafikkarte'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'Arc A770 - Intels Grafikkarte hat endlich einen Releasetermin'
    },
    {
        time: '20:43',
        icon: <DiamondIcon/>,
        title: 'Kostenlos bei Steam & Epic - Am langen Wochenende sind 8 Spiele gratis'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Ringe der Macht - Folge 6 schafft es zum ersten Mal, mich zu überraschen'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'iPhone 14 Pro - Das neue iPhone im Vergleich mit dem Samsung Galaxy S22 Ultra'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: ' Windows 11 - Fünf Wege, einen Screenshot zu erstellen'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Beyond Good & Evil 2 - Es bricht einen traurigen Rekord, der für die Ewigkeit zu sein schien'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'WQHD-Kraftpaket - Für nur 999€ RTX 3060-Grafik und Ryzen 5 5600X im GameStar-PC Silber Edition'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: '14 geniale und manchmal auch fiese Twists in Spielen'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Dragon Age: Dreadwolf - Bioware liefert wohl genau den Drachen, von dem ich immer geträumt habe'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Arc Alchemist - Intel sagt Nvidia und AMD mit seinen Grafikkarten-Preisen den Kampf an'
    },
    {
        time: '20:43',
        icon: <ImageIcon/>,
        title: 'One More Gate : A Wakfu Legend - Screenshots'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Total War: Warhammer 3 - Das steckt wohl hinter dem kryptischen Trailer zum neuen Modus'
    },
    {
        time: '20:43',
        icon: '',
        title: 'WoW Dragonflight - Das neue Addon hat einen Release-Termin im November'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Apple-CEO Tim Cook - Ihr werdet "euch bald fragen, wie ihr ohne Augmented Reality leben konntet"'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'Samsung QD OLED TVs - Sichert euch über 1000€ Rabatt auf PS5 Fernseher bei MediaMarkt'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Der realistische Hardcore-Shooter Road to Vostok stellt spielbare Demo vor'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Ergreifende Szenen im neuen Story-Trailer zur Mittelalter-Hoffnung A Plague Tale 2'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Google Stadia - Spieledienst wird endgültig eingestellt, alle Käufe erstattet'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'FIFA 23 - im Bundle mit Xbox Series S bei Saturn nur 259€'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Neue Spiele im Oktober - Vorschau-Video für PC und Konsolen'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'Nur noch wenige Tage bis Overwatch 2, hier seht ihr was alles im Release-Paket steckt'
    },
    
  ];

  const contentListThursday = [
    {
        time: '20:44',
        icon: '',
        title: 'Brewmaster - Simulations-Fans dürfen endlich selber Bier brauen, aber macht das Spaß?'
    },
    {
        time: '20:43',
        icon: <ImageIcon/>,
        title: 'Brewmaster: Screenshots aus der Bierbrau-Simulation'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Meinung zu Fitnesstracker - Ich habe ein Fitnessarmband ausprobiert und es hat mich fast in den Wahnsinn getrieben'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Prime Gaming - Im Oktober gibt es hochwertige Kost für Warhammer- und Mittelerde-Fans geschenk'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Wrath of the Righteous: Das Weltklasse-Rollenspiel hat ab sofort eine noch bessere Version'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Fallout - So habt ihr es noch nie gesehen: KI verleiht 25 Jahre alten Figuren neuen Glan'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: '500€ günstiger - 4K Ultrawide Monitor mit 175 Hertz, 21:9 und 38 Zoll im Hammerangebot auf Amazon'
    },
    {
        time: '20:43',
        icon: <DiamondIcon/>,
        title: 'Gratis bei Epic - Für wen lohnen sich die zwei kostenlosen Spiele?'
    },
    {
        time: '20:43',
        icon: '',
        title: 'GameEye Tech sucht - Jetzt als freier Smart Home-Autor (m/w/d) bewerben!'
    },
    {
        time: '20:43',
        icon: <DiamondIcon/>,
        title: 'Kostenlos bei GOG - Globalstrategie-Klassiker gibt es gratis - aber ihr müsst euch beeilen!'
    },
    {
        time: '20:43',
        icon: '',
        title: 'CoD Modern Warfare 2 - Alle Multiplayer-Maps im Überblick'
    },
    {
        time: '20:43',
        icon: '',
        title: 'GameEye sucht - Online Marketing Manager Affiliate (m/w/d)'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'RTX 4080 - Meinung: Wer soll diese beiden Grafikkarten überhaupt kaufen, Nvidia?'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Dead Space - Neue Screenshots zeigen mehr von der Remake-Grafikpracht'
    },

    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Upgrade auf Windows 11 - Ja oder nein? 6 Gründe dafür und dagegen'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'Black Friday - Nicht mehr lange bis zu den Sale-Highlights 202'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: '65 Zoll 4K QLED TV - von Hisense nur heute zum Bestpreis bei Saturn'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Star Wars - Wie sich Andor in Folge 4 mit The Force Unleashed verknüpft'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Overwatch 2 - Wir zeigen euch die neue Circuit Royal Map'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Megaprojekt auf See - Dieses Schiff ist so groß, dass selbst die Titanic darin vier Mal Platz fände'
    },
    {
        time: '20:43',
        icon: <HardwareIcon/>,
        title: 'Next-Gen-Gaming - Ist das der nächste Schritt? Nvidia zeigt Benchmarks in utopischer 8K-Auflösung'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'Gaming Laptop mit RTX 3060 - DLSS und 120 Hz: Lenovo IdeaPad 3 für nur 999€ im Angebot'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Amazon Astro - Der kleine Roboter soll sich nun auch um Einbrecher kümmern können'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Halo Rise - Jetzt möchte Amazon euch auch noch aus dem Schlaf wecken'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'PlayCircleIcon'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Cyberpunk 2077 - Neue Verkaufszahlen: Auf dem besten Weg, The Witcher 3 einzuholen'
    },
    
  ];



export default DayNewsList;
