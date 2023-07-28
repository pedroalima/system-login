import { createContext } from "react";

import { AuthContextProps, AuthContextData } from "../types";


export const AuthContext = createContext<AuthContextData | object>({});

export const AuthProvider = ({ children } : AuthContextProps) => {

	return (
		<AuthContext.Provider value={{ name: "Pedro" }}>
			{children}
		</AuthContext.Provider>
	);
};