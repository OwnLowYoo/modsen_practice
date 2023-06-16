import React, {useState} from 'react'
import {Avatar, Box, IconButton, Tooltip} from "@mui/material";
import {useValue} from "../../context/ContextProvider";
import UserMenu from "./UserMenu";
import useCheckToken from "../../hooks/useCheckToken";

const UserIcons = () => {
    useCheckToken();
    const {state:{currentUser}} = useValue()

    const [anchorUserMenu, setAnchorUserMenu] = useState(null)

    return (
        <Box>
            <Tooltip title='Пользовательские настройки'>
                <IconButton onClick={(e)=>setAnchorUserMenu(e.currentTarget)}>
                    <Avatar src={currentUser?.ava} alt={currentUser?.name}>
                        {currentUser?.name?.charAt(0).toUpperCase()}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <UserMenu {...{anchorUserMenu, setAnchorUserMenu}} />
        </Box>
    )
}

export default UserIcons
