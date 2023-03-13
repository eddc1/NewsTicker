import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from   './modules/components/theme/theme';
// import { Route, Routes } from "react-router";
import Home from './Home';



function App() {

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    </div>
    
  );
}

export default App;
