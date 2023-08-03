import { createContext, useEffect, useState } from "react";

import { AuthContextProps, AuthContextData, User } from "../types/Context";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children } : AuthContextProps) => {
	const [ user, setUser ] = useState("");

	useEffect(()=> {
		console.log(user);
	}, [user]);

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

	return (
		<AuthContext.Provider value={{ user, signed: !!user, setUser, signup }}>
			{children}
		</AuthContext.Provider>
	);
};