import { Box, ButtonBase, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../theme/Typography';
import AdCryptoubersicht from './AdCrypto/AdCryptoubersicht';
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
            width: '275px',
            height: '154px',
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

function Cryptoubersicht() {
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
                                    src="https://helios-i.mashable.com/imagery/articles/04ldy4kWWpLv9ccOUPseqIo/hero-image.fill.size_1248x702.v1647386540.jpg"
                                    alt="suitcase"
                                    sx={box.button}
                                    />
                                <Box component="span" sx={imgtext}>
                                    <Box component="span" sx={imgtext.box}>
                                        <Box sx={imgtext.text}>
                                            <Typography variant='body1' sx={imgtext.typography} color="white">So entwickeln sich Bitcoin, Litecoin & Co am Samstagmittag am Kryptomarkt</Typography>
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
                        <AdCryptoubersicht/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}

const itemData = [
    {
        img: 'https://i.pinimg.com/736x/c8/6c/5b/c86c5bc205beb89a815a84076c023ec9.jpg',
        title: 'FTX-Insolvenz und Bitcoin-Einbruch: El Salvador droht wohl Staatsbankrott',
        text: 'El Salvadors Präsident Nayib Bukele hat den Bitcoin in dem mittelamerikanischen Staat zum gesetzlichen Zahlungsmittel gemacht. Doch das umstrittene Experiment könnte schlimme Folgen haben.'
    },
    {
        img: 'https://images.finanzen.net/mediacenter/ratgeber/artikelbilder/blockchain-investment-investieren-in-blockchain-technologie-ratgeber-tastatur-kette-blockchain-660.jpg',
        title: 'So könnte das Blockchain-Spiel Dark Forest die Gaming-Industrie revolutionieren',
        text: 'Dark Forest ist ein auf der Blockchain basierendes Echtzeit-Strategie Spiel. Das Spiel zeigt die vielfältige Nutzung der Blockchain auf. Könnte das die Zukunft des Gaming werden?'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_1716080197-scaled-e1669810599624-1536x845.jpg',
        title: 'Krypto-Investment – Jetzt oder nie?',
        text: 'Wer in den Krypto-Markt einsteigen möchte, braucht die richtige Strategie. Wir erklären, wie du sie findest und welche Möglichkeiten es gibt, 1.000, 10.000 oder 100.000 Euro zu investieren.'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/09/shutterstock_2159674393-2048x1365.webp',
        title: 'Welche Arten von Stablecoins gibt es?',
        text: 'Mittlerweile spielen Stablecoins eine zentrale Rolle beim Handel mit Kryptowährungen und erfreuen sich großer Beliebtheit. Doch nicht alle sind gleich.'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_739665235-scaled-e1669737583519-2048x1300.jpg',
        title: 'Miner kapitulieren – was bedeutet das für Bitcoin?',
        text: 'Seit Mitte November sinkt die Hashrate rapide ab. Woran liegt das und was bedeutet das für Bitcoin?'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_2131895563-2048x1365.webp',
        title: 'Ist Nexo der nächste große Crash-Kandidat?',
        text: 'Nach dem FTX-Desaster richten sich die Augen auf den größten Lending-Dienst der Kryptobranche: Nexo. Die Zahlen geben Anlass zur Sorge.'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_2086238089-2048x1365.webp',
        title: 'Aave stoppt Kreditvergabe für 17 Ethereum Token',
        text: 'Aave, der größte Lender für Ethereum, zieht Konsequenzen aus Liquiditätsengpässen. Siebzehn Token sind betroffen.'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_792061711-2-scaled-e1669388791105-2048x1362.jpg',
        title: 'Welche Industrie-Anwendungsfälle hat das Bitcoin-Lightning-Netzwerk?',
        text: 'Im vierten Teil der Bitcoin-Lightning-Artikelreihe geht es um die eigentlichen Use Cases des blitzschnellen Zahlungssystems. Welche Industrien können besonders davon profitieren?'
    },
    {
        img: 'https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_1936662070-2048x1365.webp',
        title: 'Gouverneur von Texas bekräftigt Unterstützung für Bitcoin',
        text: 'Der texanische Gouverneur erkennt das Innovationspotenzial Bitcoins an und plant, seinen Bundesstaat zum Krypto-Zentrum zu entwickeln.'
    },
  ];

  

export default Cryptoubersicht;
