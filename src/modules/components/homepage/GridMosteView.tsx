import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function GridMosteView() {
  return (
    <Box
      component="section"
      sx={{ flexGrow: 1, overflow: 'hidden', p: 2, margin: 'auto', maxWidth: '100%' }}>
        <Typography sx={{ textAlign: 'center', color: '#303f9f' }} variant="h5" pb={1} >Meistgeschaute Videos
        </Typography>
        <Box sx={{borderBottom: '1px solid #303f9f', marginLeft: 4.5, marginRight: 4.5}}/>
        <Grid 
              container
              rowSpacing={4}
              direction="row"
              justifyContent="center"
              pb={6}
              pt={3}>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/xiii-…esaster-remakes-zeigt-erstes-gameplay_6191188.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              /> {/* width=446px und height=251px */}
              <Typography variant="subtitle2" pt={2} pb={2}>
                XIII ist wieder da: Remake des Desaster-Remakes zeigt erstes Gameplay
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/tempest-rising_6191079.jpg"
                alt="graph"
                sx={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="subtitle2" pt={2} pb={2}>
              Tempest Rising - Vorschau-Video zur C&amp;C-Hommage mit Unreal Engine 4
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="	https://images.cgames.de/images/gamestar/256/gothic-remake-trailer_6191047.jpg"
                alt="clock"
                sx={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="subtitle2" pt={2} pb={2}>
                Gothic Remake: Trailer nimmt uns mit auf einen stimmungsvollen Ausflug in die alte Mine
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/train…BCndigt-release-f%C3%BCr-september-an_6191126.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              /> {/* width=446px und height=251px */}
              <Typography variant="subtitle2" pt={2} pb={2}>
                Train Sim World 3: Trailer zeigt Zugfahrten bei Extremwetter und kündigt den Release an
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/spiele-verschiebungen_6191187.jpg"
                alt="graph"
                sx={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="subtitle2" pt={2} pb={2}>
                Spiele-Verschiebungen - 17 Games, die jetzt erst 2023 kommen
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/15-ne…e-die-eigentlich-viel-zu-gut-aussehen_6191175.jpg"
                alt="clock"
                sx={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="subtitle2" pt={2} pb={2}>
                15 neue Spiele, die eigentlich viel zu gut aussehen!
              </Typography>
            </Box>
          </Grid>
        </Grid>
    </Box>
  );
}

export default GridMosteView;
