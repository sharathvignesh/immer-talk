import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return <div>{JSON.stringify(this.props.todos)}</div>;
  }
}

const mapStoreToProps = store => ({
  todos: store
});
export default connect(
  mapStoreToProps,
  null
)(TodoList);
