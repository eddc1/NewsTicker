import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, InputBase, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Typography from './Typography';

const pages = ["Spiele", "News", "Videos", "Artikel", "Tech", "Crypto"]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '100%',
  height: '80%',
  marginTop: '0.25rem',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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


export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  //Mobile

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages.map((page) => (
        <MenuItem
              key={page}>          
            <Link style={{ textDecoration: "none", color: "black", paddingRight: 30 }} to={`/${page}`}>
            {page}
            </Link>
        
        </MenuItem>
      ))}
    </Menu>
  );
// Mobile Ende

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor: 'primary.dark' }} position="static">
        <Toolbar sx={{  justifyItems: 'center', justifyContent: 'space-between', marginRight: 6, marginLeft: 6 }} >
          <IconButton disableRipple size="small" sx={{ "&.MuiButtonBase-root:hover": { bgcolor: "transparent" }}}>
            <Link to="/">
                <Box component="img" sx={{width: 140, height: 50}} alt="logo-gameeye" src={Logo}/>
            </Link>
          </IconButton>
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', paddingRight: '1rem' }}>
            {pages.map((page) => (
              <Typography>
                  <Link style={{ textDecoration: "none", color: "white", paddingRight: 30 }} to={`/${page}`}>
                  {page}
                  </Link>
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
