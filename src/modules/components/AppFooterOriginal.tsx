import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';
import TextField from './TextField';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';

const important = ["Impressum", "Über uns", "Über GameEye", "Karriere", "Newsletter", "Kontakt", "Nutzungsbestimmungen", "Mediadaten", "Datenschutzerklärung", "Cookies & Tracking"];

const socialMedia = ["Meta", "Instagram", "Twitter", "TikTok"];

function Copyright() {
  return (
    <React.Fragment>
      <Typography color="inherit">
        {'Copyright © '} GameEye {new Date().getFullYear()} - alle Rechte vorbehalten
      </Typography>{' '}
    </React.Fragment>
  );
};

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        fontSize: '0.65rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  mr: 1,
  '&:hover': {
    bgcolor: 'white',
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

export default function AppFooter1() {
  return (
      <Container sx={{  bgcolor: 'primary.dark', color: 'primary.contrastText', maxWidth: '100%'}}>
        <Grid container justifyContent="center" alignItems="center" spacing={0}>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1, display: { sm: 'order', md: 'flex' }, flexDirection: 'row', justifyContent: 'flex-start',  }}>
              {important.map((page) => (
                <Item sx={{ width: 'auto' }}>
                  <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>
                    {page}
                  </Link>
                </Item>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
  );
}
