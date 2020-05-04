//actions for managing the view state.

import { View, ViewActionType, changeView } from './types';

//action is of type 'view', returns a 'ViewActionType'
export function changeViewAction(view: View): ViewActionType {
    return {
        type: changeView,
        payload: view
    };
}
