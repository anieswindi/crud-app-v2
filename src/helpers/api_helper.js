import axios from 'axios';

//apply base url for axios
const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

const __URL__ = 'https://jsonplaceholder.typicode.com';

const axiosApi = axios.create({
	baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
	return config;
});

axiosApi.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export async function get(url, config) {
	console.log('url', url, 'config !', config);

	let urlLink = __URL__ + url;
	return await axios.get(urlLink).then((response) => {
		console.log('res !', response);
		return response.data;
	});
}

export async function getPosts(url, config) {
	return await axiosApi
		.get(url, {
			...config,
		})
		.then((response) => response.data);
}
