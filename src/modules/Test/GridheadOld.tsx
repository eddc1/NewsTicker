import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';

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



const btn = {
  backgroundColor: 'primary.dark',
  fontSize: 20,
  flexGrow: 1,
  '&:hover': {
    backgroundColor: 'blue'
  }
}

const contaienr = {
  margin: 2,
  display: 'flex',
  position: 'relative'
}

const grid = {
  paddingBottom: 2,
  paddingRight: 5,
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
  color: 'rgba(33,33,33,.75)',
}

const btnbase = {
  width: 'auto',
  height: 'auto'
}


const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};



function GridheadOld() {


  return (
    <Box
      component="section"
      sx={box}>
          <Container sx={contaienr}>
          <Grid
              sx={grid}
              container
              rowSpacing={4}
              columnSpacing={6}>
            <Grid item sm={12} md={8}>
              <ButtonBase sx={btnbase}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/210/gs-steam-most-wanted_6146235.jpg"
                alt="suitcase"
                sx={box.btn}
              />
              </ButtonBase>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={grid.box}>
              <Typography variant="subtitle1">
                Steam Wunschliste: Die aktuell meistgewünschten PC-Spiele
              </Typography>
              <br/>
              <Typography sx={typography}>
                Steam Most Wanted: Welche kommenden PC-Spiele werden am heißesten erwartet? Wir haben für euch die Top 15 der am meisten gewünschten Steam-Spiele zusammengefasst.
                </Typography>
                <Button 
                sx={btn}
                onClick={() => console.log('')}
                type="submit"
                color="secondary"
                variant="contained"
                title="Mehr"
                >MEHR</Button>
              </Box>
          </Grid>
        </Grid>
        </Container>
        <Grid 
              container
              rowSpacing={4}
              direction="row"
              justifyContent="center"
              pb={6}>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/desktopia-_6190825.jpg"
                sx={box.btn}
              /> {/* width=446px und height=251px */}
              <Typography variant="subtitle2" pt={2}>
                Desktopia: Dieses Mittelalter-Aufbauspiel ergibt keinen Sinn
              </Typography>
              <Typography sx={typography}>                
                Ein Mittelalterdorf am Bildschirmrand hochziehen, während wir Filme schauen oder im Netz surfen? Klingt spaßig, hat aber ein riesiges Problem.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/raft_6188337.jpg"
                alt="graph"
                sx={box.btn}
              />
              <Typography variant="subtitle2" pt={2}>
                Ein neues Herr-der-Ringe-Spiel kommt von einem spannenden Studio
              </Typography>
              <Typography sx={typography}>
                Der Publisher Private Division kündigt an, dass ein Spiel in Tolkiens Welt geplant ist. Und das könnte sogar schon nächstes Jahr erscheinen.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/two-point-campus-anzeige-titel01_6187955.jpg"
                alt="clock"
                sx={box.btn}
              />
              <Typography variant="subtitle2" pt={2}>
                Die besten Mittelalter-Spiele: 22 historische Meilensteine
              </Typography>
              <Typography sx={typography}>
                Von Aufbauspielen über Echtzeitstrategie bis hin zu Multiplayer-Action: Das Mittelalter hat einige unserer liebsten Spiele hervorgebracht.
              </Typography>
            </Box>
          </Grid>
        </Grid>
    </Box>
  );
}

export default GridheadOld;
