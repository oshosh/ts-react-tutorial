import React from 'react';

type GreetingsProps2 = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

function FunctionGreetings({ name, mark, optional, onClick }: GreetingsProps2) {

  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}

      <div>
          <button onClick={handleClick}>Click Me !</button>
      </div>
    </div>
  );
}

FunctionGreetings.defaultProps = {
  mark: '!'
};

export default FunctionGreetings;