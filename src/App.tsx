import "./App.scss";
import Root from "./components/root";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={ <Root /> }>
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