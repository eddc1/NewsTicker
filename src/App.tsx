import * as React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './modules/components/theme/theme';
import AppFooter from './modules/components/AppFooter';
import NavTest from './modules/components/NavTest';
import { Route, Routes } from "react-router";
import Home from './modules/pages/Home';
import Spiele from './modules/pages/Spiele';
import News from './modules/pages/News';
import Video from './modules/pages/Video';
import Artikel from './modules/pages/Artikel';
import Crypto from './modules/pages/Crypto';
import Community from './modules/pages/Community';



function App() {

  return (
    <ThemeProvider theme={theme}>
        <NavTest/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Spiele" element={<Spiele />} />
            <Route path="News" element={<News />} />
            <Route path="Video" element={<Video />} />
            <Route path="Artikel" element={<Artikel />} />
            <Route path="Crypto" element={<Crypto />} />
            <Route path="Community" element={<Community />} />
          </Routes>
        <AppFooter/>
    </ThemeProvider>
  );
}

export default App;
