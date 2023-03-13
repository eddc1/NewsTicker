import * as React from 'react';
import { Container, Box } from '@mui/material';
import Gridhead from './modules/components/homepage/Gridhead';
import GridTopTips from './modules/components/homepage/GridTopTips';
import TabsList from './modules/components/homepage/TabsList';
import GridTech from './modules/components/homepage/GridTech';
import GridMosteView from './modules/components/homepage/GridMosteView';
import GridBestGamingDeals from './modules/components/homepage/GridBestGamingDeals';


function Home() {

  return (
    <Box>
        <Container sx={{display: 'flex, block', justifyContent: 'center', width: '100%', marginLeft: 'auto', boxSizing: 'border-box',  marginRight: 'auto', paddingLeft: '16px', paddingRight: '16px', fontFamily: 'Arial', maxWidth: '105ch', position: 'relative' }}> 
          <Gridhead/>
          <GridTopTips/>
          <TabsList/>
          <GridTech/>
          <GridMosteView/>
          <GridBestGamingDeals/>
        </Container>
    </Box>
  );
}

export default Home;
