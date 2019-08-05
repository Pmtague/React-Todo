import React from 'react';

const Todo = props => {
    console.log('Todo', props.item)
    return (
        <div
            className={ `item${ props.item.completed ? ' complete' : '' }` }
            onClick={ () => props.toggleItem(props.item.id) }
        >
            <p>{ props.item.todo }</p>
        </div>
    );
};

export default Todo;