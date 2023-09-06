import { actionTypes } from '../actionTypes/PostActionTypes';

const initialState = [];

export const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_POST:
            return action.payload;
        case actionTypes.CREATE_POST:
            return { ...state }
        case actionTypes.UPDATE_POST:
            return state
        case actionTypes.DELETE_POST:
            return state
        default:
            return state
    }
};