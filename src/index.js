import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ListPokemons from './components/ListPokemons/ListPokemons';
import reportWebVitals from './reportWebVitals';
import './index.css';
import CardDetail from './components/CardDetails/CardDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ListPokemons />,
	},

	{
		path: '/pokemon/:pokeId',
		element: <CardDetail />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
