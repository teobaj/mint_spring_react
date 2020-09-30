import { AppBar, IconButton, Paper, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useContext } from 'react'
import HabitList from './HabitList';
import AddHabit from './AddHabit';
import { GlobalContext } from '../context/GlobalState';

const Dashboard = () => {

    const {logout} = useContext(GlobalContext);

    return (
        <div className="dashboard">
            <AppBar className="appbar">
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>

                    <IconButton onClick={logout}>
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <HabitList/>
            <AddHabit/>

        </div>
    )
}

export default Dashboard
