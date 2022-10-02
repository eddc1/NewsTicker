import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <div style={{ width: '100%' }}>
    <Box
      component="section"
      sx={{ mb: 10, overflow: 'hidden', bgcolor: 'secondary.light' }}>
      <Container sx={{ mt: 5, mb: 5, display: 'flex', position: 'relative' }}>
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
            <Grid item>
              <ButtonBase sx={{ width: 'auto', height: 'auto', pr: 8 }}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/highlightbild-neuer-fu%C3%9Fballmanager-startelf-k%C3%B6nnte-das-genre-aufmischen-wie-lange-nicht-mehr_6189497.jpg"
                alt="suitcase"
                sx={{ maxWidth: '100%', height: '350px' }}
              />
              </ButtonBase>
          </Grid>
          <Grid xs={12} md={4} sx={{ pr: '1', pl: '1' }}>
            <Typography variant="h6" sx={{ my: 4 }}>
                Neuer Fußballmanager: Startelf könnte das Genre aufmischen
            </Typography>
            <br/>
            <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }
                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 5, mb: 5, pt: 1, display: 'flex', position: 'relative', }}>
        <Grid container sx={{ pt: 5, borderTop: 1 }}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/highlightbild-neuer-fu%C3%9Fballmanager-startelf-k%C3%B6nnte-das-genre-aufmischen-wie-lange-nicht-mehr_6189497.jpg"
                alt="suitcase"
                sx={{ height: 175 }}
              />
              <Typography variant="h6" sx={{ my: 4 }}>
                Neuer Fußballmanager: Startelf könnte das Genre aufmischen
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }
                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/raft_6188337.jpg"
                alt="graph"
                sx={{ height: 175 }}
              />
              <Typography variant="h6" sx={{ my: 4 }}>
                Hier ist endlich wieder ein richtig gutes Survival-Spiel!
              </Typography>
              <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }
                {'your Sundays will not be alike.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://images.cgames.de/images/gamestar/256/two-point-campus-anzeige-titel01_6187955.jpg"
                alt="clock"
                sx={{ height: 175 }}
              />
              <Typography variant="h6" sx={{ my: 4 }}>
                So wie in Two Point Campus habt ihr das Uni-Leben nie kennengelernt
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}

export default ProductValues;
