import { ReactNode } from "react";

export type PrivateProps = {
	Item: () => ReactNode;
}

export interface AuthContextData {
    signed: string | boolean;
    user: string;
    setUser: (name: string) => void;
}

export interface AuthContextProps {
    children: ReactNode;
}

