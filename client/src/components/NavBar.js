import React from 'react';
import {
  Drawer,
  Box,
  Toolbar,
  Button,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UserIcons from './user/UserIcons';
import {useValue} from '../context/ContextProvider';


const NavBar = () => {
  const {
    state: {currentUser},
    dispatch,
  } = useValue();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Toolbar disableGutters />
      <Box sx={{p: 2}}>
        <Button
          color="inherit"
          startIcon={<SearchIcon />} >
                    Search
        </Button>
      </Box>
      <Box sx={{p: 2}}>
        <Button
          color="inherit"
          startIcon={<BookmarkBorderIcon />} >
                    Favorite
        </Button>
      </Box>
      <Box sx={{flexGrow: 1}} />
      <Box sx={{p: 4}}>
        {!currentUser ? (
                    <Button
                      color="inherit"
                      startIcon={<LockIcon />}
                      onClick={()=>dispatch({type: 'OPEN_LOGIN'})}
                    >
                        Login
                    </Button>
                    ) : (
                        <UserIcons />
                    )}
      </Box>
    </Drawer>
  );
};

export default NavBar;
