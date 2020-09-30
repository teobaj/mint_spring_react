import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Habit from './Habit';

const HabitList = () => {

    const {habits} = useContext(GlobalContext);

    return (
        <div className="habitlist">
            {habits.map(habit => <Habit key={habit.id} name={habit.name} lastCompleted={habit.lastCompleted} />)}
        </div>
    )
}

export default HabitList
