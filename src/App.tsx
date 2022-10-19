import * as React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from   './modules/components/theme/theme';
import AppFooter from './modules/components/AppFooter';
import NavTest from './modules/components/NavTest';
import { Route, Routes } from "react-router";
import Home from './modules/pages/Home';
import Spiele from './modules/pages/Spiele';
import News from './modules/pages/News';
import Videos from './modules/pages/Videos';
import Artikel from './modules/pages/Artikel';
import Crypto from './modules/pages/Crypto';
import Tech from './modules/pages/Tech';
import Impressum from './modules/footer/Impressum';
import ÜberUns from './modules/footer/ÜberUns';
import ÜberGameEye from './modules/footer/ÜberGameEye';
import Karriere from './modules/footer/Karriere';
import Newsletter from './modules/footer/Newsletter';
import Kontakt from './modules/footer/Kontakt';
import Nutzungsbestimmungen from './modules/footer/Nutzungsbestimmungen';
import Mediadaten from './modules/footer/Mediadaten';
import Datenschutzerklärung from './modules/footer/Datenschutzerklärung';
import CookiesTracking from './modules/footer/CookiesTracking';



function App() {

  return (
    <ThemeProvider theme={theme}>
        <NavTest/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Spiele" element={<Spiele />} />
            <Route path="News" element={<News />} />
            <Route path="Videos" element={<Videos />} />
            <Route path="Artikel" element={<Artikel />} />
            <Route path="Tech" element={<Tech />} />
            <Route path="Crypto" element={<Crypto />} />
          </Routes>
          <Routes>
              <Route path="Impressum" element={<Impressum />} />
              <Route path="ÜberUns" element={<ÜberUns />} />
              <Route path="ÜberGameEye" element={<ÜberGameEye />} />
              <Route path="Karriere" element={<Karriere />} />
              <Route path="Newsletter" element={<Newsletter />} />
              <Route path="Kontakt" element={<Kontakt />} />
              <Route path="Nutzungsbestimmungen" element={<Nutzungsbestimmungen />} />
              <Route path="Mediadaten" element={<Mediadaten />} />
              <Route path="Datenschutzerklärung" element={<Datenschutzerklärung />} />
              <Route path="Cookies&Tracking" element={<CookiesTracking />} />
            </Routes>
        <AppFooter/>
          
    </ThemeProvider>
  );
}

export default App;
