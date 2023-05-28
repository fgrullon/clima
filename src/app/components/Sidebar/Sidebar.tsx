
import { 
    Box, 
    AppBar, 
    Toolbar ,
    CssBaseline,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { SetStateAction } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { WiDayFog } from 'weather-icons-react';
import { BiAbacus, BiMap, BiMapAlt } from "react-icons/bi";

interface Props {
    setCity : Dispatch<SetStateAction<string>>
}

const Sidebar = ({ setCity } : Props) => {
    const drawerWidth = 240;
    const options = [
        { name : 'Weather', icon : <WiDayFog /> },
        { name : 'Cities', icon : <BiMap /> },
        { name : 'Map', icon : <BiMapAlt /> },
        { name : 'Settings', icon : <BiAbacus /> }
    ];
    return (
        <>
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <SearchBar setCity={setCity} />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            
            {options.map((text, index) => (
              <ListItem key={text.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text.icon}
                    {/* {index % 2 === 0 ? <h1>InboxIcon</h1>: <h1>MailIcon</h1>} */}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
     
        </Drawer>
        </>
    );
}

export default Sidebar;