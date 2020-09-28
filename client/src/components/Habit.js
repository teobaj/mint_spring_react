import { IconButton, Paper } from '@material-ui/core'
import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
const Habit = ({name}) => {
    return (
        <Paper className="habit">
           {name}
           <IconButton style={{color:"#2c2d31"}}>
               <AddBoxIcon/>
           </IconButton>
        </Paper>
    )
}

export default Habit
