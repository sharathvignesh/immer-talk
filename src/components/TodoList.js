import React from "react";
import { connect } from "react-redux";
import { toDoActions } from "../actions/";
class TodoList extends React.Component {
  componentDidMount() {
    this.props.addToDo("completeApp");
  }

  render() {
    return <div>{JSON.stringify(this.props.todos)}</div>;
  }
}

const mapStoreToProps = store => ({
  todos: store.todos
});

const mapActionsToProps = dispatch => ({
  addToDo: actionItem => dispatch(toDoActions.addTodo(actionItem))
});

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(TodoList);
