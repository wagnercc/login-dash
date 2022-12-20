import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ErrorPage from "./components/ErrorPage";

function App() {
	return (
		<BrowserRouter>
			<nav className="navigator">
				<Link className="nav-link" to="/">
					Initial Page
				</Link>
				<Link className="nav-link" to="/first-page">
					First Page
				</Link>
				<Link className="nav-link" to="/second-page">
					Second Page
				</Link>
				<Link className="nav-link" to="/error-page">
					Error Page
				</Link>
			</nav>
			<Routes>
                <Route path="/" element={<InitialPage />} />
				<Route path="/first-page" element={<FirstPage />} />
				<Route path="/second-page" element={<SecondPage />} />
				<Route path="/error-page" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
