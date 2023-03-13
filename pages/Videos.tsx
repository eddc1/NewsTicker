import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import VideosToday from './modules/components/Videos/VideosToday';
import VideosHead from './modules/components/Videos/VideosHead';
import AdVideosToday from './modules/components/Videos/AdVideosToday';

const mainContainer = {
    display: 'flex, block',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    paddingTop: '4rem',
    fontFamily: 'Arial',
    position: 'relative' 
}

const box = {
    flexGrow: 1,
    overflow: 'hidden',
    paddingBottom: 10,
        button: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        },
}


const gridimg = {
    backgroundColor: 'rgba(white)', // farbe = 0,0,0,.1
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
}

const daynewslist = {
    backgroundColor: 'rgba(white)',
}


function Videos() {
  return (
    <Box sx={mainContainer}> 
        <Container
        component="section"
        sx={box}>
            <Box>
                <VideosHead/>
            </Box>
                <Grid item xs={12} container>
                    <Grid item container direction="row">
                        <Grid item sx={daynewslist} sm={12} md={8}>
                            <VideosToday/>
                        </Grid>
                        <Grid item sx={gridimg} xs={4}>
                            <Box sx={{flex: 1, display: { xs: 'none', md: 'flex' }}}>
                                <AdVideosToday/>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
        </Container>
    </Box>
  );
}


export default Videos;
