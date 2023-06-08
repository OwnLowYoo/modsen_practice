import React from 'react';
import {
    Drawer,
    Box,
    IconButton,
    Toolbar,
    Button
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ava from '../ava.jpg'
import UserIcons from "./user/UserIcons";
import {useValue} from "../context/ContextProvider";

const user = {name:'test', ava}

const NavBar = () => {

const {
    state:{currentUser},
    dispatch
} = useValue();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <Toolbar disableGutters>
                <Box sx={{ mr: 1 }}>
                    <IconButton size="large" color="inherit">
                        <Menu />
                        Menu
                    </IconButton>
                </Box>
            </Toolbar>
            <Box sx={{ p: 2 }}>
                <Button color="inherit" startIcon={<SearchIcon />} >
                    Search
                </Button>
            </Box>
            <Box sx={{ p: 2 }}>
                <Button color="inherit" startIcon={<BookmarkBorderIcon />} >
                    Favorite
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ p: 3 }}>
                {!currentUser ? (
                    <Button
                        color="inherit"
                        startIcon={<LockIcon />}
                        onClick={()=>dispatch({type:'UPDATE_USER', payload:user})}
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
