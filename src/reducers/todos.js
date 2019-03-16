import produce from "immer";

const initialState = [
  {
    id: 1,
    text: "complete app",
    completed: false
  }
];

const todos = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "ADD_TODO":
        draft.push({
          id: action.id,
          text: action.text,
          completed: false
        });
        break;
      case "TOGGLE_TODO":
        draft = draft.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
        break;
    }
  });

export default todos;
