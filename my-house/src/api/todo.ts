import { TodosType } from '@/app/TODO-list/page'
import data from '@/app/TODOs.json'

export function getTodos(): TodosType[] {
    return data.TODOs
}

export function updateTodos(updatedTodo: TodosType, todoList: TodosType[]) {
    const updatedTODOs = todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo
        }
        return todo
    })

    // const result = axios.post("url", updatedTodo)
    return updatedTODOs;
}