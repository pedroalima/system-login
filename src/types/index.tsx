import { ReactNode } from "react";

export type PrivateProps = {
	Item: () => ReactNode;
}

export interface AuthContextProps {
    children: ReactNode
    initUser: string;
}

export interface AuthContextData {
    user: string;
    setUser: (name: string) => void;
}