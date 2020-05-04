import { View, ViewActionType, changeView } from "./types";

const initialState = View.HOME;

export function viewReducer(state: View = initialState, action: ViewActionType): View {
  switch (action.type) {
    case changeView:
      return action.payload
    default: {
      return state;
    }
  }
}