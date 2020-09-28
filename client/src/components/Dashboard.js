import { AppBar, IconButton, Paper, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'
import HabitList from './HabitList';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <AppBar className="appbar">
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <HabitList/>

        </div>
    )
}

export default Dashboard
