let nextTodoId = 0;

const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

const toggleToDo = id => ({
  type: "TOGGLE_TODO",
  id
});

const deleteToDo = id => ({
  type: "DELETE_TODO",
  id
});
export default { addTodo, toggleToDo, deleteToDo };
