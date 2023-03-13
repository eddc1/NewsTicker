import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function BasicList() {
  return (
    <Box component="section" sx={{ maxWidth: '100%', bgcolor: 'background.paper', display: 'fix', }}>
      <nav>
        <List>
          <ListItem sx={{ height: 'auto', width: 'auto' }} >
            <ListItemButton>
              <ListItemIcon>
                 <Img sx={{
                    height: 210,
                    width: 150 }} alt="Game1" src="https://images.cgames.de/images/gamestar/212/15150-pc-packshot_6187059.jpg" />
              </ListItemIcon>
              <ListItemText primary="Destroy All Humans! 2 - Reprobed" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                 <Img sx={{
                    height: 210,
                    width: 150 }} alt="Game1" src="https://images.cgames.de/images/gamestar/212/15347-pc-packshot_6187061.jpg" />
              </ListItemIcon>
              <ListItemText primary="F1 Manager 2022" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                 <Img sx={{
                    height: 210,
                    width: 150 }} alt="Game1" src="https://images.cgames.de/images/gamestar/212/15570-pc-packshot_6186133.jpg" />
              </ListItemIcon>
              <ListItemText primary="Immortality" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                 <Img sx={{
                    height: 210,
                    width: 150 }} alt="Game1" src="https://images.cgames.de/images/gamestar/212/15630-pc-packshot_6191280.jpg" />
              </ListItemIcon>
              <ListItemText primary="ORX" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                 <Img sx={{
                    height: 210,
                    width: 150 }} alt="Game1" src="https://images.cgames.de/images/gamestar/212/15631-pc-packshot_6191307.jpg" />
              </ListItemIcon>
              <ListItemText primary="Call of the Wild: The Angler" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
