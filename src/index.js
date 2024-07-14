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

let routes = [
	{
		path: "/",
		element: <App blogs={blogs} />
	}
]
blogs.forEach((elem) => {
	$.ajax({
		type: 'GET',
        url: elem.page,
		success: function(msg){
			routes.push({
				path: `/blog/${elem.date}`,
				element: <Blog name={elem.name} date={elem.date} markdown={msg} />
			})
		}
	})
})

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);