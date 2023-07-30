import "./App.scss";

import { PrivateProps } from "./types/Context";

import Root from "./routes/Root";
import SignIn from "./routes/SignIn";
import Home from "./routes/Home";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const Private = ({ Item }: PrivateProps) => {
	const signed = false;

	return signed ? <Item /> : <SignIn />;
};

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={createBrowserRouter(createRoutesFromElements(
				<Route path="/" element={ <Root /> }>
					<Route path="/" element={ <SignIn /> } />
					<Route path="/home" element={ <Private Item={Home} />} />
					<Route path="*" element={ <SignIn /> } />
				</Route>
			))} />
		</AuthProvider>
	);
}

export default App;