import React from 'react';
import ContextAPISample from './compontents/ContextAPISample';
import { SampleProvider } from './compontents/SampleContext';

const App: React.FC = () =>{

  return (
    <>
      <SampleProvider>  
          <ContextAPISample />
      </SampleProvider> 
    </>
  );
}

export default App;
