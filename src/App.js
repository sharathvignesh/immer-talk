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

  const toggleToDo = id => {
    const { toggleToDo } = props;
    toggleToDo(id);
  };

  const deleteToDo = id => {
    const { deleteToDo } = props;
    deleteToDo(id);
  };

  return (
    <>
      <Form addToDo={addToDo} />
      <TodoList
        items={props.todos}
        toggleToDo={toggleToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};

const mapStoreToProps = store => ({
  todos: store.todos
});

const mapActionsToProps = dispatch => ({
  addToDo: actionItem => dispatch(toDoActions.addTodo(actionItem)),
  toggleToDo: id => dispatch(toDoActions.toggleToDo(id)),
  deleteToDo: id => dispatch(toDoActions.deleteToDo(id))
});

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(App);
