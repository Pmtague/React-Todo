import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    todo: 'Daily JavaScript code challenge',
    id: 1,
    completed: false
  },
  {
    todo: 'Finish MVP on project',
    id: 2,
    completed: false
  },
  {
    todo: 'Win at life',
    id: 3,
    completed: false
  },
  {
    todo: 'Sleep eight hours',
    id: 4,
    completed: false
  },
  {
    todo: 'Go for a walk',
    id: 5,
    completed: false
  },
  {
    todo: 'Give Hope a bath',
    id: 6,
    completed: false
  },
  {
    todo: 'Study the TK for tomorrow',
    id: 7,
    completed: false
  },
  {
    todo: 'Nap every chance I get',
    id: 8,
    completed: false
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: todoData
    };
  }

  toggleItem = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }
  
  addItem = itemName => {
    const newItem = {
      todo: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: [ ...this.state.items, newItem ]
    });
  };

  clearCompleted = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <h2>Todo!</h2>
        <TodoForm addItem={ this.addItem }/>
        <TodoList 
          items={ this.state.items }
          toggleItem={ this.toggleItem }
          clearCompleted={ this.clearCompleted }
        />
      </div>
    );
  }
}

export default App;
