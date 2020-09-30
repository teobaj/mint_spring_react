import { Checkbox, IconButton, Paper } from '@material-ui/core';
import { format, getDate, isToday } from 'date-fns'
import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
const Habit = ({name, lastCompleted}) => {

    console.log(Date.parse(lastCompleted));

    return (
        <Paper className="habit">
           {name}
           <Checkbox checked={isToday(lastCompleted)} /> 
        </Paper>
    )
}

export default Habit
