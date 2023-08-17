import { TodosType } from '@/app/TODO-list/page'
import TODOItem from './TODOItem'
import styles from './TODOList.module.scss'
import React from 'react'
import TODOAddItem from './TODOAddItem'
import { v4 as uuidv4 } from 'uuid'

export interface Task {
    order: number
    text: string
    checked: boolean
    id: string
}
export interface Props {
    onChange: (todo: TodosType) => void
    TODO: TodosType
    key: string
}

const TODOList = ({ onChange, TODO }: Props) => {
    const { name, tasks } = TODO
    const handleTaskUpdate = (updatedTask: Task) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
                return updatedTask
            }
            return task
        })
        onChange({ ...TODO, tasks: updatedTasks })
    }
    const handleTaskDelete = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        onChange({ ...TODO, tasks: updatedTasks })
    }
    const handleTaskAdd = (text: string) => {
        const newOrder = tasks.sort((a, b) => a.order - b.order)[0].order + 1
        const newTask: Task = {
            checked: false,
            id: uuidv4(),
            order: newOrder,
            text: text,
        }
        const updatedTasks = [...tasks, newTask]
        onChange({ ...TODO, tasks: updatedTasks })
    }
    return (
        <section className={styles.TODOList}>
            <header className={styles.TODOList__header}>
                <h3 className={styles.TODOList__name}>{name}</h3>
                <div className={styles.TODOList__settingsButton}>...</div>
            </header>
            <ul className={styles.TODOList__tasks}>
                {tasks?.map((task) => (
                    <TODOItem
                        key={task.id}
                        onChange={handleTaskUpdate}
                        onDelete={handleTaskDelete}
                        task={task}
                    />
                ))}
                <TODOAddItem onAdd={handleTaskAdd} />
            </ul>
        </section>
    )
}

export default TODOList
