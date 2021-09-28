import React from 'react';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';

const App: React.FC = () =>{

  return (
    <>
      <TodoApp />
      <CounterContainer />
    </>
  );
}

export default App;
