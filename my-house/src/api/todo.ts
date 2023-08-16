import { TODOsType } from '@/app/TODO-list/page'
import data from '@/app/TODOs.json'

export function getTodos(): TODOsType[] {
    return data.TODOs
}

export function updatedTodos(updatedTodo: TODOsType, todoList: TODOsType[]) {
    const updatedTODOs = todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo
        }
        return todo
    })

    // const result = axios.post("url", updatedTodo)
    return updatedTODOs;
}