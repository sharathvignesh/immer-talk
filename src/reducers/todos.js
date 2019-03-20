import produce from "immer";

const initialState = {
  list: []
};

const todos = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "ADD_TODO":
        draft.list.push({
          id: action.id,
          text: action.text,
          completed: false
        });
        break;
      case "TOGGLE_TODO":
        draft.list = draft.list.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          );
        break;
      case "DELETE_TODO":
        draft.list = draft.list.filter(todo => todo.id !== action.id)
        break;
    }
  });

export default todos;
