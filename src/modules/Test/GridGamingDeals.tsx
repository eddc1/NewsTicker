import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, ButtonBase, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };


  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Box
      component="section"
      sx={{ flexGrow: 1, overflow: 'hidden', p: 2, margin: 'auto', maxWidth: '100%' }}>
        
        <Typography sx={{ textAlign: 'center', borderBottom: '2px solid #303f9f', color: '#303f9f' }} variant="h4" pb={1} >KOMMENDE SPIELE
        </Typography>
    
    <Grid sx={{ flexGrow: 1, paddingTop: 5 }} container spacing={2}>

    {/* TestProzess */}
    
        <Grid 
            
            md={12} container justifyContent="center" spacing={4}>
            <Grid item>
                <Paper
                    sx={{
                    height: 210,
                    width: 150,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                            <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                <Img alt="Game1" src="https://images.cgames.de/images/gamestar/212/15150-pc-packshot_6187059.jpg" />
                            </ButtonBase>
                </Paper>
                <Typography sx={{width: 150, textAlign: 'center', paddingTop: '0.5rem' }} >Destroy All Humans! 2 - Reprobed</Typography>
            </Grid>
            <Grid item>
                <Paper
                    sx={{
                    height: 210,
                    width: 150,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                            <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                <Img alt="Game1" src="https://images.cgames.de/images/gamestar/212/15347-pc-packshot_6187061.jpg" />
                            </ButtonBase>
                </Paper>
                <Typography sx={{ width: 150, textAlign: 'center', paddingTop: '0.5rem' }} >F1 Manager 2022</Typography>
            </Grid>
            <Grid item>
                <Paper
                    sx={{
                    height: 210,
                    width: 150,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                            <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                <Img alt="Game1" src="https://images.cgames.de/images/gamestar/212/15570-pc-packshot_6186133.jpg" />
                            </ButtonBase>
                </Paper>
                <Typography sx={{ width: 150, textAlign: 'center', paddingTop: '0.5rem' }} >Immortality</Typography>
            </Grid>
            <Grid item>
                <Paper
                    sx={{
                    height: 210,
                    width: 150,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                            <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                <Img alt="Game1" src="https://images.cgames.de/images/gamestar/212/15630-pc-packshot_6191280.jpg" />
                            </ButtonBase>
                </Paper>
                <Typography sx={{ width: 150, textAlign: 'center', paddingTop: '0.5rem' }} >ORX</Typography>
            </Grid>
            <Grid item>
                <Paper
                    sx={{
                    height: 210,
                    width: 150,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                            <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                <Img alt="Game1" src="https://images.cgames.de/images/gamestar/212/15631-pc-packshot_6191307.jpg" />
                            </ButtonBase>
                </Paper>
                <Typography sx={{ width: 150, textAlign: 'center', paddingTop: '0.5rem' }} >Call of the Wild: The Angler</Typography>
            </Grid>
            <Grid item>
                <Paper
                    sx={{
                    height: 210,
                    width: 150,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
                            <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                                <Img alt="Game1" src="https://images.cgames.de/images/gamestar/212/15590-pc-packshot_6187390.jpg" />
                            </ButtonBase>
                </Paper>
                <Typography sx={{ width: 150, textAlign: 'center', paddingTop: '0.5rem' }} >Scathe</Typography>
            </Grid>
          
        </Grid>
      </Grid>

    {/* Sleider */}

      <Grid flexGrow={1} item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item justifyContent='left'>
                <IconButton>
                    <ArrowBackIosNewIcon/>
                </IconButton>
            </Grid>
            <Grid item justifyContent='right'>
                <IconButton>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
   

        
    </Box>
  );
  
}
