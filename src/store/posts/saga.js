import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';

import {
	GET_POSTS,
	GET_POST_DETAILS,
	ADD_POST,
	DELETE_POST,
} from './actionTypes';

import {
	getPostsSuccess,
	getPostsFail,
	getPostDetailsSuccess,
	getPostDetailsFail,
	addPostSuccess,
	addPostFail,
	deletePostSuccess,
	deletePostFail,
} from './actions';

import {
	getPosts,
	getPostDetails,
	addPost,
	deletePost,
} from '../../helpers/backend_helper';

function* onGetPosts() {
	try {
		const response = yield call(getPosts);
		yield put(getPostsSuccess(response));
	} catch (error) {
		yield put(getPostsFail(error.response));
	}
}

function* onAddPost() {
	try {
		const response = yield call(addPost);
		yield put(addPostSuccess(response));
	} catch (error) {
		yield put(addPostFail(error.response));
	}
}

function* onGetPostDetails({ payload: id }) {
	try {
		const response = yield call(getPostDetails, id);
		yield put(getPostDetailsSuccess(response));
	} catch (error) {
		yield put(getPostDetailsFail(error.response));
	}
}

function* onDeletePost() {
	try {
		const response = yield call(deletePost);
		console.log('del 3', response);
		yield put(deletePostSuccess(response));
	} catch (error) {
		yield put(deletePostFail(error.response));
	}
}

function* CartSaga() {
	yield takeEvery(GET_POSTS, onGetPosts);
	yield takeEvery(GET_POST_DETAILS, onGetPostDetails);
	yield takeLatest(ADD_POST, onAddPost);
	yield takeEvery(DELETE_POST, onDeletePost);
}

export default CartSaga;
