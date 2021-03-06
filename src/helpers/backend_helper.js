import { get, post, patch, del } from './api_helper';
import * as url from './url_helper';

//Post
export const getPosts = () => get(url.GET_POSTS);

//Post
export const getPostDetails = (id) =>
	get(url.GET_POST_DETAILS, {
		params: {
			id: id,
		},
	});

export const addPost = (data) => post(url.ADD_POST, data);
export const patchPost = (data) => patch(url.PATCH_POST, data);
export const deletePost = (data) => del(url.DELETE_POST, data);
