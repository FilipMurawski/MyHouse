import styles from './TODOList.module.scss'
import React, { ChangeEvent, useState } from 'react'
import { Task } from './TODOList'

interface Props {
    onChange: (task: Task) => void
    onDelete: (taskId: string) => void
    task: Task
    key: string
}

const TODOItem = ({ task, onChange, onDelete }: Props) => {
    const { checked, id, text } = task
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...task, text: event.target.value })
    }
    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...task, checked: event.target.checked })
    }
    const handleDelete = () => {
        onDelete(task.id)
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
