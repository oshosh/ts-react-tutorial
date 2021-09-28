import React from 'react';
import { Todo } from '../modules_typeSafeAction/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[]; // Todo type의 배열 형태로 props가 넘어옴
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

function TodoList({todos, onToggle, onRemove}: TodoListProps) {
    if(todos.length === 0) return <p>등록된 항목이 없습니다.</p>

    return(
        <ul>
            {todos.map(todo => (
            <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    )
};

export default TodoList;