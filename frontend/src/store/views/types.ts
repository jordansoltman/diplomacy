//possible views
export enum View {
  HOME,
  GAME,
  PUBLIC_GAME
}
//action types for any view action
export const changeView = 'CHANGE_VIEW'

//interface for declaring actions
interface ChangeView {
  type: typeof changeView,
  payload: View
}

//export a type for this action type.
export type ViewActionType = ChangeView
