import React from 'react'
import {Avatar, Box, IconButton, Tooltip} from "@mui/material";
import {useValue} from "../../context/ContextProvider";

const UserIcons = () => {
    const {state:{currentUser}} = useValue()
    return (
        <Box>
            <Tooltip title='Open User Settings'>
                <IconButton>
                    <Avatar src={currentUser?.ava} alt={currentUser?.name}>
                        {currentUser?.name?.charAt(0).toUpperCase()}
                    </Avatar>
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default UserIcons
