import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
//Inital State

const initalState = {
    isLogged: false,
    token: '',
    habits: [
        {id:1, name:"Eat an apple"},
        {id:2, name:"run"},
        {id:3, name:"saluit"}
    ],
    isLoading: false,
    error: ''
}

//Create context

export const GlobalContext = createContext(initalState);

//Provider component

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(GlobalReducer, initalState);

    //Actions
    function login(user){
        dispatch({
            type: 'LOGIN',
            payload: user
        });
    }
    //
    return (<GlobalContext.Provider value={{
        habits: state.habits,
        isLogged: state.isLogged,
        login: login
    }}>
        {children}
    </GlobalContext.Provider>);
}


