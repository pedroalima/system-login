import "./App.scss";

import { PrivateProps } from "./types";

import Root from "./components/Root";
import SignIn from "./routes/SignIn";
import Home from "./routes/Home";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const Private = ({ Item }: PrivateProps) => {
	const signed = false;

	return signed ? <Item /> : <SignIn />;
};

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={ <Root /> }>
		<Route path="/" element={ <SignIn /> } />
		<Route path="/home" element={ <Private Item={Home} />} />
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