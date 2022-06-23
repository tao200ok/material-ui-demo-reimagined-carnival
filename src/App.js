import React, { useState } from 'react';
import './App.css';

// Load reset 
import CssBaseline from '@mui/material/CssBaseline';

// Load theme provider
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Load components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// Load material icons
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
    },
    secondary: {
      main: '#0d47a1',
      light: '#5472d3',
      dark: '#002171',
    }
  },
  props: {
    MuiAppBar: {
      color: 'default'
    },
  }
});



function App() {
  // App state
  const [openAccount, setOpenAccount] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // Handle icon menu open
  let anchorEl = document.getElementById('menuAnchor');
  const handleClick = (e) => {
    let activeID = e.currentTarget.id;
    (activeID === 'accountButton') ? setOpenAccount(true) : setOpenMenu(true);
    console.log(activeID);
  };
  const handleClose = () => {
    setOpenAccount(false);
    setOpenMenu(false);
  }


  return (
    <div className='App'>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar>
            <Toolbar id='menuAnchor' sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Icon>
                <HomeIcon />
              </Icon>
              <Typography variant='h4'>somepage</Typography>
              <Stack direction="row">
                <IconButton size="large" id="accountButton" onClick={handleClick}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openAccount} onClose={handleClose} sx={{ minWidth: 300 }}>
                  <MenuItem>Profile</MenuItem>
                  <Divider />
                  <MenuItem>Account</MenuItem>
                </Menu>
                <IconButton size="large" sx={{ borderRadius: 1 }} id="menuButton" onClick={handleClick}>
                  <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openMenu} onClose={handleClose} sx={{ minWidth: 300 }}>
                  <MenuItem>Settings</MenuItem>
                </Menu>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}


export default App;

