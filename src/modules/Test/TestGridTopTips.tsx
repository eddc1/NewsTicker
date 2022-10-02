import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../components/Typography';
import { Container, ButtonBase } from '@mui/material';

const box = {
  flexGrow: 1,
  width: '100%',
  overflow: 'hidden',
  p: 2,
  margin: 'auto',
  maxWidth: '100%',
    btn: {
      width: '100%',
      height: 'auto'
    }
}

const typography = {
  textAlign: 'center',
  borderBottom: '2px solid #303f9f',
  color: '#303f9f'
}

const grid = {
  justifyContent: 'center',
  paddingBottom: 6,
  paddingTop: 6,
  rowSpacing: 4,
    contaienr: {
      margin: 2,
      display: 'flex',
      position: 'relative'
    }
}

const contaienr = {
  margin: 2,
  display: 'flex',
  position: 'relative'
}

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function GridTopTips() {
  return (
    <Box
      component="section"
      sx={box}>
        <Typography sx={typography} variant="h4" pb={1} >Top Tipps bei Gameeye
        </Typography>
        <Grid 
              sx={grid}
              container
              rowSpacing={4}
              direction="row">
          <Container sx={grid.contaienr}>
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
                src="https://images.cgames.de/images/gamestar/256/kleines-aufbauspiel_6191124.jpg"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                Ein winziges Feature hat gereicht, um mich für ein kleines Aufbauspiel komplett zu begeistern
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Meinung: Ein noch namenloses Aufbauspiel hat auf Twitter einige Wellen geschlagen und mich mit einem kleinen Feature sofort auf seine Seite gezogen.
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
                src="https://images.cgames.de/images/gamestar/256/thymesia-test_6191266.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                Thymesia im Test: Dark Souls für Menschen ohne Zeit
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Thymesia bietet vieles, was wir an Souls-Spielen lieben. Wenn es nur nicht so verdammt kurz wäre …
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
                src="https://images.cgames.de/images/gamestar/256/gs-tempest-rising-preview_6190900.jpg"
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
                Lieber gut klauen als schlecht selber machen: Dieses Echtzeit-Strategiespiel mopst unfassbar frech beim altehrwürdigen Command &amp; Conquer. Aber so gut, dass wir das Teil jetzt schon mögen.
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
                src="https://images.cgames.de/images/gamestar/256/gothic-remake_6191021.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                Gothic Remake: 4 Details im neuen Trailer, die mir als Serienfan richtig viel Hoffnung machen
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Das Gothic Remake legt endlich die Karten auf den Tisch und zeigt im Trailer, wie es wirklich aussieht. Gerade in der Detailanalyse zeigt sich: Hier wurde Gothic wirklich verstanden.
                </Typography>
              </Box>
          </Grid>
        </Grid>
        </Container>
        </Grid>
    </Box>
  );
}

export default GridTopTips;
