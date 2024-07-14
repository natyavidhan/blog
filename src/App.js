import Blogbox from "./components/blogbox";

function App() {
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
				<Blogbox name={"Yes"} date={"17-11-2006"}/>
			</div>
		</div>
	);
}

export default App;
