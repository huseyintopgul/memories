import { actionTypes } from '../actionTypes/PostActionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_POST:
            return action.payload;
        case actionTypes.CREATE_POST:
            return [...posts, action.payload];
        default:
            return posts;
    }
};