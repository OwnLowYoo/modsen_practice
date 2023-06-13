import React, {useEffect, useRef, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField
} from "@mui/material";
import {useValue} from "../../context/ContextProvider";
import {Close, Send} from "@mui/icons-material";
import PasswordField from "./PasswordField";
import {register} from "../../actions/user";

const Login = () => {
    const { state:{openLogin}, dispatch} = useValue()
    const [title, setTitle] = useState('Вход')
    const [isRegister, setIsRegister] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleClose = () => {
        dispatch({type:'CLOSE_LOGIN'})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if(password !==confirmPassword)
            return dispatch({
                type: 'UPDATE_ALERT',
                payload:{
                    open:true,
                    severity:'error',
                    message:'Пароли не совпадают',
                },
            });
        register({name, email, password}, dispatch)
   };


    useEffect (() =>{
        isRegister ? setTitle('Регистрация') : setTitle('Вход');
    }, [isRegister])

    return (
        <Dialog
        open={openLogin}
        onClose={handleClose}
        >
            <DialogTitle>
                {title}
                <IconButton
                sx={{
                    position:'absolute',
                    top:8,
                    right:8,
                    color:(theme) => theme.palette.grey[500]
                }}
                onClick={handleClose}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent dividers>
                    <DialogContentText>
                        Пожалуйста заполните информацию ниже:
                    </DialogContentText>
                    {isRegister &&
                    <TextField
                        autoFocus
                        margin='normal'
                        variant='standard'
                        id='name'
                        label='Имя'
                        type='text'
                        fullWidth
                        inputRef={nameRef}
                        inputProps={{minLength:2}}
                        required
                        />
                        }
                    <TextField
                        autoFocus={!isRegister}
                        margin='normal'
                        variant='standard'
                        id='email'
                        label='Почта'
                        type='email'
                        fullWidth
                        inputRef={emailRef}
                        required
                    />
                    <PasswordField {...{passwordRef}} />
                    {isRegister &&
                    <PasswordField
                        passwordRef={confirmPasswordRef}
                        id='confirmPassword'
                        label='Подтвердите Пароль' />
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        type='submit'
                        variant='contained'
                        endIcon={<Send />}>
                        Отправить
                    </Button>
                </DialogActions>
            </form>
            <DialogActions sx={{ justifyContent:'left', p:'5px 24px'}}>
                {isRegister
                ? 'Уже есть аккаунт?'
                : 'Нет аккаунта?'}
                <Button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Войти' : 'Зарегистрироваться'}
                </Button>

            </DialogActions>
        </Dialog>
    );
};

export default Login;