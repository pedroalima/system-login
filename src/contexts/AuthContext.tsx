import { createContext, useState } from "react";

import { AuthContextProps, AuthContextData } from "../types/Context";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children } : AuthContextProps) => {
	const [ user, setUser ] = useState("");

	return (
		<AuthContext.Provider value={{ user, signed: !user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};