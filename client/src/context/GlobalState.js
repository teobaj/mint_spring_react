import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
//Inital State

const initalState = {
    isLogged: false,
    token: '',
    habits: [
        {id:1, name:"Eat an apple", lastCompleted:"29/09/2020"},
        {id:2, name:"run", lastCompleted:null},
        {id:3, name:"saluit", lastCompleted:null}
    ],
    isLoading: false,
    error: null
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

    function logout(){
        dispatch({
            type: 'LOGOUT'
        })
    }
    //
    return (<GlobalContext.Provider value={{
        habits: state.habits,
        isLogged: state.isLogged,
        login: login,
        logout,
    }}>
        {children}
    </GlobalContext.Provider>);
}


