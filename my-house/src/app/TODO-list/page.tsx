'use client'

import TODOList, { Task } from '@/components/TODOList/TODOList'

import { useEffect, useState } from 'react'
import styles from '@/components/Page/Page.module.scss'
import { getTodos, updateTodos } from '@/api/todo'
import { v4 as uuidv4 } from 'uuid'
import TODOAddList from '@/components/TODOList/TODOAddList'

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
    const handleTodoAdd = (text: string) => {
        const newOrder = TODOs.sort((a, b) => a.order - b.order)[0].order + 1
        const newTodo: TodosType = {
            id: uuidv4(),
            order: newOrder,
            name: text,
            tasks: [],
        }
        const updatedTodos = [...TODOs, newTodo]
        setTODOs(updatedTodos)
    }
    return (
        <main className={styles.page}>
            <TODOAddList onAdd={handleTodoAdd} />
            <section className={styles.todos}>
                {TODOs?.map((Todo) => (
                    <TODOList
                        key={Todo.id}
                        onChange={handleUpdateTodo}
                        TODO={Todo}
                    />
                ))}
            </section>
        </main>
    )
}
