import fetchData from "./utils/fetchData";

const url = process.env.REACT_APP_SERVER_URL + '/user'

export const register = async(user, dispatch)=>{
    dispatch({type:'START_LOADING'})
const result = await fetchData(
    { url: url + '/register', body:user},
    dispatch
);
    if (result) {
        dispatch ({ type: 'UPDATE_USER', payload: result});
        dispatch ({ type: 'CLOSE_LOGIN'});
        dispatch ({
            type: 'UPDATE_ALERT',
            payload: {
                open:true,
                severity:'success',
                messsage:'Аккаунт создан успешно '
            },
        });
    }
    dispatch({type:'END_LOADING'})
}