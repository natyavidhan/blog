import Blogbox from "./components/blogbox";
import PropTypes from 'prop-types'
import {Helmet} from "react-helmet";
import Head from "./components/head";
function App(props) {
	return (
		<>
        <Helmet>
            <title>Natya's blog</title>
            <meta name="description" content="My personal blog for posting stuff" />
        </Helmet>
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
		</>
	);
}

App.propTypes = {
    blogs: PropTypes.array
}

export default App;
