import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Grid, Container, InputBase, ButtonBase, Typography, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const box = {
  flexGrow: 1,
  overflow: 'hidden',
  p: 1,
  margin: 'auto',
  justifyContent: 'center',
  justifyItem: 'center',
  display: 'flex',
  maxWidth: '100%',
    img: {
      width: '10rem',
      height: 'auto'
    }
}

const container = {
  margin: 1,
  position: 'relative',
  width: '100%',
}


const grid = {
  paddingBottom: 2,
  paddingRight: 0,
  paddingLeft: 0,
  direction: 'row',
    box: {
      display: 'block'
    }
}


const typography = {
  display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  color: 'rgba(33,33,33,.75)'
}

const btnbase = {
  width: 'auto',
  height: 'auto'
}

function Options() {
  const theme = useTheme();
  const [genre, setgenre] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof genre>) => {
    const {
      target: { value },
    } = event;
    setgenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <React.Fragment>
       <Box component="section" sx={box}>
            <Grid sx={grid} container>
              <Grid item sx={{ mb: 2 }} xs={12}>
                <Typography variant='h4'>Spiele</Typography>
              </Grid>
              <Grid item sx={{ mb: 2 }} xs={12}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Grid>
              <Grid xs={12} sx={{ flexGrow: 1 }} spacing={2} container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-name-label">Genre</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={genre}
                      onChange={handleChange}
                      input={<OutlinedInput label="Genre" />}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, genre, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormControl size="medium" fullWidth>
                      <InputLabel id="demo-multiple-name-label">Release</InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={genre}
                        onChange={handleChange}
                        input={<OutlinedInput label="Release" />}
                        MenuProps={MenuProps}
                      >
                        {release.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, genre, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={4} justifyContent="flex-end">
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-name-label">Wertung</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={genre}
                      onChange={handleChange}
                      input={<OutlinedInput label="Wertung" />}
                      MenuProps={MenuProps}
                    >
                      {wertung.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, genre, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid xs={12} sx={{ flexGrow: 1, mt: 1 }} spacing={2} container direction="row" justifyContent="space-between" >
                <Grid item xs={3}>
                  <Typography variant="h6">9845 Einträge</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box
                      component={Grid}
                      item
                      xs={3}
                      display={{ xs: "none", sm: "block" }}>
                    <Typography variant="h6">Sortierung:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                      <InputLabel id="demo-multiple-name-label">Leserinteresse</InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={genre}
                        onChange={handleChange}
                        input={<OutlinedInput label="Leserinteresse" />}
                        MenuProps={MenuProps}
                      >
                        {leserinteresse.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, genre, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                </Grid>
              </Grid>
            </Grid>
      </Box>
    </React.Fragment>
  );
}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height: '80%',
  marginTop: '0.25rem',
  border: '1.5px solid #303f9f',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Filter Start

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '3rd-Person-Shooter',
  'Action',
  'Action-Adventure',
  'Action-Rollenspiel',
  'Action-Simulation',
  'Adventure',
  'Aufbau-Strategie',
  'Beat ’em up',
  'Denk- & Ratespiel',
  'Echtzeit-Strategie',
  'Echtzeit-Taktik',
  'Ego-Shooter',
  'Geschicklichkeitsspiel',
  'Grafik-Adventure',
  'Jump&Run',
  'Lebenssimulation',
  'Loot-Shooter',
  'Manager',
  'Multiplayer-Shooter',
  'Musikspiel',
  'Online-Rollenspiel',
  'Point & Click',
  'Puzzlespiel',
  'Rennspiel',
  'Rollenspiel',
  'Rundenstrategie',
  'Shooter',
  'Sport',
  'Sport-Simulation',
  'Strategie',
  'Taktik-Shooter',
  'Technische Simulation',
  'Trendsport',
  'Weltraum-Action',
  'Wirtschaftssimulation',
];

const release = [
  '2024',
  '2023',
  '2022',
  'Januar 2022',
  'Februar 2022',
  'März 2022',
  'April 2022',
  'Mai 2022',
  'Juni 2022',
  'Juli 2022',
  'August 2022',
  'September 2022',
  'Oktober 2022',
  'November 2022',
  'Dezember 2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
  '2011',
  '2010',
  '2009',
  '2008',
  '2007',
  '2006',
  '2005',
  '2004',
  '2003',
  '2002',
  '2001',
  '2000',
  '1999',
  '1998',
  '1997',
  '1996',
  
];

const wertung = [
  '0-20',
  '21-40',
  '41-60',
  '61-80',
  '81-90',
  '91-100',
];

const leserinteresse = [
  'Release-Datum',
  'Alphabetisch',
  'Leserinteresse',
  'Nach Wertung',
];

function getStyles(name: string, genre: string[], theme: Theme) {
  return {
    fontWeight:
      genre.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


// Filter Ende

function Spiele() {
  return (
        <Box component="section" sx={box}>
          <Container sx={container}>
            <Grid sx={grid} container spacing={2}>
              <Grid item>
                <Options/>
              </Grid>
              {/* <Grid item>
                <Filter/>
              </Grid> */}
              <Grid item xs={10}>
                <Box sx={{ height: 150, width: "100%", backgroundColor: "#f2f7fc", m: 2, pl: 5, pr: 5 }}>
                        <Typography variant="subtitle1" sx={{ pt: 2, pb: 2 }}>Beste PC-Spiele: Liste der beliebtesten Games</Typography>
                        <Typography variant="h6">In dieser Bestenliste findest du die aktuell angesagtesten PC-Spiele nach Leserinteresse auf Gameeye.com inklusive Wertung und Release.</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Container sx={container}>
                  <Grid
                      sx={grid}
                      container
                      spacing={12}>
                    <Grid item sm={12} md={3}>
                      <ButtonBase sx={btnbase}>
                      <Box 
                        component="img"
                        src="https://images.cgames.de/images/gamestar/95/ultima-1-the-first-age-of-darkness_2290285.jpg"
                        alt="suitcase"
                        sx={box.img}
                      />
                      </ButtonBase>
                    </Grid>
                    <Grid item sm={12} md={9}>
                      <Box sx={grid.box}>
                        <Typography variant="subtitle1" sx={{ paddingBottom: 2 }}>
                          Ultima 1: The First Age of Darkness
                        </Typography>
                        <TextField
                          disabled 
                          id="outlined-read-only-input"
                          label="Platform"
                          defaultValue="PC"
                          InputProps={{
                            readOnly: true,
                          }}
                          sx={{ width: 'auto' }}
                        />
                        <Typography sx={typography}>
                          Genre: Rollenspiel
                        </Typography>
                        <Typography sx={typography}>
                          Entwickler: Origin Systems
                        </Typography>
                        <Typography sx={typography}>
                          Release: 02.09.1980 (PC)
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>
  );
}

export default Spiele;
