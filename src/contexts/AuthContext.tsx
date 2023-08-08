import { createContext, useEffect, useState } from "react";

import { AuthContextProps, AuthContextData, User } from "../types/Context";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children } : AuthContextProps) => {
	const [ user, setUser ] = useState<object | null>({});

	useEffect(() => {
		const jsonToken = localStorage.getItem("user_token");
		const jsonUser = localStorage.getItem("user");

		if (typeof jsonToken === "string" && typeof jsonUser === "string") {
			const tokens = JSON.parse(jsonToken);
			const users: {email: string, password: string}[] = JSON.parse(jsonUser);

			const hasUser = users.filter(user => user.email === tokens.email);

			if (hasUser) {
				setUser(hasUser[0]);
			}
		}
	
	}, []);

	console.log(user);

	const signin = (email: string, password: string) => {
		const jsonUserStorage = localStorage.getItem("user");
		let userStorage: User = [];

		if ( typeof jsonUserStorage === "string") {
			userStorage = JSON.parse(jsonUserStorage);
		}

		const hasUser = userStorage.filter(user => user.email === email);
		
		if (hasUser?.length) {
			if (hasUser[0].email === email && hasUser[0].password === password) {
				const token = Math.random().toString(36).substring(2);
				localStorage.setItem("user_token", JSON.stringify({email, token}));
				setUser({ email, password});
			} else {
				return "Incorrect email or password!";
			}
		} else {
			return "Unregistered user!";
		}
	};

	const signup = (email: string, password: string) => {
		const jsonUserStorage = localStorage.getItem("user");
		let userStorage: User = [];

		if ( typeof jsonUserStorage === "string") {
			userStorage = JSON.parse(jsonUserStorage);
		}

		const hasUser = userStorage.filter(user => user.email === email);
		
		if (hasUser.length) {
			return "You already have an account with this e-mail";
		}
		
		let newUser;

		if (userStorage) {
			newUser = [...userStorage, {email, password}];
		} else {
			newUser = [{email, password}];
		}
		
		localStorage.setItem("user", JSON.stringify(newUser));
		return;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user_token");
	};

	return (
		<AuthContext.Provider value={{ user, signed: !!user, logout, signup, signin }}>
			{children}
		</AuthContext.Provider>
	);
};