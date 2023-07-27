import "./App.scss";
import Root from "./components/Root";
import Home from "./routes/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={ <Root /> }>
		<Route path="/" element={ <Home /> } />
	</Route>
));

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;