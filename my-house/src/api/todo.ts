import { TodosType } from '@/app/TODO-list/page'
import data from '@/app/TODOs.json'
import { v4 as uuidv4 } from 'uuid'

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

export function addTodo(text:string, todoList:TodosType[]) {
    const newTodo: TodosType = {
        id: uuidv4(),
        order: todoList.length,
        name: text,
        tasks: [],
    }
    const updatedTodos = [...todoList, newTodo]
    return updatedTodos
}

export function deleteTodo(deletedTodoId:string, todoList:TodosType[]) {
    const updatedTodos = todoList.filter((todo) => todo.id !== deletedTodoId)
    return updatedTodos
}