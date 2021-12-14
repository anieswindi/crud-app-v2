import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_POSTS, GET_POST_DETAILS, ADD_POST } from './actionTypes';

import {
	getPostsSuccess,
	getPostsFail,
	getPostDetailsSuccess,
	getPostDetailsFail,
	addPostSuccess,
	addPostFail,
} from './actions';

import {
	getPosts,
	getPostDetails,
	addPost,
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

function* CartSaga() {
	yield takeLatest(GET_POSTS, onGetPosts);
	yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
	yield takeLatest(ADD_POST, onAddPost);
}

export default CartSaga;
