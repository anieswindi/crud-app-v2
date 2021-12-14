import {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	GET_POST_DETAILS,
	GET_POST_DETAILS_SUCCESS,
	GET_POST_DETAILS_FAIL,
	ADD_POST,
	ADD_POST_SUCCESS,
} from './actionTypes';

const initialState = {
	posts: [],
	post: {},
	loadingPosts: false,
	loadingPostDetails: false,
	error: {
		message: '',
	},
	loadingPostsAdd: false,
};

const PostReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			state = { ...state, loadingPosts: true };
			break;
		case GET_POSTS_SUCCESS:
			console.log('get', state, action);

			state = { ...state, posts: action.payload, loadingPosts: false };
			break;
		case GET_POSTS_FAIL:
			state = {
				...state,
				error: {
					message: 'Error',
				},
				loadingPosts: false,
			};
			break;
		case GET_POST_DETAILS:
			state = { ...state, loadingPostDetails: true };
			break;
		case GET_POST_DETAILS_SUCCESS:
			state = {
				...state,
				post: action.payload[0],
				loadingPostDetails: false,
			};
			break;
		case GET_POST_DETAILS_FAIL:
			state = {
				...state,
				error: {
					message: 'Error',
				},
				loadingPostDetails: false,
			};
			break;
		case ADD_POST:
			state = {
				...state,
				post: action.payload,
				loadingPostsAdd: true,
			};
			break;
		case ADD_POST_SUCCESS:
			state = { ...state, posts: action.payload, loadingPostsAdd: false };
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};

export default PostReducer;
