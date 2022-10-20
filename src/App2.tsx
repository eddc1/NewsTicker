import * as React from 'react';
import './App.css';
import { Container } from '@mui/material';
import Navigation from './modules/components/Navigation';
import { ThemeProvider } from '@mui/material/styles';
import theme from './modules/components/theme/theme';
import AppFooter from './modules/components/AppFooter';
import Gridhead from './modules/components/homepage/Gridhead';
import GridTopTips from './modules/components/homepage/GridTopTips';
import GridMosteView from './modules/components/homepage/GridMosteView';
import GridTech from './modules/components/homepage/GridTech';
import GridBestGamingDeals from './modules/components/homepage/GridBestGamingDeals';
import TabsList from './modules/components/homepage/TabsList';
import NavTest from './modules/components/NavTest';
import { Route, Routes } from 'react-router';
import Spiele from './modules/pages/Spiele';
import News from './modules/pages/News';
import Videos from './modules/pages/Videos';
import Artikel from './modules/pages/Artikel';
import Crypto from './modules/pages/Crypto';


function App() {

  return (
    <div className='App'>
    <ThemeProvider theme={theme}>
        <NavTest/>
        <Container sx={{display: 'flex, block', justifyContent: 'center', width: '100%', marginLeft: 'auto', boxSizing: 'border-box',  marginRight: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingTop: '4rem', fontFamily: 'Arial', maxWidth: '105ch', position: 'relative' }}> 
          <Gridhead/>
          <GridTopTips/>
          <TabsList/>
          <GridTech/>
          <GridMosteView/>
          <GridBestGamingDeals/>
        </Container>
        <AppFooter/>
    </ThemeProvider>
    <Routes>
        <Route path="Spiele" element={<Spiele />} />
        <Route path="News" element={<News />} />
        <Route path="Videos" element={<Videos />} />
        <Route path="Artikel" element={<Artikel />} />
        <Route path="Crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
