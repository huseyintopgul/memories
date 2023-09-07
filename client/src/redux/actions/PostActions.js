import { actionTypes } from "../actionTypes/PostActionTypes";
import * as api from '../../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: actionTypes.GET_ALL_POST, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: actionTypes.CREATE_POST, payload: data })
    } catch (error) {
        console.log(error.message);
    }
};
