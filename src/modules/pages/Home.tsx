import * as React from 'react';
import { Container, Box } from '@mui/material';
import Gridhead from '../components/homepage/Gridhead';
import GridTopTips from '../components/homepage/GridTopTips';
import TabsList from '../components/homepage/TabsList';
import GridTech from '../components/homepage/GridTech';
import GridMosteView from '../components/homepage/GridMosteView';
import GridBestGamingDeals from '../components/homepage/GridBestGamingDeals';


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
