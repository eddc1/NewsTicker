import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../Typography';
import { Container, ButtonBase } from '@mui/material';


function GridBestGamingDeals() {
  return (
    <Box
      component="section"
      sx={{ flexGrow: 1, overflow: 'hidden', p: 2, margin: 'auto', maxWidth: '100%' }}>
        <Typography sx={{ textAlign: 'center', color: '#303f9f' }} variant="h5" pb={1} >Die besten Gaming deals
        </Typography>
        <Box sx={{borderBottom: '1px solid #303f9f', marginLeft: 4.5, marginRight: 4.5}}/>
        <Grid 
              container
              rowSpacing={4}
              direction="row"
              justifyContent="center"
              pb={6}
              pt={6}>
          <Container sx={{ m: 2, display: 'flex', position: 'relative' }}>
          <Grid
              container
              rowSpacing={4}
              columnSpacing={6}
              direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/samsung-qn90b-neo-qled-tv-mm-deal-gro%C3%9F_6191569.jpg"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                Gratis Galaxy A53 dazu: Samsung Neo QLED-TV mit HDMI 2.1 im Angebot
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Ihr braucht einen neuen Fernseher und ein neues Handy? MediaMarkt hat gleich beides in einem Angebot für euch – schlagt bei dieser Samsung Aktion zu!
                </Typography>
              </Box>
          </Grid>
        </Grid>
        </Container>
        </Grid>
        <Grid 
              container
              rowSpacing={4}
              direction="row"
              justifyContent="center"
              pb={6}>
          <Container sx={{ m: 2, display: 'flex', position: 'relative' }}>
          <Grid
              container
              rowSpacing={4}
              columnSpacing={6}
              direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/teaser-razer-headset-deal_6191538.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                MediaMarkt Gaming Wochen: Mit diesem Headset von Razer spürt ihr die Immersion
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Neue Games lassen auf sich warten: Die beste Zeit also Altes neu zu erleben mit dem Gaming Headset Razer Kraken V3 HyperSense, welches um 32% reduziert ist.
                </Typography>
              </Box>
          </Grid>
        </Grid>
        </Container>
        </Grid>
        <Grid 
              container
              rowSpacing={4}
              direction="row"
              justifyContent="center"
              pb={6}>
          <Container sx={{ m: 2, display: 'flex', position: 'relative' }}>
          <Grid
              container
              rowSpacing={4}
              columnSpacing={6}
              direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/lg-oled55cs9la-mm-deal-gro%C3%9F_6191564.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                Tempest Rising: Eigentlich müsste dieses RTS »Command & Conquer Remake« heißen
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Schnäppchenjäger, aufgepasst! Im Rahmen einer Aktion bei MediaMarkt bekommt ihr lauter Produkte zu günstigen Preisen – darunter einen LG OLED-TV mit 55 Zoll.
                </Typography>
              </Box>
          </Grid>
        </Grid>
        </Container>
        </Grid>
        <Grid 
              container
              rowSpacing={4}
              direction="row"
              justifyContent="center"
              pb={6}>
          <Container sx={{ m: 2, display: 'flex', position: 'relative' }}>
          <Grid
              container
              rowSpacing={4}
              columnSpacing={6}
              direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/msi-optix-mag342cqr-otto-deal_6191439.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                So seht ihr mehr von euren Spielen: 34 Zoll MSI Curved Gaming-Monitor im Top-Deal
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                UWQHD-Gaming ist angesagt! Steigt jetzt darauf um und holt euch einen starken MSI Gaming-Monitor zu einem noch stärkeren Preis – nur für kurze Zeit bei Otto.
                </Typography>
              </Box>
          </Grid>
        </Grid>
        </Container>
        </Grid>
    </Box>
  );
}

export default GridBestGamingDeals;
