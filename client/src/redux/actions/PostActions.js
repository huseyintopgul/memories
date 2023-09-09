import { actionTypes } from "../actionTypes/PostActionTypes";
import * as api from '../../api/index.js';

// GET POST ACTION
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: actionTypes.GET_ALL_POST, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
};
// CREATE POST ACTION
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: actionTypes.CREATE_POST, payload: data })
    } catch (error) {
        console.log(error);
    }
};
// UPDATE POST ACTION
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: actionTypes.UPDATE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};
// DELETE POST ACTION
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.updatePost(id);
        dispatch({ type: actionTypes.DELETE_POST, payload: id })
    } catch (error) {
        console.log(error);
    }
};
