import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInsert from '../compontents2/TodoInsert';
import TodoList from '../compontents2/TodoList';
import { RootState } from '../modules_typeSafeAction';
import { addTodo, removeTodo, toggleTodo } from '../modules_typeSafeAction/todos';

function TodoApp() {
    const todos = useSelector((state: RootState)=> state.todos)
    const dispatch = useDispatch();
    
    const onInsert = (text:string) => {
        dispatch(addTodo(text));
    }

    const onToggle = (id : number)=> {
        dispatch(toggleTodo(id));
    }

    const onRemove = (id: number) => {
        dispatch(removeTodo(id))
    }

    return(
        <>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </>
    )
}

export default TodoApp;