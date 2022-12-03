import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../theme/Typography';
import { Container, ButtonBase } from '@mui/material';

function Article() {
  return (
    <Box
      component="section"
      sx={{ flexGrow: 1, overflow: 'hidden', p: 2, margin: 'auto', maxWidth: '100%' }}>
        <Typography sx={{ textAlign: 'center', borderBottom: '2px solid #303f9f', color: '#303f9f' }} variant="h4" pb={1} >Top Tipps bei Gameeye
        </Typography>
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
    </Box>
  );
}

export default Article;
