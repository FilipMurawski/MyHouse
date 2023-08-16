'use client'

import TODOList, { Task } from '@/components/TODOList/TODOList'

import { useEffect, useState } from 'react'
import styles from '@/components/Page/Page.module.scss'
import { getTodos, updatedTodos } from '@/api/todo'

export interface TODOsType {
    name: string
    order: number
    tasks: Array<Task>
    id: string
}

export default function Home() {
    const [TODOs, setTODOs] = useState<TODOsType[]>([])
    useEffect(() => {
        setTODOs(getTodos())
    }, [])

    const setNewTODOs = (NewTODOs: Array<TODOsType>) => {
        setTODOs(NewTODOs)
    }
    const handleUpdateTodo = (updatedTODO: TODOsType) => {
        const todos = updatedTodos(updatedTODO, TODOs)
        setTODOs(todos)
    }
    return (
        <main className={styles.page}>
            <>
                {TODOs?.map((TODO) => (
                    <TODOList
                        // name={TODO.name}
                        // order={TODO.order}
                        // tasks={TODO.tasks}
                        key={TODO.id}
                        onChange={handleUpdateTodo}
                        TODO={TODO}
                        // id={TODO.id}
                    />
                ))}
            </>
        </main>
    )
}
