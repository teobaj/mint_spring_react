import React, {useContext, useState} from 'react'
import { TextField, CardActions,CardContent, Card, Typography, Button } from '@material-ui/core';
import mintLogo from '../assets/lgormbg.png'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(GlobalContext);

    const onLogin = e => {
        const user = {
            username: username,
            password: password
        }

        login(user);
    }

    return (
        <div className="loginPage">
            <Card className="formCard" >
                    <img style={{width:200, marginBottom:"3rem"}} src={mintLogo} />
                    <Typography style={{margin: 10}}>
                        Login
                    </Typography>
                    <TextField className="input" style={{margin: 10}} variant="outlined" label="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <TextField className="input" style={{margin: 10}} variant="outlined" label="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="btn-primary" style={{margin:10}} onClick={onLogin}>Login</button>
                    <Typography style={{margin: 10}}>
                        Don't have an account? 
                        <Link to="/signup"> Sign up </Link>
                    </Typography>
            </Card>
        </div>
    )
}

export default LoginPage
 