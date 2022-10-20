import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';
import TextField from './TextField';
import { Link } from 'react-router-dom';

const important = ["Impressum", "Über uns", "Über GameEye", "Karriere", "Newsletter", "Kontakt", "Nutzungsbestimmungen", "Mediadaten", "Datenschutzerklärung", "Cookies & Tracking"];

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Typography color="inherit">
        GameEye.com
      </Typography>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}


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

const footer = {
  zIndex: 2,
  position: 'relative',
  bgcolor: 'primary.dark',
  marginTop: '0!important',
  display: 'block',
    gridContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: 320,
    },
    row: {
      width: '100%',
      float: 'left',
      position: 'relative',
      minHeight: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
    content: {
      fontSize: '.75rem',
      marginBottom: '10px!important',
      fontFamily: 'Helvetica,Arial,sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
    }
}; 


export default function AppFooter() {
  return (
      <Container sx={footer}>
        <Grid container sx={footer.gridContainer}>
          <Grid container
  direction="row"
  justifyContent="flex-start"
  alignItems="center" sx={footer.row}>
            <Grid item sx={footer.content}>
              <Typography variant="caption">
                <Box sx={{ flex: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center', paddingRight: '1rem' }}>
                  {important.map((page) => (
                    <Item sx={{  }}>
                      <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>
                        {page}
                      </Link>
                    </Item>
                  ))}
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Copyright/>
          </Grid>
        </Grid>
      </Container>
  );
}

