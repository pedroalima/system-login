import "./App.scss";

import { PrivateProps } from "./types/Context";

import Root from "./routes/Root";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hook/useAuth";

const Private = ({ Item }: PrivateProps) => {
	const { signed } = useAuth();

	return signed === true ? <Item /> : <SignIn />;
};

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={createBrowserRouter(createRoutesFromElements(
				<Route path="/" element={ <Root /> }>
					<Route path="/home" element={ <Private Item={Home} />} />
					<Route path="/" element={ <SignIn /> } />
					<Route path="/signup" element={ <SignUp /> } />
					<Route path="*" element={ <SignIn /> } />
				</Route>
			))} />
		</AuthProvider>
	);
}

export default App;