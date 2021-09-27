import React from 'react';
import ContextAPISample from './compontents/ContextAPISample';
import { SampleProvider } from './compontents/SampleContext';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';

const App: React.FC = () =>{

  return (
    <TodoApp />
    // <CounterContainer />
    // <>
    //   <SampleProvider>  
    //       <ContextAPISample />
    //   </SampleProvider> 
    // </>
  );
}

export default App;
