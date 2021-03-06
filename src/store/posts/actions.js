import {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	GET_POST_DETAILS,
	GET_POST_DETAILS_SUCCESS,
	GET_POST_DETAILS_FAIL,
	ADD_POST,
	ADD_POST_SUCCESS,
	ADD_POST_FAIL,
	PATCH_POST,
	PATCH_POST_SUCCESS,
	PATCH_POST_FAIL,
	DELETE_POST,
	DELETE_POST_FAIL,
	DELETE_POST_SUCCESS,
} from './actionTypes';

export const getPosts = () => {
	return {
		type: GET_POSTS,
	};
};

export const getPostsSuccess = (posts) => {
	return {
		type: GET_POSTS_SUCCESS,
		payload: posts,
	};
};

export const getPostsFail = (error) => {
	return {
		type: GET_POSTS_FAIL,
		payload: error,
	};
};

export const getPostDetails = (id) => {
	return {
		type: GET_POST_DETAILS,
		payload: id,
	};
};

export const getPostDetailsSuccess = (post) => {
	return {
		type: GET_POST_DETAILS_SUCCESS,
		payload: post,
	};
};

export const getPostDetailsFail = (error) => {
	return {
		type: GET_POST_DETAILS_FAIL,
		payload: error,
	};
};

export const addPost = (data) => {
	return {
		type: ADD_POST,
		payload: data,
	};
};

export const addPostSuccess = (post) => {
	return {
		type: ADD_POST_SUCCESS,
		payload: post,
	};
};

export const addPostFail = (error) => {
	return {
		type: ADD_POST_FAIL,
		payload: error,
	};
};

export const patchPost = (data) => {
	console.log('patch 1', data);
	return {
		type: PATCH_POST,
		payload: data,
	};
};

export const patchPostSuccess = (post) => {
	return {
		type: PATCH_POST_SUCCESS,
		payload: post,
	};
};

export const patchPostFail = (error) => {
	return {
		type: PATCH_POST_FAIL,
		payload: error,
	};
};

export const deletePost = (data) => {
	return {
		type: DELETE_POST,
		payload: data,
	};
};

export const deletePostSuccess = (post) => {
	return {
		type: DELETE_POST_SUCCESS,
		payload: post,
	};
};

export const deletePostFail = (error) => {
	return {
		type: DELETE_POST_FAIL,
		payload: error,
	};
};
