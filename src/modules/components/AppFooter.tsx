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
      {'© '}
      <Typography color="white" href="https://mui.com/">
        Your Website
      </Typography>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

function Important() {
  return (
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



const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.dark', color: 'white' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography href="/premium-themes/onepirate/terms/">Terms</Typography>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography href="/premium-themes/onepirate/privacy/">Privacy</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Important/>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
