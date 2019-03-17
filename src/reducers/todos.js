import produce from "immer";

const initialState = [];

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
        return draft;
      case "DELETE_TODO":
        draft = produce(draft, draftState =>
          draftState.filter(todo => todo.id !== action.id)
        );
        return draft;
    }
  });

export default todos;
