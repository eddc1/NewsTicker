import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArtikelTest from '../components/article/ArtikelTest';
import Artikelubersicht from '../components/article/Artikelubersicht';
import ArtikelPreviews from '../components/article/ArtikelPreviews';
import ArtikelHitlisten from '../components/article/ArtikelHitlisten';
import ArtikelKolumnen from '../components/article/ArtikelKolumnen';
import ArtikelSpecials from '../components/article/ArtikelSpecials';
import ArtikelGuides from '../components/article/ArtikelGuides';

const box = {
  flexGrow: 1,
  overflow: 'hidden',
  p: 1,
  margin: 'auto',
  justifyContent: 'center',
  justifyItem: 'center',
  display: 'flex',
  maxWidth: '100%',
    button: {
      width: '100%',
      height: 'auto'
    },
}

const container = {
  margin: 2,
  display: 'flex',
  position: 'relative'
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Artikel() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
    component="section"
    sx={box}>
      <Container sx={container}>
        <Grid 
              container
              direction="row"
              justifyContent="center"
              pb={6}>
          <Grid item sx={{ mb: 2 }} xs={12}>
            <Typography variant='h4'>Alle GameEye-Artikel im Übersicht</Typography>
          </Grid>
          <Grid item sx={{ mb: 3 }} xs={12}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs  variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Übersicht" {...a11yProps(0)} />
                  <Tab label="Test" {...a11yProps(1)} />
                  <Tab label="Previews" {...a11yProps(2)} />
                  <Tab label="Hitlisten" {...a11yProps(3)} />
                  <Tab label="Kolumnen" {...a11yProps(4)} />
                  <Tab label="Specials" {...a11yProps(5)} />
                  <Tab label="Guides" {...a11yProps(6)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Artikelubersicht/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ArtikelTest/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ArtikelPreviews/>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ArtikelHitlisten/>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <ArtikelKolumnen/>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <ArtikelSpecials/>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <ArtikelGuides/>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
  </Box>
);
}



export default Artikel;
