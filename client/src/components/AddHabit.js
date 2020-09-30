import { Card, TextField } from '@material-ui/core'
import React from 'react'

const AddHabit = () => {
    return (
        <Card>
            <form className="addHabit">
                <TextField label="Habit name"/>
                <button className="btn-primary" style={{margin:10}}>Add Habit</button>
            </form>
        </Card>
    )
}

export default AddHabit
