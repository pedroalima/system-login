import "./App.scss";

import Root from "./components/Root";
import SignIn from "./routes/SignIn";
// import Home from "./routes/Home";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// const Private = () => {
// 	const signed = false;

// 	return signed ? <Item /> : <SignIn />;
// };

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={ <Root /> }>
		<Route path="/" element={ <SignIn /> } />
		{/* <Route path="/home" element={ < />} /> */}
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