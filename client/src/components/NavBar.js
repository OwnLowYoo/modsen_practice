import React from 'react';
import {
    Drawer,
    Box,
    Toolbar,
    Button,
} from "@mui/material";
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
            <Toolbar disableGutters />
            <Box sx={{ p: 2 }}>
                <Button
                    color="inherit"
                    startIcon={<SearchIcon />} >
                </Button>
            </Box>
            <Box sx={{ p: 2 }}>
                <Button
                    color="inherit"
                    startIcon={<BookmarkBorderIcon />} >
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ p: 2 }}>
                {!currentUser ? (
                    <Button
                        color="inherit"
                        startIcon={<LockIcon />}
                        onClick={()=>dispatch({type:'OPEN_LOGIN'})}
                    >
                </Button>
                    ) : (
                        <UserIcons />
                    )}
                </Box>
            </Drawer>
    );
};

export default NavBar;
