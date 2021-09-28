import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId: number = 1;

// https://www.npmjs.com/package/typesafe-actions
export const addTodo = createStandardAction(ADD_TODO).map((
    (text: string) => ({
        payload: {
            id: nextId++,
            text
        }
    })
))

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();