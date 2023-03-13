import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../components/theme/Typography';
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

function TestsecGridTopTips() {

  return (
    <Box
      component="section"
      sx={box}>
        <Typography sx={typography} variant="h4" pb={1} >Top Tipps bei Gameeye
        </Typography>
        <Grid 
              sx={grid}
              
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
              {itemData.map((item) => {
                return <Grid item sm={12} md={6}>
                  <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
                  <Box 
                    component="img"
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    sx={{ width: '100%', height: 'auto' }}
                  />
                  </ButtonBase>
                </Grid>
              })}
            {itemData.map((item) => {
              return <Grid item sm={12} md={6}>
                <Box sx={{display: 'block'}}>
                  <Typography variant="subtitle1">
                    {item.title}
                  </Typography>
                  <br/>
                  <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em',}}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            })}
        </Grid>
        </Container>
        </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.cgames.de/images/gamestar/256/kleines-aufbauspiel_6191124.jpg',
    title: 'Ein winziges Feature hat gereicht, um mich für ein kleines Aufbauspiel komplett zu begeistern',
    text: 'Meinung: Ein noch namenloses Aufbauspiel hat auf Twitter einige Wellen geschlagen und mich mit einem kleinen Feature sofort auf seine Seite gezogen.',
  },
];

export default TestsecGridTopTips;
