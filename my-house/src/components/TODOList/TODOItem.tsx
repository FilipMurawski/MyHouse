import styles from './TODOList.module.scss'
import React, { ChangeEvent, useState } from 'react'
import { Task } from './TODOList'
import { TODOsType } from '@/app/TODO-list/page'

interface Props {
    onChange: (task: Task) => void
    task: Task
    key: string
}

const TODOItem = ({ task, onChange }: Props) => {
    const { checked, id, order, text } = task
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...task, text: event.target.value })
    }
    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        // setChecked(event.target.checked)
        // const newTODOs = props.TODOs;
        // newTODOs[props.TODOOrder].tasks[props.order].checked = event.target.checked;
        // props.onChange(newTODOs);
        console.log(id, event.target.checked)
    }
    const handleDelete = () => {
        // const newTODOs = props.TODOs;
        // newTODOs[props.TODOOrder].tasks = newTODOs[props.TODOOrder].tasks.filter((task) => task.id !== eventProps.id);
        // console.log(newTODOs);

        // return props.onChange(newTODOs);
        console.log(id)
    }

    return (
        <li className={styles.TODOList__task}>
            <input
                type="checkbox"
                id={id}
                className={styles.TODOList__checkbox}
                checked={checked}
                onChange={handleChecked}
            />
            <label htmlFor={id}>
                <input type="text" value={text} onChange={handleInputChange} />
            </label>
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default TODOItem
