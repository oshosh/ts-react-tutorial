import React from "react";
import CounterContainer from "./container/CounterContainer";
import GithubProfileLoader from "./container/GithubProfileLoader";
import TodoApp from "./container/TodoApp";

const App: React.FC = () => {
  return (
    <>
      {/* <TodoApp />
      <CounterContainer /> */}
      <GithubProfileLoader />
    </>
  );
};

export default App;
