const reducer = (state, action) =>{
    switch (action.type){
        case 'OPEN_LOGIN':
            return {...state, openLogin:true};
        case 'CLOSE_LOGIN':
            return {...state, openLogin:false}

        case 'UPDATE_ALERT':
            return {...state,alert:action.payload }

        case 'UPDATE_USER':
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            return {...state, currentUser:action.payload}

        default:
            throw new Error('No matched action!')
    }
}

export default reducer;