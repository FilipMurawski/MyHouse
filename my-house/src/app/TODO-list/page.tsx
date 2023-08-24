'use client'

import TODOList, { Task } from '@/components/TODOList/TODOList'

import { useEffect, useState } from 'react'
import styles from '@/components/Page/Page.module.scss'
import { addTodo, deleteTodo, getTodos, updateTodos } from '@/api/todo'
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
        const updatedTodos = addTodo(text, TODOs)
        setTODOs(updatedTodos)
    }

    const handleTodoDelete = (TodoId: string) => {
        const updatedTodos = deleteTodo(TodoId, TODOs)
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
                        onDelete={handleTodoDelete}
                    />
                ))}
            </section>
        </main>
    )
}
