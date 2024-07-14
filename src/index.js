import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './Blog';
import './index.css';
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/blog",
		element: <Blog />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);