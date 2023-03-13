import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import TechToday from './modules/components/tech/TechToday';
import TechHead from './modules/components/tech/TechHead';
import TechPcGaming from './modules/components/tech/TechPcGaming';
import TechSmarphones from './modules/components/tech/TechSmarphones';
import TechGadgetsTrends from './modules/components/tech/TechGadgetsTrends';
import TechWindows from './modules/components/tech/TechWindows';
import TechDeals from './modules/components/tech/TechDeals';
import TechTest from './modules/components/tech/TechTest';
import TechKaufratgeber from './modules/components/tech/TechKaufratgeber';
import TechGuides from './modules/components/tech/TechGuides';

const mainContainer = {
    display: 'flex, block',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: '4rem',
    fontFamily: 'Arial',
    maxWidth: '105ch',
    position: 'relative' 
}

const box = {
    flexGrow: 1,
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 10,
    margin: 'auto',
    maxWidth: '100%',
    justifyContent: 'center',
    justifyItem: 'center',
        button: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        },
}




function Tech() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
            <Box>
                <TechHead/>
                <TechToday/>
                <TechPcGaming/>
                <TechSmarphones/>
                <TechGadgetsTrends/>
                <TechWindows/>
                <TechDeals/>
                <TechTest/>
                <TechKaufratgeber/>
                <TechGuides/>
            </Box>
        </Box>
    </Container>
  );
}

  

export default Tech;
