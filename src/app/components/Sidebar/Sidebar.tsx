
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
import SearchBar from '../SearchBar/SearchBar';

interface Props {
    setCity : Dispatch<SetStateAction<string>>
}

const Sidebar = ({ setCity } : Props) => {
    const drawerWidth = 240;

    return (
        <>
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <SearchBar setCity={setCity} />

            {/* <Typography variant="h6" noWrap component="div">
              Permanent drawer
            </Typography> */}
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <h1>InboxIcon</h1>: <h1>MailIcon</h1>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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