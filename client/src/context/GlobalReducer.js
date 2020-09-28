export default (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isLogged: true
            }
        default:
            return state;
    }
}