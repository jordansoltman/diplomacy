import { View, ViewActionType, changeView } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState = View.HOME;

const viewReducer: Reducer<View, AnyAction> = (state: View = initialState, action: AnyAction): View => {
    switch ((action as ViewActionType).type) {
        case changeView:
            return action.payload;
        default: {
            return state;
        }
    }
};

export default viewReducer;
