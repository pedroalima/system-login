import { createContext, useState } from "react";

import { AuthContextProps, AuthContextData } from "../types/Context";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children, initUser } : AuthContextProps) => {
	const [ user, setUser ] = useState(initUser);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};