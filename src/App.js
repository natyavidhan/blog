import Blogbox from "./components/blogbox";
import PropTypes from 'prop-types'
import Head from "./components/head";
function App(props) {
	return (
		<div className="container mt-5">
			<Head />
			<div className="blogs mt-5">
				{/* {props.blogs[0].name} */}
				{props.blogs.map((elem)=>{
					return <Blogbox
						name={elem.name}
						date={elem.date}
					/>
				})}
			</div>
		</div>
	);
}

App.propTypes = {
    blogs: PropTypes.array
}

export default App;
