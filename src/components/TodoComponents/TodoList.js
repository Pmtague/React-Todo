import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            { props.items.map(item => (
                <Todo key={ item.id } item={ item } toggleItem={ props.toggleItem } />
            ))}

            <button className='clr-btn' onClick={ props.clearCompleted }>Clear Completed</button>
        </div>
    );
};

export default TodoList;