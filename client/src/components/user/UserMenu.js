import React from 'react';
import {ListItemIcon, Menu, MenuItem} from '@mui/material'
import {Logout} from "@mui/icons-material";
import {useValue} from "../../context/ContextProvider";
import useCheckToken from "../../hooks/useCheckToken";

const UserMenu = ({anchorUserMenu, setAnchorUserMenu}) => {
    useCheckToken();
    const {dispatch} = useValue()
    const handleCloseUserMenu = () =>{
        setAnchorUserMenu(null);
};

    return (
        <Menu
            anchorEl={anchorUserMenu}
            open={Boolean(anchorUserMenu)}
            onClose={handleCloseUserMenu}
            onClick={handleCloseUserMenu}
            >

            <MenuItem onClick={()=>dispatch({type:'UPDATE_USER', payload:null})}
            >
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Выйти
            </MenuItem>
        </Menu>
    );
};

export default UserMenu;