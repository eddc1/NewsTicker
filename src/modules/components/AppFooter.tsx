import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

import { Link } from 'react-router-dom';


function Copyright() {
  return (
    <React.Fragment>
      <Typography color="white" href="https://mui.com/">
        {'© '} GameEye {new Date().getFullYear()}
      </Typography>{' '}
    </React.Fragment>
  );
}

function Important() {
  return (
    // display: inline-flex sorgt für den Zeilenbruch bei sx und sm automatisch.
    // flexWrap: wrap sorgt dafür dass die Grid Items nicht über dem Bildschierm überragen.
    <React.Fragment>
        <Box sx={{ flex: 1, display: { xs: 'row', md: 'flex' }, whiteSpace: 'pre-wrap', flexWrap: 'wrap'  }}>
          {importantList.map((page) => (
            <Grid item xs="auto" sx={{ display: 'inline-flex', }}>
              <Link style={{ textDecoration: "none", color: "white", paddingRight: 15 }} to={`/${page}`}>
                {page}
              </Link>
            </Grid>
          ))}
        </Box>
    </React.Fragment>
  );
}

const importantList = ["Impressum", "GameEye", "Newsletter", "Kontakt", "Nutzungsbestimmungen", "Mediadaten", "Datenschutzerklärung", "Cookies & Tracking"];

function Social() {
  return (
    // display: inline-flex sorgt für den Zeilenbruch bei sx und sm automatisch.
    // flexWrap: wrap sorgt dafür dass die Grid Items nicht über dem Bildschierm überragen.
    <React.Fragment>
        <Box sx={{ flex: 1, display: { xs: 'row', md: 'flex' }, whiteSpace: 'pre-wrap', flexWrap: 'wrap'  }}>
          {socialList.map((page) => (
            <Grid item sx={{ display: 'inline-flex' }}>
              <Link style={{ textDecoration: "none", color: "white", paddingRight: 15 }} to={`/${page}`}>
                {page}
              </Link>
            </Grid>
          ))}
        </Box>
    </React.Fragment>
  );
}

const socialList = ["Meta", "Instagram", "Twitter", "TikTok"];


export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.dark', color: 'white' }}
    >
      <Container sx={{ my: 5, display: 'flex' }}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <Important/>
          </Grid>
          <Grid item>
            <Social/>
          </Grid>
          <Grid item>
            <Copyright/>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
