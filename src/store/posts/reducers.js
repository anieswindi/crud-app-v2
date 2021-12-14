import {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	GET_POST_DETAILS,
	GET_POST_DETAILS_SUCCESS,
	GET_POST_DETAILS_FAIL,
	ADD_POST,
	ADD_POST_SUCCESS,
	PATCH_POST,
	DELETE_POST,
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
				posts: [action.payload, ...state.posts],
				loadingPosts: false,
			};
			break;
		case PATCH_POST:
			Object.assign(
				state.posts.find((b) => b.id === action.payload.id),
				action.payload.body
			);
			state = {
				...state,
				posts: state.posts,
				loadingPosts: false,
			};
			break;
		case ADD_POST_SUCCESS:
			state = { ...state, posts: action.payload, loadingPostsAdd: false };
			break;
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((item) => item.id !== action.payload),
				loadingPosts: false,
			};

		default:
			state = { ...state };
			break;
	}
	return state;
};

export default PostReducer;
