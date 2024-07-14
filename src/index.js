import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './Blog';
import './index.css';
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import $ from 'jquery';

const blogs = [
	{
		"name": "Welcome!",
		"date": "14-07-2024",
		"page":	"blogs/welcome.md"
	}
]

const router = createHashRouter([
	{
		path: "/",
		element: <App blogs={blogs} />
	},
	{
		path: "/:date",
		element: <Blog />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);