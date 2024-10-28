import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";
import TodoList2 from "./todos/TodoList2";
import TodoList3 from "./todos/TodoList3";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <hr />
        <TodoList />
        <TodoList2 />
        <TodoList3 />
    </div>
  );
};
