import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../theme/Typography';
import { Container, ButtonBase } from '@mui/material';

function GridTechnic() {
  return (
    <Box
      component="section"
      sx={{ flexGrow: 1, overflow: 'hidden', p: 2, margin: 'auto', maxWidth: '100%' }}>
        <Typography sm={12} sx={{ textAlign: 'center', color: '#303f9f' }} variant="h5" pb={1} >Belibt bei Gameeye Tech
        </Typography>
        <Box sx={{borderBottom: '1px solid #303f9f', marginLeft: 4.5, marginRight: 4.5}}/>
        <Grid 
              container
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
                <Box sx={{display: 'block'}}>
                  <Typography variant="subtitle1">
                    Beeindruckendes Video: Wie winzig die Erde tatsächlich ist und wie langsam sie sich im Vergleich zum Jupiter dreht
                  </Typography>
                  <br/>
                  <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                  Ein Ex-NASA-Mitarbeiter postet ein Video, das nicht nur die wahre Größe aller Planeten in unserem Sonnensystem zeigt, sondern auch, wie schnell sie rotieren. Ein beeindruckender Anblick.
                  </Typography>
                </Box>
              </Grid>
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/erde-vom-weltraum-aus-titelbild_6191578.jpg"
                sx={{  maxWidth: '100%', height: 'auto' }}
              />
              </ButtonBase>
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
              <Box sx={{display: 'block'}}>
              <Typography variant="subtitle1">
                1 Sekunde statt 9000 Jahre – Quantencomputer schlägt jeden Superrechner, aber ihr müsst noch Geduld haben
              </Typography>
              <br/>
              <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                Ein beeindruckendes Experiment verdeutlicht das Potenzial von Quantencomputern. Aber wann profitieren wir endlich von dieser neuen Technologie?
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/quantencomputer-mainstream-teaser_6191185.jpg"
                alt="suitcase"
                sx={{  maxWidth: '100%', height: 'auto' }}
              />
              </ButtonBase>
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
              <Box sx={{display: 'block'}}>
                <Typography variant="subtitle1">
                  Wenn ihr eine extrem schnelle Grafikkarte wollt, könnte sich der Kauf schon sehr bald besonders lohnen
                </Typography>
                <br/>
                <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                  Die Kosten für Grafikkarten liegen so niedrig wie seit einer gefühlten Ewigkeit nicht mehr. Glaubt man aktuellen Gerüchten, gehen die Preise aber bald noch weiter runter.
                  </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/gs-grafikkartenpreise-juli-2021_6145279.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
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
              <Box sx={{display: 'block'}}>
                <Typography variant="subtitle1">
                  Aus Frust über schlechtes Internet: Mann wird selbst zum Anbieter und macht großen Providern Konkurrenz
                </Typography>
                <br/>
                <Typography sx={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', color: 'rgba(33,33,33,.75)' }}>
                  Teurer Glasfaser-Ausbau oder weiterhin langsames Schnecken-Internet? Ein Mann in Michigan hat sich für Option C entschieden - mit großem Erfolg.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto'}}>
              <Box 
                component="img"
                src="https://images.cgames.de/images/gamestar/256/internetprovider-michigan-news-teaser_6191129.jpg"
                alt="suitcase"
                sx={{ width: '100%', height: 'auto' }}
              />
              </ButtonBase>
          </Grid>
        </Grid>
        </Container>
        </Grid>
    </Box>
  );
}

export default GridTechnic;
