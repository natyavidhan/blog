import Blogbox from "./components/blogbox";
import PropTypes from 'prop-types'

function App(props) {
	return (
		<div className="container mt-5">
			<div className="header text-center">
				<h1>Natya's Blog</h1>
				<h5>Stuff that fascinates me</h5>
				<div className="buttons mt-3">
					<button className="header-button">Home Page</button>
					<button className="header-button">LinkedIn</button>
					<button className="header-button">Github</button>
				</div>
			</div>
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
