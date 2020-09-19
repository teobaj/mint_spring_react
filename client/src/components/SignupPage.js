import { Card, Typography, TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import mintLogo from '../assets/lgormbg.png'


const SignupPage = () => {
    return (
        <div className="signupPage">
            <Card className="formCard">
                <img style={{width:200, marginBottom:"3rem"}} src={mintLogo} />
                <Typography>Sign Up</Typography>
                <TextField className="input" style={{ margin: 10 }} variant="outlined" label="username" />
                <TextField className="input" style={{ margin: 10 }} variant="outlined" label="email" />
                <TextField className="input" style={{ margin: 10 }} variant="outlined" label="password" />

                <button className="btn-primary" style={{ margin: 10 }}>Register</button>

                <Typography>Already have an accound? <Link to="/login">Log in</Link></Typography>

            </Card>
        </div>
    )
}

export default SignupPage
