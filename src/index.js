import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// const app = (
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</Provider>
// );

// ReactDOM.render(<app />, document.getElementById('root'));
