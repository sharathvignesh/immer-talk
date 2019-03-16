import React from "react";
import { connect } from "react-redux";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { toDoActions } from "./actions/";

const App = props => {
  const addToDo = item => {
    const { addToDo } = props;
    addToDo(item);
  };

  return (
    <>
      <Form addToDo={addToDo} />
      <TodoList items={props.todos} />
    </>
  );
};

const mapStoreToProps = store => ({
  todos: store.todos
});

const mapActionsToProps = dispatch => ({
  addToDo: actionItem => dispatch(toDoActions.addTodo(actionItem))
});

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(App);
