import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Habit from './Habit';

const HabitList = () => {

    const {habits} = useContext(GlobalContext);

    return (
        <div className="habitlist">
            {habits.map(habit => <Habit name={habit.name} />)}
        </div>
    )
}

export default HabitList
