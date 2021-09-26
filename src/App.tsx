import React from 'react';
import Counter from './compontents/Counter';
import MyForm from './compontents/MyForm';
import ReducerSample from './compontents/ReducerSample';

const App: React.FC = () =>{
  const onSubmit = (form: {name:string, description: string}) => {
    console.log(form);
  };

  return (
    <ReducerSample />
  );
}

export default App;
