import { ReactNode } from "react";

export type PrivateProps = {
	Item: () => ReactNode;
}

export interface AuthContextData {
    user: string;
    setUser: (name: string) => void;
}

export interface AuthContextProps {
    children: ReactNode;
}

