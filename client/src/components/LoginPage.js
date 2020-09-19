import React from 'react'
import { TextField, CardActions,CardContent, Card, Typography, Button } from '@material-ui/core';
import mintLogo from '../assets/lgormbg.png'
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
        <div className="loginPage">
            <Card className="formCard" >
                    <img style={{width:200, marginBottom:"3rem"}} src={mintLogo} />
                    <Typography style={{margin: 10}}>
                        Login
                    </Typography>
                    <TextField className="input" style={{margin: 10}} variant="outlined" label="username"/>
                    <TextField className="input" style={{margin: 10}} variant="outlined" label="password"/>
                    <button className="btn-primary" style={{margin:10}}>Login</button>
                    <Typography style={{margin: 10}}>
                        Don't have an account? 
                        <Link to="/signup"> Sign up </Link>
                    </Typography>
            </Card>
        </div>
    )
}

export default LoginPage
 