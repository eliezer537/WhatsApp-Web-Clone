import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Authentication } from './pages/Authentication';
import { Home } from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Authentication} />
			<Route path='/home' component={Home} />
		</BrowserRouter>
	);
}

export default App;
