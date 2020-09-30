export default (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isLogged: true
            }
        case 'LOGOUT':
            return{
                ...state,
                isLogged: false,
                token: '',
                habits: [],
                isLoading: false,
                error: null
            }
        default:
            return state;
    }
}