'use client'

import TODOList, { Task } from '@/components/TODOList/TODOList'

import { useEffect, useState } from 'react'
import styles from '@/components/Page/Page.module.scss'
import { getTodos, updateTodos } from '@/api/todo'

export interface TodosType {
    name: string
    order: number
    tasks: Array<Task>
    id: string
}

export default function Home() {
    const [TODOs, setTODOs] = useState<TodosType[]>([])
    useEffect(() => {
        setTODOs(getTodos())
    }, [])

    const handleUpdateTodo = (updatedTodo: TodosType) => {
        const todos = updateTodos(updatedTodo, TODOs)
        setTODOs(todos)
    }
    return (
        <main className={styles.page}>
            <>
                {TODOs?.map((Todo) => (
                    <TODOList
                        key={Todo.id}
                        onChange={handleUpdateTodo}
                        TODO={Todo}
                    />
                ))}
            </>
        </main>
    )
}
