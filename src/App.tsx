import React from 'react';
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'Finish Course 1'}, {id: 't2', text: 'Finish Course 2'}, {id: 't3', text: 'Finish Course 3'}]
  return (
    <div className="App">
      <NewTodo/>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
